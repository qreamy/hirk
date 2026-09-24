import Link from 'next/link'
import Header from './Header'
import InterestForm from './InterestForm'
import Footer from './Footer'

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />

      <main className="hir-home">
        <div className="hir-home-shell">

          <section className="hir-visual">
            <img
              src="/hirk-hero.jpg"
              alt="Häst och ryttare i stallmiljö"
              className="hir-visual-image"
            />

            <div className="hir-visual-overlay" />

            <div className="hir-visual-content">
              <span className="hir-location">
                HITTARP · LARÖD · HELSINGBORG
              </span>

              <h1>
                Bli partner till
                <br />
                Hittarps Ridklubb.
              </h1>

              <p>
                Stötta en lokal förening för barn och unga – och bli en del
                av nätverket runt klubben.
              </p>

              <div className="hir-package">
                <div className="hir-package-price">
                  <span>1975-klubben</span>

                  <strong>
                    1 975 kr
                    <small>/ år</small>
                  </strong>
                </div>

                <div className="hir-package-benefits">
                  <span>Synlighet på 1975-planschen</span>
                  <span>Inbjudan till årligt partnermingel</span>
                  <span>Stöd till barn- och ungdomsverksamheten</span>
                </div>
              </div>

              <div className="hir-links">
                <Link href="/partnerskap">
                  Läs om partnerskapet <span>→</span>
                </Link>

                <Link href="/om-hirk">
                  Om Hittarps Ridklubb <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          <section
            id="intresse"
            className="hir-form-side"
            aria-label="Intresseanmälan"
          >
            <div className="hir-form-card">
              <div className="hir-form-head">
                <span>INTRESSEANMÄLAN</span>

                <h2>Vill ert företag vara med?</h2>

                <p>
                  Lämna era uppgifter så hör vi av oss personligen.
                </p>
              </div>

              <InterestForm />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}