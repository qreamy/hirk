import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import LeadEditor from '@/components/LeadEditor'
export default async function LeadPage({params}:{params:{id:string}}){const supabase=createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/admin/login');const {data}=await supabase.from('sponsor_leads').select('*').eq('id',params.id).single();if(!data)notFound();return <LeadEditor lead={data}/>}
