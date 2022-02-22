import * as React from "react";
import Logo from "./Logo";
import NextLink from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import {
  Box,
  Container,
  Flex,
  forwardRef,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface LinkItemProps {
  href: any;
  path: any;
  _target?: string;
}

interface NavbarProps {
  path: any;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap={"wrap"}
        alignContent="center"
        justifyContent={"space-between"}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/abouts" path={path}>
            About
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/speaks" path={path}>
            Speaks
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/abouts" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/speaks" passHref>
                  <MenuItem as={Link}>Speaks</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
