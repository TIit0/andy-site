
import "./Button.css"

export default function Button(props) {
    const {children, variant = "", setIsModalOpen} = props;

   /* can be replaced by a switch if more buttons are needed in the future  */
    return (
        variant === "slim" ? 
        <button
        type="button"
        className={`button ${variant}`}
        onClick={() => setIsModalOpen(true)}
        >
            {children}
        </button>
        :
        <button
        type="button"
        className={`button`}>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/sammy1996"
            >{children}
            </a>
        </button>
    );
}