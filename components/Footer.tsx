import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="hirk-footer">
      <div className="hirk-footer-inner">
        <div className="hirk-footer-brand">
          <img
            src="/hirk-logo-transparent.png"
            alt="Hittarps Ridklubb"
          />

          <div>
            <strong>Hittarps Ridklubb</strong>
            <span>Företagspartner</span>
          </div>
        </div>

        <p className="hirk-footer-message">
          Den lilla klubben med den stora vi-känslan.
        </p>

        <nav className="hirk-footer-nav">
          <Link href="/partnerskap">
            Partnerskap
          </Link>

          <Link href="/om-hirk">
            Om klubben
          </Link>

          <Link href="/#intresse" className="hirk-footer-cta">
            Visa intresse <span>→</span>
          </Link>
        </nav>
      </div>

      <div className="hirk-footer-bottom">
        <div>
          <span>© {new Date().getFullYear()} Hittarps Ridklubb</span>
          <span>Hittarp · Laröd · Helsingborg</span>
        </div>
      </div>
    </footer>
  )
}