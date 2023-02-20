import {
  Box,
  Button,
  Divider,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AddBeerModal, ThemeSwitch } from "../components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MyBeerType } from "../types";
import { getStoredMyBeers } from "../functions";
import { MyBeerPage } from "./MyBeerPage";

interface props {}

export const LandingPage: React.FC<props> = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const borderColor = useColorModeValue("blue", "white");

  const [myBeerData, setMyBeerData] = useState<Array<MyBeerType>>([]);

  const refetchMyBeerData = () => {
    let beerList = getStoredMyBeers();
    setMyBeerData(beerList);
  };

  useEffect(() => {
    refetchMyBeerData();
  }, []);

  return (
    <Box>
      <Box width={"60%"} margin="0 auto">
        <Flex justify={"flex-end"} mt={5} mb={5}>
          <ThemeSwitch />
        </Flex>
        <AddBeerModal
          isOpen={isOpen}
          onClose={onClose}
          beerData={myBeerData}
          setBeerData={setMyBeerData}
        />
        <Tabs onChange={(index) => setTabIndex(index)}>
          <Flex justify={"space-between"}>
            <TabList flex={1}>
              <Tab _selected={{ fontWeight: "bold", borderColor: borderColor }}>
                All Beers
              </Tab>
              <Tab _selected={{ fontWeight: "bold", borderColor: borderColor }}>
                My Beers
              </Tab>
            </TabList>
            {tabIndex === 1 && (
              <Flex alignItems={"center"}>
                <Button size="sm" colorScheme={"blue"} onClick={onOpen}>
                  Add a new beer
                </Button>
              </Flex>
            )}
          </Flex>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel pr={0} pl={0}>
              <MyBeerPage myBeerList={myBeerData} onOpen={onOpen} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
