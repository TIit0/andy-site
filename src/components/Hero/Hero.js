import "./Hero.css";
import cloud from "../../utils/imgs/brain-cloud.png"
import Button from "../Button/Button"
import psychologist from "../../utils/imgs/psychologist.png"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__h1-wrapper">
                <h1 className="hero__h1-wrapper__h1">
                    Sometimes there will be people who won't understand your journey.
                    That's okay, it's not for them.
                </h1>
                <img
                src={cloud}
                alt="decorative cloud"
                className="hero__h1-wrapper__img"
                />
            </div>
            <div className="hero__button-wrapper">
                <Button>Begin your journey</Button>
                <img
                    src={psychologist}
                    alt="psychologist with patient"
                    className="hero__button-wrapper__img" />
            </div>
            <h2 className="hero__h2">
                Hi! I'm Andrea Unrath, a psycoanalist and I'm here to guide you through your personal growth journey
            </h2>
        </section>
    );
}