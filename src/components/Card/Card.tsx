import "./card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  cpfEligible?: boolean; // Added CPF Eligibility badge
}

const Card = ({ image, title, description, cpfEligible }: CardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        {cpfEligible && <span className="cpf-badge">CPF ELIGIBLE</span>}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
