import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  // const letterImage = `/images/logo${useColorModeValue("-dark", "")}.png`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          {/* <Image src={letterImage} width={20} height={20} alt="logo" /> */}
          <ArrowRightIcon />
          &nbsp; &nbsp;
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            BaraNext
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
