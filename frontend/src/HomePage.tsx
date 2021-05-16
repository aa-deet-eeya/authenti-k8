import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"

const HomePage: React.FC<any> = ({ title, subtitle, image, ctaLink, ctaText, ...rest }) => {
    return (
        <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} {...rest}>
            <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
                <Heading as="h1" size="xl" fontWeight="bold" color="primary.800" textAlign={["center", "center", "left", "left"]}>
                    {title}
                </Heading>
                <Heading as="h2" size="md" color="primary.800" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button colorScheme="teal" variantColor="teal" borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
                        {ctaText}
                    </Button>
                </Link>
                <Text fontSize="xs" mt={2} textAlign="center" color="primary.800" opacity="0.6" >
                    No credit card required.
                </Text>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
            </Box>
        </Flex >
    )
}

HomePage.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
  }
  HomePage.defaultProps = {
    title: "Authenti-K8",
    subtitle:
      "A blockchain-based Product Ownership Management System for anti-counterfeits in the Post Supply Chain.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80",
    ctaText: "Create your account now  >",
    ctaLink: "/CreateRetailer",
  }

export default HomePage