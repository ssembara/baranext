import Body from "../components/layouts/Body";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

const Speak = () => {
  return (
    <Body title="Speak">
      <Container maxW={"xl"}>
        <Heading as="h1">Sorry</Heading>
        <Text>The page you&apos;re looking for was under construction.</Text>
        <Divider my={6} />
        <Box my={6} textAlign="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </Body>
  );
};

export default Speak;
