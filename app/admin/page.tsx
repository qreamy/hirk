import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import AdminDashboard from '@/components/AdminDashboard'
export default async function Admin(){const supabase=createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/admin/login');const {data,error}=await supabase.from('sponsor_leads').select('*').order('created_at',{ascending:false});if(error)throw error;return <AdminDashboard leads={data||[]}/>}
