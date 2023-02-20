import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MyBeerType } from "../../types";

import BeerImage from "../../assets/beerimage.png";

export const BeerListGrid: React.FC<MyBeerType> = ({
  beerName,
  description,
  genre,
}) => {
  return (
    <Flex
      boxShadow="md"
      p="6"
      mt={5}
      mb={5}
      borderWidth={2}
      borderColor={"gray.100"}
      borderRadius={5}
    >
      <Image src={BeerImage} boxSize={100} fit={"contain"} mr={5} />
      <Flex flexDir={"column"}>
        <Heading as="h3" size="lg">
          {beerName}
        </Heading>
        <Text color={"yellow.500"} as={"b"} fontSize={"sm"} mt={2}>
          {genre}
        </Text>
        <Text mt={2}>{description}</Text>
      </Flex>
    </Flex>
  );
};
