
import "./Button.css"

export default function Button(props) {
    const {children, variant = "" } = props;

   /* can be replaced by a switch if more buttons are needed in the future  */
    return (
        variant === "slim" ? 
        <button className={`button ${variant}`}>
            {children}
        </button>
        :
        <button className={`button`}>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=PKwu15ldZ7k"
            >{children}
            </a>
        </button>
    );
}