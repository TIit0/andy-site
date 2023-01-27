import "./Footer.css";
import Button from "../Button/Button";
import whatsApp from "../../utils/imgs/whats-app.png"

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer--text">
            Send me a message or schedule your appointment to start your growth journey
            </p>
            <Button>Begin your jornney</Button>
            <div className="footer__whats-app__container">
                <img
                src={whatsApp}
                alt="whats app logo"
                className="footer__whats-app__container--img" />
                <p
                className="footer__whats-app__container--img"
                >+52 33 3256 6989
                </p>
            </div>
        </footer>
    );
}