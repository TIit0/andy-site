import "./Header.css"
import logo from "../../utils/imgs/logo.png"
import whatsApp from "../../utils/imgs/whats-app.png"

export default function Header() {
    return (
        <header className="header">
            <div className="header__icon-container">
                <img
                src={logo}
                alt="andy unrath logo"
                className="header__icon-container__logo" />
                <div className="header__icon-container__text">
                    <span
                    className="header__icon-container__text--name">Andrea Unrath
                    </span>
                    <span
                    className="header__icon-container__text--ocupation">PSICOANALISTA
                    </span>
                </div>
            </div>
            <div className="header__whats-app__container">
                <img
                src={whatsApp}
                alt="whats app logo"
                className="header__whats-app__container--img" />
                <p
                className="header__whats-app__container--img"
                >+52 33 3256 6989
                </p>
            </div>
        </header>
    );
}