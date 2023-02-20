import {
  Box,
  Button,
  Divider,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddBeerModal, ThemeSwitch } from "../components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

interface props {}

export const LandingPage: React.FC<props> = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const borderColor = useColorModeValue("blue", "white");

  return (
    <Box>
      <Box width={"60%"} margin="0 auto">
        <Flex justify={"flex-end"} mt={5} mb={5}>
          <ThemeSwitch />
        </Flex>
        <AddBeerModal isOpen={isOpen} onClose={onClose} />
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
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
