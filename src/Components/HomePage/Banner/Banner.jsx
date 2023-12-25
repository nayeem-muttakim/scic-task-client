import { Box, Button } from "@mui/material";
import banner from "/todo-header.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <Box
      minHeight={"80vh"}
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minWidth: { xs: "95vw", md: "80vw" },
        
      }}
    >
      <Box
        position={"absolute"}
        sx={{ left: { xs: "30%", sm: "40%",md:"35%",lg:"52%",xl:"50%" }, top: { xs: "55%",sm:"58%" ,xl:"52%" } }}
        textAlign={"center"}
        className=" text-center"
      >
        <Box maxWidth={500}>
          <Link to="signIn">
            <Button variant="contained">Let's Explore</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
