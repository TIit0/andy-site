import "./HowItWorks.css";
import knowYou from "../../utils/imgs/know-you.png";
import findRoot from "../../utils/imgs/find-root.png";
import growth from "../../utils/imgs/growth.png";
import youDidIt from "../../utils/imgs/you-did-it.png";

export default function HowItWorks() {
    return (
        <section className="how">
            <h2 className="how__h2">How it works?</h2>
            <div className="how__card">
                <img
                    src={knowYou}
                    className="how__card__img"
                    alt="knowing eachother through speach" />

                <div className="how__card__text-container">
                    <h4 className="how__card__text-container--question">
                        first
                    </h4>
                    <h3 className="how__card__text-container--step">
                        i get to know you
                    </h3>
                    <p className="how__card__text-container--description">
                        The first sessions will be focused on who you are, what you need and what you want to accomplish. Also it will give me enough time to study you and analyze you so I can be of more help
                    </p>
                </div>
            </div>
            <div className="how__card">
                <img
                    src={findRoot}
                    className="how__card__img"
                    alt="knowing eachother through speach" />

                <div className="how__card__text-container">
                    <h4 className="how__card__text-container--question">
                        Next
                    </h4>
                    <h3 className="how__card__text-container--step">
                        We find the root
                    </h3>
                    <p className="how__card__text-container--description">
                        During the following sessions we will discover the root of specific scenarios and will help us focus on solving one thing at a time.
                    </p>
                </div>
            </div>
            <div className="how__card how__card--reverse">
                <img
                    src={growth}
                    className="how__card__img"
                    alt="knowing eachother through speach" />

                <div className="how__card__text-container">
                    <h4 className="how__card__text-container--question">
                        After that
                    </h4>
                    <h3 className="how__card__text-container--step">
                        We help you grow
                    </h3>
                    <p className="how__card__text-container--description">
                        With my help and your help we will get through the issue and help you be more mentally and emotionally stable.
                    </p>
                </div>
            </div>
            <div className="how__card how__card--reverse">
                <img
                    src={youDidIt}
                    className="how__card__img"
                    alt="knowing eachother through speach" />

                <div className="how__card__text-container">
                    <h4 className="how__card__text-container--question">
                        and Finally
                    </h4>
                    <h3 className="how__card__text-container--step">
                        You did it!
                    </h3>
                    <p className="how__card__text-container--description">
                        After all these sessions and hard work you finally came to the point of loving yourself and be proud of who you are. My work here is finished (so far ;))
                    </p>
                </div>
            </div>
        </section>
    );
}