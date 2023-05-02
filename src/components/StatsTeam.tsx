import {
  UnorderedList,
  ListItem,
  Box,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import StatsAttackDefense from "./StatsAttackDefense";

function StatsTeam({ stats }) {
  const [isViewAttack, setIsViewAttack] = React.useState(true);

  const notStrong = stats.allTypes
    .map((type) => {
      const isNotStrong = stats.isStrongAgainst.some(
        (item) => item.name == type.name
      );
      return {
        name: type.name,
        isStrong: !isNotStrong,
      };
    })
    .filter((item) => item.isStrong);

  const porsentage = Math.round(
    ((stats.allTypes.length - notStrong.length) * 100) / stats.allTypes.length
  );

  const typesNotStrong = notStrong
    .map((item) => {
      return item.name;
    })
    .join(", ");

  return (
    <Grid
      templateAreas={`
            "title   title       title"
            "stats   porcentage  description"
        `}
      gridTemplateRows={"25% 85%"}
      gridTemplateColumns={"40% 35% 25%"}
      w={"100%"}
      mb={"64px"}
    >
      <GridItem pl="2" area={"title"}>
        <Text variant="subTitle" fontSize={"36px"}>
          Stats your team
        </Text>
      </GridItem>
      <GridItem pl="2" area={"stats"}>
        <StatsAttackDefense
          attack={stats.isStrongAgainst}
          defense={stats.notStrongAgainst}
          isViewAttack={isViewAttack}
          setIsViewAttack={setIsViewAttack}
        />
      </GridItem>
      <GridItem
        pl="2"
        area={"porcentage"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"70%"}
          borderRadius={"50%"}
          bg={porsentage >= 55 ? "colors.green" : "colors.red"}
          style={{ aspectRatio: "1/1" }}
        >
          <Text variant={"title"} fontSize={"2rem"}>
            {porsentage}%
          </Text>
        </Box>
        {/* </AspectRatio> */}
      </GridItem>
      <GridItem pl="2" area={"description"}>
        <Text>{isViewAttack ? "Attack" : "Defense"}</Text>
        <UnorderedList>
          {porsentage == 100 ? (
            <ListItem>Your team is strong against all</ListItem>
          ) : (
            <ListItem>
              None of your team is strong against {typesNotStrong}
            </ListItem>
          )}
        </UnorderedList>
      </GridItem>
    </Grid>
  );
}

export default StatsTeam;
