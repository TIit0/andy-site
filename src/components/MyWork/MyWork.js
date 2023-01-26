import "./MyWork.css";
import Button from "../Button/Button";
import eatingDisorder from "../../utils/imgs/eating-disorder.png"
import personalityDisorder from "../../utils/imgs/personality-disorder.png"
import anxiety from "../../utils/imgs/anxiety.png"
import overthinking from "../../utils/imgs/overthinking.png"

export default function MyWork() {
    return (
        <section className="my-work">
            <h3 className="my-work__h3">
                Most of my work specializes in the following
            </h3>
            <div className="my-work__specialties">
                <div className="my-work__specialties__card">
                    <img
                        src={eatingDisorder}
                        alt="eating-disorder representation"
                        className="my-work__specialties__card__img"
                    />
                    <h4 className="my-work__specialties__card--h4">
                        Eating disorder
                    </h4>
                    <p className="my-work__specialties__card--description">
                        Severe and persistent disturbance in eating behaviors and associated distressing thoughts and emotions.
                    </p>
                </div>
                <div className="my-work__specialties__card">
                    <img
                        src={personalityDisorder}
                        alt="eating-disorder representation"
                        className="my-work__specialties__card__img"
                    />
                    <h4 className="my-work__specialties__card--h4">
                        Mood swings
                    </h4>
                    <p className="my-work__specialties__card--description">
                        When you have sudden or intense change in emotional state
                    </p>
                </div>
                <div className="my-work__specialties__card">
                    <img
                        src={anxiety}
                        alt="eating-disorder representation"
                        className="my-work__specialties__card__img"
                    />
                    <h4 className="my-work__specialties__card--h4">
                        Anxiety
                    </h4>
                    <p className="my-work__specialties__card--description">
                        A feeling of unease, such as worry or fear, that can be mild or severe
                    </p>
                </div>
                <div className="my-work__specialties__card">
                    <img
                        src={overthinking}
                        alt="eating-disorder representation"
                        className="my-work__specialties__card__img"
                    />
                    <h4 className="my-work__specialties__card--h4">
                        Overthinking
                    </h4>
                    <p className="my-work__specialties__card--description">
                        When you repetitively dwell on the same thought over and over to the point it gets in the way of your life
                    </p>
                </div>
            </div>
            <Button>know more about me</Button>
        </section>
    );
}