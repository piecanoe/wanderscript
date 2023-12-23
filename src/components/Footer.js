import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <section className="footer">
            <p>Developed by © 2023 <a href="https://karendu.netilfy.app">Karen Du</a></p>
            <div className="socials">
                <p>Find me: </p>
                <a href="https://github.com/piecanoe"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
                <a href="https://linkedin.com/in/karenkdu"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                <a href="https://twitter.com/karendufus"><FontAwesomeIcon icon={faTwitter} size="2xl"/></a>
            </div>
        </section>

    )
}