import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box bg="#fff1e5">
      <Flex as="nav" bg="gray.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
            World
          </Link>
          <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Business
          </Link>
          <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Markets
          </Link>
        </HStack>
      </Flex>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Top Stories
            </Heading>
            <Text fontSize="lg">
              Welcome to the Financial Times. Stay updated with the latest news in the world of finance, business, technology, and markets.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Latest News
            </Heading>
            <Text>
              Here you will find the latest news articles and updates.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;