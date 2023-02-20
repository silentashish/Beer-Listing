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
} from "@chakra-ui/react";
import React from "react";

import BeerImage from "../../assets/beerimage.png";

import { useForm, SubmitHandler } from "react-hook-form";

interface props {
  isOpen: boolean;
  onClose: () => void;
}

interface Inputs {
  beerName: string;
  genre: string;
  description: string;
}

export const AddBeerModal: React.FC<props> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
