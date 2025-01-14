import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaFacebook /></li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    );
};

export default Footer;
