import {
    Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { useState } from "react";

const signinValidationScheme = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
  retypePassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Please retype your password"),
});

const Signin = () => {
  // Terms and conditions
  const [isTCAccepted, setIsTCAccepted] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsTCAccepted(event.target.checked);
  };

  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text fontWeight="medium" textStyle="h1">
            Welcome to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signinValidationScheme}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your password..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember Me</Text>
                    </Checkbox>
                    <Link to="/forgot-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forgot Password?
                      </Text>
                    </Link>
                  </HStack>

                  <Box>
                    <Button w="full" type="submit">Log In</Button>
                    <Link to="/signup">
                      <Button mt="3" w="full" variant="outline">Create an Account</Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
