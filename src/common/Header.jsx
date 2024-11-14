import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
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

        <nav className="navigation">
          <Box display={"flex"} gap={2}>
            <NavLink to="/" className={"link"}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"18px"}
                fontWeight={"400"}
                color={"rgb(0, 0, 0)"}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="/CartItems" className={"link"}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={400}
                fontSize={"18px"}
                color={"rgb(0, 0, 0)"}
              >
                Cart
              </Typography>
            </NavLink>
          </Box>
        </nav>

        <Link to="/CartItems">
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
        </Link>
      </Box>
    </Box>
  );
};
export default Header;
