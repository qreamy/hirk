'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header(){
  const [open,setOpen]=useState(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" aria-label="Hittarps Ridklubb företagspartner">
          <Image src="/hirk-logo-transparent.png" alt="Hittarps Ridklubb" width={44} height={44} className="brand-mark" priority/>
          <div className="brand-type">
            <span className="brand-name">Hittarps Ridklubb</span>
            <span className="brand-sub">Företagspartner</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Huvudnavigation">
          <Link href="/partnerskap">Partnerskap</Link>
          <Link href="/om-hirk">Om klubben</Link>
          <Link className="nav-cta" href="/#intresse">Visa intresse</Link>
        </nav>

        <button className="mobile-menu-button" onClick={()=>setOpen(!open)} aria-label="Öppna meny" aria-expanded={open}>
          {open?<X size={21}/>:<Menu size={21}/>}        
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <Link href="/partnerskap" onClick={()=>setOpen(false)}>Partnerskap</Link>
          <Link href="/om-hirk" onClick={()=>setOpen(false)}>Om klubben</Link>
          <Link href="/#intresse" onClick={()=>setOpen(false)}>Visa intresse</Link>
        </div>
      )}
    </header>
  )
}
