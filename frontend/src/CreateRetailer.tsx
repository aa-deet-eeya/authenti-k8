import { Button, Flex, Heading, Input, FormControl, FormLabel, InputRightElement, InputGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreateRetailer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    //const [confirmPassword, setConfirmPassword] = useState('');
    const isInvalid = password === '' || email === '';

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form was submitted")
        console.log('email', email);
        console.log('password', password);
        console.log('name', name);
        console.log('loaction', location);

    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <Flex height="70vh" alignItems="center" justifyContent="center">
                <Flex direction="column" p={24} rounded={6}>
                    <Heading mb={6}>Register</Heading>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Name" variant="filled" type="text" value={name} mb="6" onChange={({ target }) => setName(target.value)}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder="Email" variant="filled" type="email" value={email} mb="6" onChange={({ target }) => setEmail(target.value)}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Location</FormLabel>
                        <Input placeholder="Location" variant="filled" type="text" value={location} mb="6" onChange={({ target }) => setLocation(target.value)}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input placeholder="Password" variant="filled" type={showPassword ? 'text' : 'password'} value={password} mb="6" onChange={({ target }) => setPassword(target.value)}></Input>
                            <InputRightElement width="4.5rem"><Button height="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</Button></InputRightElement>
                        </InputGroup>
                    </FormControl>
                    {/* <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={({target}) => setConfirmPassword(target.value)}></input> */}
                    <FormControl>
                        <Button colorScheme="teal" type="submit" mt={10} disabled={isInvalid} >Generate</Button>
                    </FormControl>

                </Flex>
            </Flex>
        </form>
    )

}

export default CreateRetailer















// const CreateRetailer = () => (
// <Flex height="70vh" alignItems="center" justifyContent="center">
//     <Flex direction="column"  p={24} rounded={6}> 
//     <Heading mb={6}>Register</Heading>
//     <Input placeholder="Name" variant="filled" mb="3" type="name" pl={50} pr={50}></Input>
//     <Input placeholder="Email" variant="filled" mb="3" type="email" pl={50} pr={50}></Input>
//     <Input placeholder="Location" variant="filled" mb="3" type="text" pl={50} pr={50}></Input>
//     <Input placeholder="Password" variant="filled" mb="3" type="password" pl={50} pr={50}></Input>
//     <Input placeholder="Confirm Password" variant="filled" mb="3" type="password" pl={50} pr={50}></Input>
//     <Button colorScheme="teal">Register</Button>
//     </Flex>
// </Flex>
// )
// //background="gray.100"
// //#0CA25F
// export default CreateRetailer