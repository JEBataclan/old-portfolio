import "./Card.css";

const Card = ({ img, title, description, link }) => {
  return (
    <div className="card h-100 text-dark bg-light">
      <img src={img} alt={title} className="card-image" />
      <div className="card-body">
        <h4 className="card-title"><a href={link} target="_blank">{title}</a></h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
