import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const benefits = [
  'Företagets namn på Hittarps Ridklubbs 1975-klubben-plansch',
  'Officiell del av 1975-klubben',
  'Inbjudan till årligt mingel med andra företag och partners',
  'Stöd till den lokala föreningsverksamheten',
  'Synlighet och koppling till Hittarps Ridklubb',
]

export default function Partnerships(){
  return (
    <div className="site-shell">
      <Header/>
      <main className="secondary-main partnership-page">
        <section className="partnership-intro">
          <span className="secondary-kicker">Sponsring & partnerskap</span>
          <div className="partnership-intro-grid">
            <h1>En enkel väg in som företagspartner.</h1>
            <p>1975-klubben är vårt enklaste partnerupplägg. För företag som vill göra mer tar vi fram ett större samarbete tillsammans.</p>
          </div>
        </section>

        <section className="package-sheet" id="1975">
          <div className="package-sheet-price">
            <span>1975-klubben</span>
            <strong>1 975 kr <small>/ år</small></strong>
            <Link href="/#intresse">Visa intresse <span>→</span></Link>
          </div>
          <div className="package-sheet-benefits">
            <h2>Det här ingår</h2>
            <ul>
              {benefits.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="larger-partnerships">
          <div>
            <span className="secondary-kicker">Större samarbeten</span>
            <h2>Brons, Silver, Guld & Platina</h2>
          </div>
          <p>För företag som vill ha större exponering eller ett djupare samarbete anpassar vi upplägget efter behov.</p>
          <Link href="/#intresse">Prata med oss <span>→</span></Link>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
