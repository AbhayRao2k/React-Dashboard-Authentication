import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
      <Center>
        <Center minH="100vh">
          <Card
            p={{
              base: "4",
              md: "10",
            }}
            showCard={true}
          >
            <VStack spacing={6}>
              <Icon as={FaCheckCircle} boxSize="48px" color="green" />
              <Text textStyle="h4" fontWeight="medium" color="p.black">
                Successfully Registered
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        </Center>
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
