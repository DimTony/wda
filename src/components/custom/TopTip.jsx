import { Collapsible, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const TopTip = () => {
  const [showWhy, setShowWhy] = useState(false);

  const toggleShowWhy = () => {
    setShowWhy(!showWhy);
  };
  return (
    <>
      <Collapsible.Root bg="#f5f5f5" w="100%" px="91.5px">
        <VStack>
          <HStack h="22.06px" bg="#f5f5f5" w="100%">
            <Image src="/images/lacounty.png" w="16px" h="11px" />

            <Text
              color="#1b1b1b"
              fontSize=".8rem"
              lineHeight="1.1"
              fontWeight="400"
            >
              An official website of the Los Angeles County Government{" "}
            </Text>

            <Collapsible.Trigger>
              <HStack gap="0.2rem" cursor="pointer" onClick={toggleShowWhy}>
                <Text
                  color="#1b1b1b"
                  fontSize=".8rem"
                  lineHeight="1.1"
                  fontWeight="400"
                  textDecoration="underline"
                >
                  Here's how you know
                </Text>
                {showWhy ? (
                  <ChevronUp size=".9rem" />
                ) : (
                  <ChevronDown size=".9rem" />
                )}
              </HStack>
            </Collapsible.Trigger>
          </HStack>
          <Collapsible.Content w="100%">
            {/* {showWhy && ( */}
            <HStack alignItems="flex-start">
              <Image src="/icons/icon-https.svg" w="40px" h="40px" />

              <VStack alignItems="flex-start" gap="0" w="40%">
                <Text fontWeight="600">Secure websites use HTTPS</Text>
                <Text>
                  A <span style={{ fontWeight: "600" }}>lock</span> ({" "}
                  <Image
                    display="inline"
                    src="/icons/lock.svg"
                    w="9.47px"
                    h="11px"
                  />{" "}
                  ) or <span style={{ fontWeight: "600" }}>https://</span> means
                  you've safely connected to the website. Share sensitive
                  information only on official, secure websites.
                </Text>
              </VStack>
            </HStack>
            {/* )} */}
          </Collapsible.Content>
        </VStack>
      </Collapsible.Root>
    </>
  );
};

export default TopTip;
