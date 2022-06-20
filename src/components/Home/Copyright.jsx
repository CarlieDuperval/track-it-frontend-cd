import Typography from "@mui/material/Typography";


const  Copyright = (props)=> {
  return (
    <Typography mt={40}  
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"TrackIT © By Carlie Duperval "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;