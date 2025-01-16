import { Box, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import TopTip from "../components/custom/TopTip";
import Header from "../components/custom/Header";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "../components/ui/button";

const SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

const ApplyNow = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const onVerifyCaptcha = (token) => {
    setIsCaptchaVerified(true);
  };

  const handleSubmit = () => {
    if (isCaptchaVerified) {
      setCurrentStep(2);
    }
  };
  return (
    <>
      <Box>
        <VStack gap="0">
          <TopTip />
          <Header />

          <Box w="100%" bg="#f5f5f5" py="25px" px="5rem">
            <Box bg="#fff" p="25px">
              {/* <VStack id="captcha" w="100%" alignItems="flex-start">
                <HCaptcha sitekey={SITE_KEY} onVerify={onVerifyCaptcha} />

                <Button bg="#0070a3" variant="solid">
                  Submit
                </Button>
              </VStack> */}
              {currentStep === 1 && (
                <VStack id="captcha" w="100%" alignItems="flex-start">
                  <HCaptcha sitekey={SITE_KEY} onVerify={onVerifyCaptcha} />
                  <Button
                    bg="#0070a3"
                    variant="solid"
                    onClick={handleSubmit}
                    disabled={!isCaptchaVerified}
                  >
                    Submit
                  </Button>
                </VStack>
              )}
              {currentStep === 2 && (
                <VStack w="100%" alignItems="flex-start">
                  {/* Content for the next step */}
                  <p>Next step content goes here.</p>
                </VStack>
              )}
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default ApplyNow;
