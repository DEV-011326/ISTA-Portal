const Card = ({ title, description, duration, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {duration && <span className="card-duration">{duration}</span>}
    </div>
  );
};

export default Card;

