import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Alert = () => {
  return (
    <>
      <Box px="91.5px" h="60px" w="100%" my="1rem">
        <HStack h="100%" gap="0">
          <Box w="7px" h="100%" bg="#257D5D"></Box>
          <HStack h="100%" w="100%" px="28px" bg="rgba(59, 115, 185, 0.5)">
            <Image src="/icons/info.svg" />
            <Text fontWeight="600" color="#101828">
              WDA has received additional funding and resumed disaster
              assistance offers.
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Alert;
