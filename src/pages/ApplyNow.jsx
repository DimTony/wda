import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import TopTip from "../components/custom/TopTip";
import Header from "../components/custom/Header";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "../components/ui/button";

const SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

const ApplyNow = () => {
  const onVerifyCaptcha = (token) => {
    console.log("Captcha verified", token);
  };
  return (
    <>
      <Box>
        <VStack gap="0">
          <TopTip />
          <Header />

          <Box w="100%" bg="#f5f5f5" py="25px" px="5rem">
            <Box bg="#fff" p="25px">
              {/* <form action="/submit" method="POST"> */}

              <VStack w="100%" alignItems="flex-start">
                <HCaptcha sitekey={SITE_KEY} onVerify={onVerifyCaptcha} />

                <Button bg="#0070a3" variant="solid">
                  Submit
                </Button>
              </VStack>
              {/* </form> */}
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default ApplyNow;
