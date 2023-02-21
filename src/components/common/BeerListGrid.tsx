import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MyBeerType } from "../../types";

import BeerImage from "../../assets/beerimage.png";

export const BeerListGrid: React.FC<MyBeerType> = ({
  beerName,
  description,
  genre,
  image,
}) => {
  let borderColor = useColorModeValue("gray.100", "gray.900");
  let hoverColor = useColorModeValue("blue.100", "blue.700");
  return (
    <Flex
      boxShadow="lg"
      p="6"
      mt={5}
      mb={5}
      borderWidth={2}
      borderColor={borderColor}
      borderRadius={5}
      _hover={{ bg: hoverColor }}
    >
      <Flex width={100}>
        <Tooltip label={description} hasArrow placement="top">
          <Image
            src={image ?? BeerImage}
            boxSize={100}
            fit={"contain"}
            mr={5}
          />
        </Tooltip>
      </Flex>
      <Flex flexDir={"column"} flex={1}>
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
