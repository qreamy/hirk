import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About(){
  return (
    <div className="site-shell">
      <Header/>
      <main className="secondary-main">
        <section className="about-intro">
          <div>
            <span className="secondary-kicker">Om Hittarps Ridklubb</span>
            <h1>Den lilla klubben med den stora vi-känslan.</h1>
          </div>
          <div className="about-copy">
            <p>Hittarps Ridklubb grundades 1975 och har idag omkring 250 medlemmar. Klubben ligger i utkanten av Hittarp och Laröd utanför Helsingborg.</p>
            <p>Vi är en ideell och familjär förening med stort fokus på barn, ungdomar, gemenskap och utveckling.</p>
          </div>
        </section>

        <section className="about-facts" aria-label="Fakta om Hittarps Ridklubb">
          <div><span>01</span><strong>1975</strong><p>Hittarps Ridklubb grundas.</p></div>
          <div><span>02</span><strong>Ca 250</strong><p>Medlemmar i klubben idag.</p></div>
          <div><span>03</span><strong>Hittarp & Laröd</strong><p>Lokalt förankrad utanför Helsingborg.</p></div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
