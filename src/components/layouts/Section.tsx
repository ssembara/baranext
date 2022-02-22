import { motion } from "framer-motion";
import {
  Box,
  BoxProps,
  chakra,
  shouldForwardProp,
  styled,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop);
  },
});

interface SectionProps {
  childern?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    mb={6}
  >
    {children}
  </MotionBox>
);

export default Section;
