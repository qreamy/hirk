'use client'

import Link from 'next/link'
import Header from './Header'
import InterestForm from './InterestForm'

export default function HomePage(){
  return (
    <div className="site-shell">
      <Header />

      <main className="home-main">
        <div className="home-grid">
          <section className="home-copy" aria-labelledby="main-title">
            <span className="home-kicker">Företagspartner · Hittarps Ridklubb</span>

            <h1 id="main-title">Bli partner till Hittarps Ridklubb</h1>
            <p className="home-lead">
              Stötta en lokal förening för barn och unga – och bli en del av nätverket runt klubben.
            </p>

            <div className="package-inline">
              <div className="package-price-wrap">
                <span className="package-name">1975-klubben</span>
                <div className="package-price">1 975 kr <small>/ år</small></div>
              </div>
              <div className="package-points">
                <span>Namn på 1975-klubben-planschen</span>
                <span>Inbjudan till årligt partnermingel</span>
                <span>Stöd till klubbens barn- och ungdomsverksamhet</span>
              </div>
            </div>

            <div className="home-actions">
              <Link href="/partnerskap">Läs mer om partnerskapet <span>→</span></Link>
              <Link href="/om-hirk">Om Hittarps Ridklubb <span>→</span></Link>
            </div>

            <div className="home-meta" aria-label="Fakta om Hittarps Ridklubb">
              <span><strong>1975</strong> grundad</span>
              <span><strong>ca 250</strong> medlemmar</span>
              <span><strong>Hittarp & Laröd</strong></span>
            </div>
          </section>

          <section id="intresse" className="interest-panel" aria-label="Intresseanmälan">
            <div className="interest-panel-head">
              <div>
                <span className="panel-kicker">Intresseanmälan</span>
                <h2>Vi hör gärna från er.</h2>
              </div>
            </div>
            <p className="panel-copy">Fyll i era uppgifter så kontaktar vi er personligen.</p>
            <InterestForm />
          </section>
        </div>
      </main>
    </div>
  )
}
