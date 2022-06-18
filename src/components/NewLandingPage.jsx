import {Grid, Typography} from "@mui/material";
import { Box } from "@mui/system";
import logoN from "../assets/logoN.png"
import NewLoginButton from "../components/NewLoginButton";
import "./styles/newLandingPage.css"


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
      
          <Grid mt={4} item xs={12} md={7}>
            <NewLoginButton />
          </Grid>
          
        </Box>
        {/* <Footer /> */}
      </div>
    );
  };
  
  export default NewLandingPage;