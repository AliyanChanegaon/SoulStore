import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useRef } from "react";
import { RemoveItemDialog } from "../../utils/model/Remove-modal";
import { useContext } from "react";
import { AppContext, MyContextType } from "../../context/app-context";

interface ConfirmationDialogProp {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  img?: string;
  type?: string;
  confirmationMessage?: string[] | JSX.Element | ReactNode;
  messageBodyLines?: string[] | JSX.Element | ReactNode;
  onYesClick?: () => void;
  onNoClick?: () => void;
  changeButtonLabels?: {
    yes: JSX.Element | ReactNode;
    no: JSX.Element | ReactNode;
  };
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProp> = ({
  isOpen,
  onOpen,
  onClose,
  img,
  type,
  confirmationMessage,
  messageBodyLines,
  onYesClick,
  onNoClick,
  changeButtonLabels,
}) => {
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent w="400px">
        <AlertDialogCloseButton />
        <Stack p={5} flexDirection="row">
          {img && <Image w="20%" src={img} />}
          <Stack w="80%" flexDirection="column">
            {confirmationMessage && (
              <Text fontWeight="bold"> {confirmationMessage}</Text>
            )}
            {messageBodyLines && <Text>{messageBodyLines}</Text>}
          </Stack>
        </Stack>

        <AlertDialogFooter p={0}>
          <Button
            w="50%"
            borderRadius="none"
            ref={cancelRef}
            onClick={onNoClick ? onNoClick : onClose}
          >
            {changeButtonLabels?.no ? changeButtonLabels?.no : "No"}
          </Button>
          <Button
            w="50%"
            borderRadius="none"
            colorScheme="teal"
            onClick={onYesClick}
          >
            {changeButtonLabels?.yes ? changeButtonLabels?.yes : "Yes"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
