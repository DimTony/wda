import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box w="100%">
        <VStack w="100%">
          <HStack></HStack>
          <HStack
            w="100%"
            bg="#c5c5c5"
            px="91.5px"
            py="20px"
            justifyContent="space-between"
          >
            <HStack>
              <Image src="/icons/wda-fav-color.svg" w="80px" h="auto" />
              <VStack alignItems="flex-start" gap="0" w="10rem">
                <Text fontWeight="400">
                  L.A. County Wildfire Disaster Assistance
                </Text>
                <Text>409 3rd St., SW Washington, DC 20416 800-827-5722</Text>
              </VStack>
            </HStack>

            <HStack>
              <Link>
                <Image src="/icons/facebook.svg" w="40px" h="40px" />
              </Link>
              <Link>
                <Image src="/icons/xlogo.svg" w="40px" h="40px" />
              </Link>
              <Link>
                <Image src="/icons/youtube.svg" w="40px" h="40px" />
              </Link>
              <Link>
                <Image src="/icons/linkedin.svg" w="40px" h="40px" />
              </Link>
              <Link>
                <Image src="/icons/instagram.svg" w="40px" h="40px" />
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
