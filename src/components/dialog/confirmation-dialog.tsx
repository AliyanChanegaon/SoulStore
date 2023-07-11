// import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, HStack, VStack, useDisclosure } from "@chakra-ui/react"
// import React, { RefObject, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// type FocusableElement = HTMLInputElement | HTMLButtonElement | HTMLAnchorElement;
// const ConfirmationDialog = () => {

//   return (
//     function TransitionExample() {

//         const { isOpen, onOpen, onClose } = useDisclosure()
//         const cancelRef = React.useRef<FocusableElement>(null)
      
//         return (
//           <>
//             <Button onClick={onOpen}>Discard</Button>
//             <AlertDialog
//               motionPreset='slideInBottom'
//               leastDestructiveRef={cancelRef!}
//               onClose={onClose}
//               isOpen={isOpen}
//               isCentered
//             >
//               <AlertDialogOverlay />
      
//               <AlertDialogContent>
//                 <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
//                 <AlertDialogCloseButton />
//                 <AlertDialogBody>
//                   Are you sure you want to discard all of your notes? 44 words will be
//                   deleted.
//                 </AlertDialogBody>
//                 <AlertDialogFooter>
//                   <Button ref={cancelRef!} onClick={onClose}>
//                     No
//                   </Button>
//                   <Button colorScheme='red' ml={3}>
//                     Yes
//                   </Button>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialog>
//           </>
//         )
//       }
//   )
// }

// export default ConfirmationDialog;

