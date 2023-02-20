import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import BeerImage from "../../assets/beerimage.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { MyBeerType } from "../../types";
import { AddBeerToLocalStorage } from "../../functions";

interface props {
  isOpen: boolean;
  onClose: () => void;
  beerData: Array<MyBeerType>;
  setBeerData: React.Dispatch<React.SetStateAction<Array<MyBeerType>>>;
}

export const AddBeerModal: React.FC<props> = ({
  isOpen,
  onClose,
  beerData,
  setBeerData,
}) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MyBeerType>();

  const onSubmit: SubmitHandler<MyBeerType> = (data) => {
    AddBeerToLocalStorage(beerData, data);
    setBeerData((prev) => [...prev, data]);
    reset();
    onClose();
    toast({
      title: "Beer Added Successfully",
      description: "Your beer is successfully added to list",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add a new beer</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box
                borderWidth={2}
                borderColor={borderColor}
                width={100}
                mb={5}
                borderRadius={5}
              >
                <Image src={BeerImage} boxSize={100} fit={"contain"} />
              </Box>
              <FormControl isInvalid={Boolean(errors.beerName)}>
                <Input
                  placeholder="Beer Name*"
                  {...register("beerName", {
                    required: "Beer name is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.beerName && errors.beerName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={Boolean(errors.genre)}>
                <Input
                  placeholder="Genre*"
                  {...register("genre", { required: "Genre is required" })}
                />
                <FormErrorMessage>
                  {errors.genre && errors.genre.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={Boolean(errors.description)}>
                <Textarea
                  placeholder="Description*"
                  {...register("description", {
                    required: "Beer description is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
