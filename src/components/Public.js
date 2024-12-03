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
                64, route du Grand-Lancy<br />
                1212 Lancy<br />
                (Tram 15, arrêt Lancy-Mairie)
                Derrière la salle communale<br />
                <a href="mailto:info@gag-ge.ch">info@gag-ge.ch</a>
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