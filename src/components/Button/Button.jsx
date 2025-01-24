import './Button.scss';

function Button({ extraClass }) {
    return (
        <a href="#!" className={`start-btn ${extraClass}`}>Get Started</a>
    )
}

export default Button;