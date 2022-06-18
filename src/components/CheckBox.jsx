// import React from 'react'
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const selectMonths  = () => {
//     return [
//       "jan",
//       "feb",
//       "mar",
//       "apr",
//       "may",
//       "jun",
//       "jul",
//       "aug",
//       "sep",
//       "oct",
//       "nov",
//       "dec",
//     ];
//   };

// const CheckboxesTags =() => {

//     return(
//         <Autocomplete
//         multiple
//         id="checkboxes-tags-demo"
//         options={selectMonths() }
//         disableCloseOnSelect // popup wont close when a value is selected

//         // getOptionLabel={(option) => option.title}
//         // renderOption={(props, option, { selected }) => (
//         //   <li {...props}>
//         //     <Checkbox
//         //       icon={icon}
//         //       checkedIcon={checkedIcon}
//         //       style={{ marginRight: 8 }}
//         //       checked={selected}
//         //     />
//         //     {option.title}
//         //   </li>

//         onSelect={(e) =>handleSelectMonths(e.target.value)}
//         renderOption={(props , {selected})=> (
//             <li {...props}>
//                 <Checkbox
//                 icon={icon}
//                 checkedIcon={checkedIcon}
//                 style={{ marginRight: 8 }}
//                 checked={selected}
//                 />
//                 {handleSelectMonths()}
//             </li>
//         )}
//         style={{ width: 500 }}
//         renderInput={(params) => (
//             <TextField {...params} label="Checkboxes" placeholder="Favorites"
//             />
//         )}
//         />

//         )
// }
// export default CheckboxesTags
