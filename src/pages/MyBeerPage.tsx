import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BeerListGrid } from "../components";
import { MyBeerType } from "../types";

interface props {
  myBeerList: Array<MyBeerType>;
  onOpen: () => void;
}

export const MyBeerPage: React.FC<props> = ({ myBeerList, onOpen }) => {
  const backgroudColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("blue.600", "blue.400");
  if (myBeerList.length === 0) {
    return (
      <Flex
        bg={backgroudColor}
        width={"100%"}
        height={"70vh"}
        justify="center"
        align={"center"}
      >
        <Flex flexDir="column">
          <Text textAlign={"center"}>Nothing to see yet.</Text>
          <Flex>
            <Text
              as={"b"}
              color={textColor}
              mr={1}
              cursor={"pointer"}
              onClick={onOpen}
            >
              Click Here
            </Text>
            <Text as={"p"}>to add your first beer!</Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return (
    <Box>
      {myBeerList.map((item) => {
        return <BeerListGrid {...item} />;
      })}
    </Box>
  );
};
