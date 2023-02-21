import { Box, Flex, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAllBeer } from "../apis";
import { BeerListGrid } from "../components";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { convertIngridentToString } from "../functions";

interface props {}

export const AllBeerPage: React.FC<props> = () => {
  const data = useAllBeer();

  const showMoreColor = useColorModeValue("green.800", "green.200");

  return (
    <>
      <Flex flexWrap="wrap" columnGap={"1%"}>
        {data?.data &&
          data.data.pages
            .reduce((acc: Array<any>, item) => {
              return [...acc, ...item.data];
            }, [])
            .map((item: any) => {
              return (
                <BeerListGrid
                  beerName={item.name}
                  description={item.description}
                  genre={item.tagline}
                  image={item.image_url}
                  ingredients={convertIngridentToString(item.ingredients)}
                />
              );
            })}
      </Flex>

      {data?.isLoading || data?.isFetching ? (
        <Flex width={"100%"} height="100%" justify={"center"} margin={10}>
          <Spinner size={"xl"} />
        </Flex>
      ) : (
        <Flex
          flexDir={"column"}
          align="center"
          cursor={"pointer"}
          onClick={() => {
            data.fetchNextPage();
          }}
        >
          <Text color={showMoreColor} as="b">
            Show More
          </Text>
          <ChevronDownIcon color={showMoreColor} boxSize={5} />
        </Flex>
      )}
    </>
  );
};
