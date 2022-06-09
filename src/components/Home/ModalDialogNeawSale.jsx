// import React from "react";
// // import Dialog from "@material-ui/core/Dialog";
// // import Form from "./Form";
// import { useState } from "react";
// import Button from "@material-ui/core/Button";
// import ModalDialog from "./ModalDialog";

// export const ModalForm = () => {
//   // declare a new state variable for modal open
//   const [open, setOpen] = useState(false);

//   // function to handle modal open
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   // function to handle modal close
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="ModalForm">
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Sign up
//       </Button>
//       {/* // display the modal and pass props */}
//       <ModalDialog open={open} handleClose={handleClose} />
//     </div>
//   );
// };

// // const ModalDialog = ({ open, handleClose }) => {
// //   return (
// //     // props received from App.js
// //     <Dialog open={open} onClose={handleClose}>
// //       {/* // form to be created */}
// //       <Form handleClose={handleClose} />
// //     </Dialog>
// //   );
// // };
// export default ModalDialog;
