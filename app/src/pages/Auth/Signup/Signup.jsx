import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { useState } from "react";

const signupValidationScheme = object({
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

const Signup = () => {
  // Terms and conditions
  const [isTCAccepted, setIsTCAccepted] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsTCAccepted(event.target.checked);
  };

  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              retypePassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationScheme}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter your name..."
                          />
                          {/* To display required field */}
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Input
                            {...field}
                            name="surname"
                            placeholder="Enter your surname..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
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
                  <Field name="retypePassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="retypePassword">
                          Retype Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="retypePassword"
                          type="password"
                          placeholder="Enter your password again..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Checkbox
                    isChecked={isTCAccepted}
                    onChange={handleCheckboxChange}
                  >
                    <Text textStyle="p3">
                      I agree with{" "}
                      <Link to="/signin">
                        <Text as="span" color="p.purple">
                          Terms & Conditions.
                        </Text>
                      </Link>
                    </Text>
                  </Checkbox>
                  <Button type="submit" isDisabled={!isTCAccepted}>Create Account</Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account?{" "}
                    <Link to="/signin">
                      {" "}
                      <Text as="span" color="p.purple">
                        Log In
                      </Text>{" "}
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
