import './Card.scss';

function Card({ img, title, description }) {
    return (
        <div className="card">
            <img className="card-icon" src={img} alt="icon" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    )
}

export default Card;