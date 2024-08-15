import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";
import Full from "../../assets/sports_team.jpg";
import Shoe from "../../assets/shoes_man.png";
import Balls from "../../assets/balls.jpg";

const categories = [
  {
    id: 1,
    title: "Shrits",
    imageUrl: Full,
    route: "shop/shrits",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Shoes",
    imageUrl: Shoe,
    route: "shop/Shoes",
  },
  {
    id: 4,
    title: "Tracksuits",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/Tracksuits",
  },
  {
    id: 5,
    title: "Balls",
    imageUrl: Balls,
    route: "shop/Balls",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
