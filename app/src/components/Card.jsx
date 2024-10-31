import { Card as ChakraCard } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <ChakraCard
      bg={{
        base: "transparent",
        md: "white",
      }}
      p={{
        base: "8",
        md: "6",
      }}
      borderRadius={{
        base: "none",
        md: "1rem",
      }}
      w="456px"
      boxShadow={{
        base: "none",
        md: "lg",
      }}
    >
        {children}
    </ChakraCard>
  );
};

export default Card;
