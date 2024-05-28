import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/world" color="white">
            World
          </Link>
          <Link as={RouterLink} to="/business" color="white">
            Business
          </Link>
          <Link as={RouterLink} to="/technology" color="white">
            Technology
          </Link>
          <Link as={RouterLink} to="/markets" color="white">
            Markets
          </Link>
        </HStack>
      </Flex>
      <Box bg="gray.100" p={4}>
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl">
            Welcome to Financial Times
          </Heading>
          <Text fontSize="lg">
            Stay updated with the latest news in world, business, technology, and markets.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;