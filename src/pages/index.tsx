import Body from "../components/layouts/Body";
import React from "react";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  return (
    <Body title={"Home"}>
      <Container maxW={"7xl"}>
        <Box
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Baranextttt 🍃
        </Box>
      </Container>
    </Body>
  );
};

export default Home;
