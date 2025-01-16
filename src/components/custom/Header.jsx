import {
  Button,
  HStack,
  Image,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack
        borderBottom="1px solid #000"
        justifyContent="space-between"
        w="100%"
        px="91.5px"
        py="16px"
      >
        <Link to="/">
          <HStack>
            <Image src="/icons/wda-fav-color.svg" h="56px" w="auto" />
            <Text w="6rem" fontSize="12px" fontWeight="600" lineHeight="1.1">
              L.A. County Wildfire Disaster Assistance
            </Text>
          </HStack>
        </Link>
        <VStack alignItems="flex-end">
          <Button borderRadius="0" fontSize="1rem" bg="#3B73B9">
            Español
          </Button>
          <HStack fontWeight="600">
            <Link to="/partners">
              <Text color="#3B73B9" textDecoration="underline">
                For Partners
              </Text>
            </Link>
            <Separator orientation="vertical" height="4" />
            <Link to="/newsroom">
              <Text color="#3B73B9" textDecoration="underline">
                Newsroom
              </Text>
            </Link>
            <Separator orientation="vertical" height="4" />
            <Link to="/contact-us">
              <Text color="#3B73B9" textDecoration="underline">
                Contact us
              </Text>
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Header;
