import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Stack mt="10" spacing={6}>
            <Flex gap="4">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input name="name" placeholder="Enter your name..." />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="surname">Surname</FormLabel>
                <Input name="surname" placeholder="Enter your surname..." />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email..."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password..."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="retypePassword">Retype Password</FormLabel>
              <Input
                name="retypePassword"
                type="password"
                placeholder="Enter your password again..."
              />
            </FormControl>
            <Checkbox>
              <Text textStyle="p3">
                I agree with{" "}
                <Link to="/signin">
                  <Text as="span" color="p.purple">
                    Terms & Conditions.
                  </Text>
                </Link>
              </Text>
            </Checkbox>
            <Button>Create Account</Button>
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
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
