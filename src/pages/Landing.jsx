import {
  Box,
  HStack,
  Image,
  List,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import React from "react";
import TopTip from "../components/custom/TopTip";
import { Link } from "react-router-dom";
import Header from "../components/custom/Header";
import Alert from "../components/custom/Alert";
import Footer from "../components/custom/Footer";

const Landing = () => {
  return (
    <>
      <Box>
        <VStack>
          <TopTip />
          <Header />
          <Alert />
          <VStack pb="1rem" px="130px">
            <Text
              fontSize="51.04px"
              fontWeight="600"
              color="rgb(0, 46, 109)"
              lineHeight="77px"
            >
              Wildfire Disaster Assistance
            </Text>
            <Text
              textAlign="center"
              fontSize="26px"
              fontWeight="400"
              color="rgb(0, 46, 109)"
            >
              Explore WDA's low-interest disaster loans to help homeowners,
              renters, nonprofits, and businesses of all sizes affected by the
              wildfires and straight-line winds in California.
            </Text>
          </VStack>
          <Box w="100%" h="5px" px="91.5px">
            <Box h="100%" w="10%" bg="red"></Box>
          </Box>
          <HStack alignItems="flex-start" w="100%" px="91.5px">
            <Text fontSize="38px" fontWeight="400" color="rgb(0, 46, 109)">
              Content
            </Text>
          </HStack>
          <VStack
            borderBottom="1px solid #000"
            pb="2rem"
            alignItems="flex-start"
            w="100%"
            px="91.5px"
          >
            <a href="#areas-eligible-for-wda-disaster-loans">
              <Text
                fontSize="18px"
                color="#3B73B9"
                textDecoration="underline"
                fontWeight="400"
                cursor="pointer"
                _hover={{ color: "rgb(0, 46, 109)" }}
              >
                Areas eligible for WDA disaster loans
              </Text>
            </a>
            <a href="#types-of-available-disaster-loans">
              <Text
                fontSize="18px"
                color="#3B73B9"
                textDecoration="underline"
                fontWeight="400"
                cursor="pointer"
                _hover={{ color: "rgb(0, 46, 109)" }}
              >
                Types of available disaster loans
              </Text>
            </a>
            <a href="#get-help-with-your-application">
              <Text
                fontSize="18px"
                color="#3B73B9"
                textDecoration="underline"
                fontWeight="400"
                cursor="pointer"
                _hover={{ color: "rgb(0, 46, 109)" }}
              >
                Get help with your application
              </Text>
            </a>
            <a href="#additional-assistance">
              <Text
                fontSize="18px"
                color="#3B73B9"
                textDecoration="underline"
                fontWeight="400"
                cursor="pointer"
                _hover={{ color: "rgb(0, 46, 109)" }}
              >
                Additional assistance
              </Text>
            </a>
          </VStack>
          <HStack my="1.5rem" gap="1rem">
            <Button
              _hover={{ bg: "#900" }}
              fontSize="24px"
              bg="#aa0000"
              p="24px"
            >
              Apply for disaster loans
            </Button>
            <Button
              variant="outline"
              fontSize="24px"
              border="2px solid #000"
              fontWeight="600"
              p="24px"
            >
              Schedule an in-person appointment
            </Button>
          </HStack>
          <VStack
            id="areas-eligible-for-wda-disaster-loans"
            alignItems="flex-start"
            w="100%"
            px="91.5px"
            mb="2rem"
          >
            <Text fontSize="2.4rem" fontWeight="400" color="#002e6d">
              Areas eligible for WDA disaster loans
            </Text>

            <Link to="/eligibility/disaster-ca-20030">
              <Text
                fontSize="18px"
                fontWeight="400"
                color="rgb(0, 46, 109)"
                textDecoration="underline"
              >
                See if your county is eligible for a WDA disaster loan
              </Text>
            </Link>
          </VStack>
          <VStack
            mb="2rem"
            id="types-of-available-disaster-loans"
            alignItems="flex-start"
            w="100%"
            px="91.5px"
          >
            <Text fontSize="2.4rem" fontWeight="400" color="#002e6d">
              Types of available disaster loans
            </Text>

            <List.Root gap="1rem" fontWeight="400">
              <List.Item _marker={{ color: "inherit" }}>
                <Text
                  display="inline"
                  color="#005999"
                  fontSize="1.13rem"
                  fontWeight="400"
                  textDecoration="underline"
                >
                  Home Disaster Loans:
                </Text>{" "}
                Loans to homeowners or renters to repair or replace
                disaster-damaged real estate and personal property, including
                automobiles.
              </List.Item>
              <List.Item _marker={{ color: "inherit" }}>
                <Text
                  display="inline"
                  color="#005999"
                  fontSize="1.13rem"
                  fontWeight="400"
                  textDecoration="underline"
                >
                  Business Physical Disaster Loans:
                </Text>{" "}
                Loans to businesses to repair or replace disaster-damaged
                property owned by the business, including real estate,
                inventories, supplies, machinery and equipment. Businesses of
                any size are eligible. Private, non-profit organizations such as
                charities, churches, private universities, etc., are also
                eligible.
              </List.Item>
              <List.Item _marker={{ color: "inherit" }}>
                <Text
                  display="inline"
                  color="#005999"
                  fontSize="1.13rem"
                  fontWeight="400"
                  textDecoration="underline"
                >
                  Economic Injury Disaster Loans (EIDL):
                </Text>{" "}
                Working capital loans to help small businesses, small
                agricultural cooperatives, small businesses engaged in
                aquaculture, and most private, non-profit organizations of all
                sizes meet their ordinary and necessary financial obligations
                that cannot be met as a direct result of the disaster. These
                loans are intended to assist through the disaster recovery
                period.
              </List.Item>
            </List.Root>
          </VStack>
          <VStack
            id="get-help-with-your-application"
            alignItems="flex-start"
            w="100%"
            px="91.5px"
            mb="2rem"
          >
            <Text fontSize="2.4rem" fontWeight="400" color="#002e6d">
              Get help with your application
            </Text>

            <Text fontWeight="400">
              Applicants are encouraged to{" "}
              <Link to="apply">
                <span style={{ color: "#3B73B9", textDecoration: "underline" }}>
                  apply online for a disaster loan
                </span>
              </Link>
              . Please call us at 800-659-2955 or{" "}
              <Link to="/schedule">
                <span style={{ color: "#3B73B9", textDecoration: "underline" }}>
                  schedule an in-person appointment
                </span>
              </Link>{" "}
              if you have any questions.
            </Text>
          </VStack>
          <VStack
            id="additional-assistance"
            alignItems="flex-start"
            w="100%"
            px="91.5px"
            mb="2rem"
          >
            <Text fontSize="2.4rem" fontWeight="400" color="#002e6d">
              Additional Assistance
            </Text>
          </VStack>
          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Landing;
