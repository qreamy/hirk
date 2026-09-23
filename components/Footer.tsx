import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Image src="/hirk-logo-transparent.png" alt="Hittarps Ridklubb" width={38} height={38}/>
          <div>
            <strong>Hittarps Ridklubb</strong>
            <span>Hittarpsvägen 1 · 254 82 Helsingborg</span>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/partnerskap">Partnerskap</Link>
          <Link href="/om-hirk">Om klubben</Link>
          <a href="mailto:info@hittarpsridklubb.com">info@hittarpsridklubb.com</a>
        </div>
      </div>
    </footer>
  )
}
