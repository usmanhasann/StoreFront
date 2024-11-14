import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const ProductCards = ({ product, index }) => {
  return (
    <>
      <Box
        key={index}
        width={"370px"}
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
    </>
  );
};
