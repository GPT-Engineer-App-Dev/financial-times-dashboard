import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Financial Times</Heading>
        <Box boxSize="sm" bg="gray.200" p={4} borderRadius="md">
          <Text fontSize="2xl" color="gray.500">Financial Times Logo</Text>
        </Box>
        <Text fontSize="xl" textAlign="center">
          Stay updated with the latest financial news and insights.
        </Text>
        <Button colorScheme="teal" size="lg" mt={6}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;