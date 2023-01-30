
import "./AboutMe.css"
import ReactDom from "react-dom";
import profilePic from "../../utils/imgs/placeholder.jpg"
import certificationLogo from "../../utils/imgs/certification-logo.png"


export default function AboutMe({ setIsModalOpen }) {

    function closeModal() {
        setIsModalOpen(false);
    }

    return ReactDom.createPortal(
        <>
            <div
                onClick={closeModal}
                className="about-me--background" />

            <div className="about-me__content">
                <div className="about-me__content--close-button-wrapper">
                    <button
                        onClick={closeModal}
                        className="about-me__content--close-button-wrapper--btn"
                    >X
                    </button>
                </div>
                <div className="about-me__content__information">
                    <div className="about-me__content__information__me">
                        <img
                        alt=" a picture of me"
                            src={profilePic}
                            className="about-me__content__information__me--img"
                        />

                        <p className="about-me__content__information__me--text">
                            Soy Andrea Unrath y me especializo en psicologia xyzyxzxyz y estoy aqui para ayudarte y acompañarte durante tu camino.
                            Me gradue de la universidad de ITESO en psicologia y tengo una maestria en psicologia analtica y clinica.
                            Me encanta analizar y estar en contacto con la gente para asi poder darme una idea de donde estoy parada como persona y demas.
                        </p>
                    </div>
                </div>
                <div className="about-me__content__certifications">
                    <img
                    alt="certification logo"
                    src={certificationLogo}
                    className="about-me__content__certification"/>
                    <img
                    alt="certification logo"
                    src={certificationLogo}
                    className="about-me__content__certification"/>
                    <img
                    alt="certification logo"
                    src={certificationLogo}
                    className="about-me__content__certification"/>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}