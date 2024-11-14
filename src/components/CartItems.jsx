import { Box, Button, Typography } from "@mui/material";
import Img01 from "../../public/1001.png";
import Img02 from "../../public/1006.png";
const CartItems = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        <Box width={"95%"} margin={"30px 0"}>
          <Box>
            <Typography fontSize={"24px"} fontWeight={700} textAlign={"center"}>
              Cart Items: 2
            </Typography>
          </Box>
          <Box
            padding={"10px"}
            borderRadius={"5px"}
            boxShadow={"0 1px 4px rgba(0, 0, 0, .16)"}
            margin={"30px 10px"}
            display={"flex"}
            gap={29}
            alignItems={"center"}
          >
            <img src={Img01} alt="itemImage" height={"100px"} width={"150px"} />
            <Typography fontSize={"16px"} fontWeight={400}>
              Sony Wh-Ch510 Bluetooth Wireless
            </Typography>
            <Typography fontSize={"16px"} fontWeight={400}>
              $149
            </Typography>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
              }}
              variant="contained"
            >
              Remove
            </Button>
          </Box>
          <Box
            padding={"10px"}
            display={"flex"}
            margin={"30px 10px"}
            gap={29}
            alignItems={"center"}
            borderRadius={"5px"}
            boxShadow={"0 1px 4px rgba(0, 0, 0, .16)"}
          >
            <img src={Img02} alt="itemImage" height={"100px"} width={"150px"} />
            <Typography fontSize={"16px"} fontWeight={400}>
              Sony Wh-Ch510 Bluetooth Wireless
            </Typography>
            <Typography fontSize={"16px"} fontWeight={400}>
              $149
            </Typography>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
              }}
              variant="contained"
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CartItems;
