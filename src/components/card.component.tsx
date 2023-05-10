import { Monster } from "../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div key={id} className="card">
      <img
        className="card-image"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2 className="card-name">{name}</h2>
      <p className="card-email">{email}</p>
    </div>
  );
};

export default Card;
