import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const WINDOW_MS = 60_000
const recent = new Map<string, number>()

export async function POST(req: Request){
 try{
  const body=await req.json()
  if(body.website_confirm) return NextResponse.json({ok:true})
  const required=['company_name','organization_number','contact_name','email','phone','sponsorship_type']
  for(const key of required) if(!String(body[key]||'').trim()) return NextResponse.json({error:'Fyll i alla obligatoriska fält.'},{status:400})
  if(body.consent!=='on') return NextResponse.json({error:'Samtycke krävs.'},{status:400})
  const fingerprint=`${body.email}:${body.organization_number}`.toLowerCase()
  const now=Date.now(); const last=recent.get(fingerprint)
  if(last && now-last<WINDOW_MS) return NextResponse.json({error:'Intresseanmälan har redan skickats. Vänta en minut innan du försöker igen.'},{status:429})
  recent.set(fingerprint,now)
  const supabase=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const {error}=await supabase.from('sponsor_leads').insert({
    company_name:String(body.company_name).trim(), organization_number:String(body.organization_number).trim(), contact_name:String(body.contact_name).trim(),
    email:String(body.email).trim(), phone:String(body.phone).trim(), website:String(body.website||'').trim()||null, sponsorship_type:body.sponsorship_type,
    message:String(body.message||'').trim()||null, status:'new'
  })
  if(error) throw error
  return NextResponse.json({ok:true})
 }catch(e){ console.error(e); return NextResponse.json({error:'Kunde inte skicka intresseanmälan just nu.'},{status:500}) }
}
