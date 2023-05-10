import { Monster } from "../App";
import Card from "./card.component";

type CardProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
