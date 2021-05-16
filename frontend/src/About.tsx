import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"

const About: React.FC<any> = ({ title, subtitle, image, ctaLink, ctaText, ...rest }) => {
    return (
        <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} {...rest}>
            <Stack spacing={4} w={{ base: "100%", md: "140%" }} align={["center", "center", "flex-start", "flex-start"]}>
                <Heading as="h1" size="xl" fontWeight="bold" color="primary.800" ml={"auto"} mr={"auto"} >
                    {title}
                </Heading>
                <Heading as="h2" size="md" color="primary.800" opacity="0.8" fontWeight="normal" lineHeight={1.5} ml={"auto"} mr={"auto"} justifyContent="center">
                    {subtitle}
                </Heading>
                <Text fontSize="md" mt={2} textAlign="center" color="primary.8000" opacity="0.8" mr={"auto"} pl={"auto"} lineHeight={1.5}>
                    In today’s world, how does one know if you're buying a real product?
                    For quite a decade now, RFID (Radio Frequency IDentification) technology has been quite effective in providing anti-counterfeits measures within the supply chain.
                    We leverage the thought of Bitcoin’s blockchain that anyone can check the proof of possession of balance. along side this, we decide to use QR codes.
                    We decide to implement a proof-of-concept system employing a blockchain-based decentralized application which provides a customer the whole history of a product (eg - brand info, owner, etc).
                </Text>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
                </Box>
            </Stack>

        </Flex >
    )
}

About.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
}
About.defaultProps = {
    title: "About Authenti-K8",
    subtitle: "A blockchain-based Product Ownership Management System for anti-counterfeits in the Post Supply Chain.",
    //image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80",
    ctaText: "Create your account now  >",
    ctaLink: "/CreateRetailer",
}

export default About