import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Bienvenue au Groupe des Arbitres Genevois <span className="nowrap">GAG</span></h1>
            </header>
            <main className="public__main">
                <p>Créée en 1926 sous l’appellation Association romande des arbitres de Football, l’association faitière des hommes en noir n’a cessé depuis cette date, de soutenir et d’appuyer les arbitres dans la pratique de leur passion.</p>
                <address className="public__addr">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Marco Oliveira</p>
            </main>
            <footer>
                <Link to="/login">Se connecter</Link>
            </footer>
        </section>

    )
    return content
}
export default Public