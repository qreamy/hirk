'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
export default function Login(){
 const [error,setError]=useState(''); const [loading,setLoading]=useState(false); const router=useRouter()
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setError('');const f=new FormData(e.currentTarget);const supabase=createClient();const {error}=await supabase.auth.signInWithPassword({email:String(f.get('email')),password:String(f.get('password'))});setLoading(false);if(error)setError('Fel e-post eller lösenord.');else router.push('/admin')}
 return <main className="flex min-h-screen items-center justify-center bg-ink px-5"><form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-white p-8"><p className="text-sm font-semibold uppercase tracking-[.2em] text-forest">HIRK Partner</p><h1 className="mt-3 text-3xl font-semibold">Admininloggning</h1><div className="mt-8 space-y-4"><div><label className="label">E-post</label><input name="email" type="email" className="input" required/></div><div><label className="label">Lösenord</label><input name="password" type="password" className="input" required/></div></div>{error&&<p className="mt-4 text-sm text-red-700">{error}</p>}<button className="btn-primary mt-6 w-full" disabled={loading}>{loading?'Loggar in...':'Logga in'}</button></form></main>
}
