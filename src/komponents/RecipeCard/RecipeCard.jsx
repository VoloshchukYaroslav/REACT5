import { BsAlarm, BsPieChart, BsBarChart } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import Difficulty from "../Difficulty/Difficulty";
import { Card, Badge, Image, Name, Info, Item } from "./RecipeCard.style";

const RecipeCard = ({ recipe }) => {
  const { name, image, time, servings, calories, level } = recipe;
  const hard = level === 3;
  const src = new URL(`../../assets/${image}`, import.meta.url).href;

  return (
    <Card $hard={hard}>
      {hard && (
        <Badge>
          <FaFire /> HARD
        </Badge>
      )}
      <Image src={src} alt={name} />
      <Name>{name}</Name>
      <Info>
        <Item>
          <BsAlarm size={16} /> {time} min
        </Item>
        <Item>
          <BsPieChart size={16} /> {servings} servings
        </Item>
        <Item>
          <BsBarChart size={16} /> {calories} calories
        </Item>
      </Info>
      <Difficulty level={level} />
    </Card>
  );
};

export default RecipeCard;