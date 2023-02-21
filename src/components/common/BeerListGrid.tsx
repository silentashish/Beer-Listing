import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MyBeerType } from "../../types";

import BeerImage from "../../assets/beerimage.png";

export const BeerListGrid: React.FC<MyBeerType> = ({
  beerName,
  description,
  genre,
  image,
  ingredients,
}) => {
  const [expanded, setExpanded] = useState(false);
  let borderColor = useColorModeValue("gray.100", "gray.900");
  let hoverColor = useColorModeValue("blue.100", "blue.700");
  return (
    <Flex
      boxShadow="lg"
      p={[3, 6]}
      mt={[2, 5]}
      mb={[2, 5]}
      borderWidth={2}
      borderColor={borderColor}
      borderRadius={5}
      _hover={{ bg: hoverColor }}
      width={["100%", "100%", "100%", "100%", "49.5%"]}
      onClick={() => setExpanded((e) => !e)}
    >
      <Flex width={[70, 100]}>
        <Tooltip label={ingredients ?? description} hasArrow placement="top">
          <Image
            src={image ?? BeerImage}
            boxSize={[70, 100]}
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
        <Text
          mt={2}
          fontSize="sm"
          textAlign={"justify"}
          noOfLines={expanded ? 100 : 3}
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};
