import {Grid, Typography} from "@mui/material";
import { Box } from "@mui/system";
import logoN from "../assets/logoN.png"
import NewLoginButton from "../components/NewLoginButton";
import "./styles/newLandingPage.css"
import Copyright from "./Home/Copyright";


const NewLandingPage = () => {
  
    return (
      <div>
        <Box container className="landing">
          <Grid item xs={12} md={5}>
            <img src={logoN} alt="logo with calculator" className="logo" />
            <Typography variant="h3" className="landingtitle">
              Intelligent Reporting 
            </Typography>
          </Grid>
          <Grid mt={4}  mb={40} item xs={12} md={7}>
            <NewLoginButton />
          </Grid>
          <Grid>
          <Copyright />
          </Grid>
        </Box>
       
      </div>
    );
  };
  
  export default NewLandingPage;