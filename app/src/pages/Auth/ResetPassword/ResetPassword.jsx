import {
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
import { object, ref, string } from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const isFormFilled = newPassword && retypePassword;

  const resetValidationScheme = object({
    password: string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
    retypePassword: string()
      .oneOf([ref("password"), null], "Passwords must match")
      .required("Please retype your password"),
  });

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your new password
          </Text>
          <Formik
            initialValues={{
              password: "",
              retypePassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={resetValidationScheme}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">New Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your password..."
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="retypePassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="retypePassword">
                          Confirm New Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="retypePassword"
                          type="password"
                          placeholder="Enter your password again..."
                          value={retypePassword}
                          onChange={(e) => setRetypePassword(e.target.value)}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Link to="/reset-success">
                    <Button w="full" type="submit" isDisabled={!isFormFilled}>
                      Reset Password
                    </Button>
                  </Link>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassword;
