import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TopTip from "../components/custom/TopTip";
import Header from "../components/custom/Header";
import Alert from "../components/custom/Alert";
import { Button } from "../components/ui/button";
import Footer from "../components/custom/Footer";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ViewTheProcess = () => {
  return (
    <>
      <Box>
        <VStack gap="0">
          <TopTip />
          <Header />
          {/* <Alert /> */}
          {/* <form action="/submit" method="POST">
            <HCaptcha sitekey={SITE_KEY} onVerify={onVerifyCaptcha} />

            <button type="submit">Submit</button>
          </form> */}
          <Box w="100%" px="91.5px" bg="#0070a3">
            <Text fontSize="36px" fontWeight="500" color="#fff">
              What To Expect When You Apply Online
            </Text>
          </Box>
          <Box w="100%" bg="#f5f5f5" py="25px" px="5rem">
            <VStack bg="#fff" p="25px">
              <HStack w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-1.png"
                  alt="step1"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">1.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Disaster Is Declared</Text>
                    <Text fontWeight="400">
                      After a major disaster, the President may declare
                      assistance for certain damaged areas in a state. If you
                      live in one of these areas, you may qualify to apply.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>

              <Text
                textTransform="uppercase"
                w="100%"
                fontWeight="600"
                color="#005b84"
                my="1rem"
                fontSize="20px"
              >
                START THE APPLICATION PROCESS
              </Text>

              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-2.png"
                  alt="step2"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">2.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Find Out If You Can Apply</Text>
                    <Text fontWeight="400">
                      Click{" "}
                      <span style={{ fontWeight: "600", color: "#101828" }}>
                        Apply For Disaster Assistance
                      </span>{" "}
                      on the Home page and we'll ask you a few questions to find
                      out if you can apply.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-3.png"
                  alt="step3"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">3.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Create an Account</Text>
                    <Text fontWeight="400">
                      You need to create an account so you can do a few things:
                      <br />
                      <br />
                      Save your application to finish later, get your status and
                      respond to messages, and upload documents.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-4.png"
                  alt="step4"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">4.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">
                      Gather Your Personal Information
                    </Text>
                    <Text fontWeight="400">
                      You'll need to have as much of the following ready as you
                      can:
                      <br />
                      <br />
                      Home, mailing, and email addresses; phone number, Social
                      Security number (SSN), banking and insurance info.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-5.png"
                  alt="step5"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">5.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Fill Out the Application</Text>
                    <Text fontWeight="400">
                      Enter as much detail as you can. You can go back to your
                      account later to enter anything you don't have handy now.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-6.png"
                  alt="step6"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">6.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">
                      Review and Send Your Application
                    </Text>
                    <Text fontWeight="400">
                      Check what you've entered, make changes if you need to,
                      and send your application to WDA. Remember to save and
                      keep your{" "}
                      <span style={{ fontWeight: "600", color: "#101828" }}>
                        Application ID
                      </span>
                      . You'll need it anytime you talk with WDA.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <Text
                textTransform="uppercase"
                w="100%"
                fontWeight="600"
                color="#005b84"
                my="1rem"
                fontSize="20px"
              >
                AFTER YOU APPLY
              </Text>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-7.png"
                  alt="step7"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">7.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">WDA Reviews Your Application</Text>
                    <Text fontWeight="400">
                      If WDA can't qualify you based on your application alone,
                      we may request more info or to inspect your home.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-8.png"
                  alt="step8"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">8.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Check Your Email</Text>
                    <Text fontWeight="400">
                      WDA will email you when you have messages in your account.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack mb="2.5rem" w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-9.png"
                  alt="step9"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">9.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Check Your Status</Text>
                    <Text fontWeight="400">
                      You can sign in to your account at any time to check the
                      status of your application.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack w="100%" alignItems="flex-start" gap="2rem">
                <Image
                  src="/images/step-10.png"
                  alt="step10"
                  w="100px"
                  h="auto"
                />
                <HStack alignItems="flex-start">
                  <Text fontWeight="400">10.</Text>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="600">Get Payment</Text>
                    <Text fontWeight="400">
                      If you qualify, WDA will send a payment using the method
                      you choose. You can get a direct deposit or a check by
                      mail.
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack
                mb="2.5rem"
                w="100%"
                alignItems="center"
                gap="1rem"
                h="100%"
              >
                <Box w="7px" h="2rem" bg="#257D5D"></Box>
                <Text fontWeight="400">
                  If you have more questions, check out our{" "}
                  <a
                    href="/faq"
                    style={{
                      color: "#0070a3",
                      textDecoration: "underline",
                    }}
                  >
                    Frequently Asked Questions
                  </a>{" "}
                  page.
                </Text>
              </HStack>
              <HStack w="100%" justifyContent="flex-end">
                <Button bg="#0070a3" variant="solid">
                  Find out if you can apply
                </Button>
              </HStack>
            </VStack>
          </Box>
          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default ViewTheProcess;
