import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box
      width={"100%"}
      height={"70px"}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box
        width={"80%"}
        maxWidth={"1200px"}
        alignItems={"center"}
        borderBottom={"1px solid #EEEEEE"}
        padding={"0 10px"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        display={"flex"}
        height={"70px"}
      >
        <Link to="/">
          <Box display={"flex"} gap={2}>
            <a>
              <img src={Logo} alt="logo" width={"50px"} />
            </a>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"18px"}
              marginTop={"0.5rem"}
            >
              Store-Front
            </Typography>
          </Box>
        </Link>
        <Box display={"flex"} gap={1}>
          <Link to="/">
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"18px"}
              fontWeight={"400"}
              color={"rgb(0, 0, 0)"}
            >
              Home
            </Typography>
          </Link>
          <Link to="/CartItems">
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontWeight={400}
              fontSize={"18px"}
              color={"rgb(0, 0, 0)"}
            >
              cart
            </Typography>
          </Link>
        </Box>
        <Box>
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"18px"}
            fontWeight={500}
            color={"rgb(0, 0, 0)"}
          >
            Cart:2
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
