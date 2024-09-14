import cl from "./Footer.module.scss";
import facebook from "../../assets/contacts/facebook.svg";
import linkedin from "../../assets/contacts/linkedin.svg";
import youtube from "../../assets/contacts/youtube.svg";
import instagram from "../../assets/contacts/instagram.svg";

function Footer() {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__site}>
                <span>Site name</span>
                <div className={cl.footer__contacts}>
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="Linkedin" />
                    <img src={youtube} alt="YouTube" />
                    <img src={instagram} alt="Instagram" />
                </div>
            </div>
            <div className={cl.footer__navigation}>
                <nav>
                    <ul>
                        <li>Topic</li>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>Topic</li>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>Topic</li>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
