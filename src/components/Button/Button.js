
import "./Button.css"

export default function Button(props) {
    const {children, variant = "" } = props

    return (
        <button className={`button ${variant}`}>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=PKwu15ldZ7k"
            >{children}
            </a>
        </button>
    );
}