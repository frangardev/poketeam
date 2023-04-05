import React from "react";
import { Image } from "@chakra-ui/react";

import Bug from "../assets/Bug.svg";
import Dark from "../assets/Dark.svg";
import Dragon from "../assets/Dragon.svg";
import Electric from "../assets/Electric.svg";
import Fairy from "../assets/Fairy.svg";
import Fighting from "../assets/Fighting.svg";
import Fire from "../assets/Fire.svg";
import Flying from "../assets/Flying.svg";
import Ghost from "../assets/Ghost.svg";
import Grass from "../assets/Grass.svg";
import Ground from "../assets/Ground.svg";
import Ice from "../assets/Ice.svg";
import Normal from "../assets/Normal.svg";
import Poison from "../assets/Poison.svg";
import Psychic from "../assets/Psychic.svg";
import Rock from "../assets/Rock.svg";
import Steel from "../assets/Steel.svg";
import Water from "../assets/Water.svg";

function BgCard(type: string) {
  const [imgTypePokemon, setimgTypePokemon] = React.useState();

  const addIcon = () => {
    let bgColor = "#fff";
    switch (type.type) {
      case "grass":
        setimgTypePokemon(Grass);
        break;
      case "fire":
        setimgTypePokemon(Fire);
        break;
      case "water":
        setimgTypePokemon(Water);
        break;
      case "normal":
        setimgTypePokemon(Normal);
        break;
      case "poison":
        setimgTypePokemon(Poison);
        break;
      case "electric":
        setimgTypePokemon(Electric);
        break;
      case "ground":
        setimgTypePokemon(Ground);
        break;
      case "fairy":
        setimgTypePokemon(Fairy);
        break;
      case "psychic":
        setimgTypePokemon(Psychic);
        break;
      case "rock":
        setimgTypePokemon(Rock);
        break;
      case "bug":
        setimgTypePokemon(Bug);
        break;
      case "fighting":
        setimgTypePokemon(Fighting);
        break;
      case "ghost":
        setimgTypePokemon(Ghost);
        break;
      case "steel":
        setimgTypePokemon(Steel);
        break;
      case "ice":
        setimgTypePokemon(Ice);
        break;
      case "dark":
        setimgTypePokemon(Dark);
        break;
      case "dragon":
        setimgTypePokemon(Dragon);
        break;
      case "flying":
        setimgTypePokemon(Flying);
        break;
      default:
        break;
    }
    return bgColor;
  };
  React.useEffect(() => {
    addIcon();
  }, []);
  return (
    <Image
      src={imgTypePokemon}
      position={"absolute"}
      w={"100%"}
      left={"22%"}
      top={"30%"}
    />
  );
}

export default BgCard;
