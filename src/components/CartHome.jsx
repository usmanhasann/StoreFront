import image1 from "../../public/1001.png";
import image2 from "../../public/1002.png";
import image3 from "../../public/1003.png";
import image4 from "../../public/1004.png";
import image5 from "../../public/1005.png";
import image6 from "../../public/1006.png";
import { Box, Button, Typography } from "@mui/material";
const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: image1,
  },
  { id: 2, name: "boAt Rockerz 450", price: 49, image: image2 },
  { id: 3, name: "JBL Tune 760NC", price: 179, image: image3 },
  { id: 4, name: "Logitech H111 Wired", price: 39, image: image4 },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: image5,
  },
  { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: 29, image: image6 },
  { id: 7, name: "Bose QuietComfort 35 II", price: 299, image: image1 },
  { id: 8, name: "Sennheiser Momentum 3", price: 349, image: image2 },
  { id: 9, name: "Beats Studio3 Wireless", price: 249, image: image3 },
  { id: 10, name: "AKG N60NC Wireless", price: 229, image: image4 },
  { id: 11, name: "Bang & Olufsen Beoplay H9", price: 499, image: image5 },
  { id: 12, name: "Plantronics BackBeat Pro 2", price: 199, image: image6 },
];

const CartHome = () => {
  return (
    <Box
      width={"100%"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"1300px"}
        minHeight={"100vh"}
        bgcolor={"white"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        display={"flex"}
      >
        {products.map((product, index) => (
          <Box
            key={index}
            width={"350px"}
            padding={"10px"}
            margin={"10px"}
            boxShadow={"0 1px 4px rgba(0, 0, 0, .16)"}
          >
            <Box
              height={"250px"}
              margin={"10px 0"}
              maxWidth={"100%"}
              sx={{
                cursor: "pointer",
                opacity: 0.6,
                "&:hover": { opacity: 1 },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                height={"250px"}
                width={"100%"}
              />
            </Box>
            <Box>
              <Typography
                fontSize={"18px"}
                fontWeight={500}
                fontFamily={"Poppins, sans-serif"}
              >
                {product.name}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              margin={"10px 0"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography fontSize={"18px"} fontWeight={500}>
                ${product.price}
              </Typography>
              <Button
                sx={{
                  color: "#fff",
                  bgcolor: "#1c59ae",
                  "&:hover": {
                    bgcolor: "#17478e",
                  },
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartHome;
