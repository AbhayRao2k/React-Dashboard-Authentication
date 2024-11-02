import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
  const forgotValidationScheme = object({
    email: string().email("Email is invalid").required("Email is required"),
  });

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Password Reset Done
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Now you can access you account.
          </Text>
          <Box w="full">
            <Link to="/signin">
              <Button w="full" type="submit">
                Sign In
              </Button>
            </Link>
          </Box>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
