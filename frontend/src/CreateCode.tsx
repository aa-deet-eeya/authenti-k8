import { Button, Flex, Heading, Input, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import crypto from 'crypto'
const CreateCode = () => {

    const [brandName, setBrandName] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturerLocation, setManufacturerLocation] = useState('');


    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form was submitted")
        console.log('brandName', brandName);
        console.log('model', model);
        console.log('manufacturer', manufacturer);
        console.log('manufacturerLocation', manufacturerLocation);
    //     function generateQRCodeData() {
    //         return crypto.randomBytes(20).toString('hex');
    //     }
    //     var qrdata = generateQRCodeData();
    //     console.log(qrdata)
    //     generateQRCode(qrdata)

    // };
    }
    // const generateQRCode = (qrdata: any) => {
    //     var data = qrdata;
    //     let QRCode = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data;
    //     console.log(QRCode)
    //     return QRCode
    // }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <Flex height="90vh" alignItems="center" justifyContent="center">
                <Flex direction="column" p={24} rounded={6}>
                    <Heading mb={6}>Generate QR Codes</Heading>
                    <FormControl isRequired>
                        <FormLabel>Brand Name</FormLabel>
                        <Input placeholder="Brand Name" variant="filled" type="text" value={brandName} mb="6" onChange={({ target }) => setBrandName(target.value)}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Model</FormLabel>
                        <Input placeholder="Model" variant="filled" type="text" value={model} mb="6" onChange={({ target }) => setModel(target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder="Description" variant="filled" type="textarea" value={description} mb="6" onChange={({ target }) => setDescription(target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Manufacturer</FormLabel>
                        <Input placeholder="Manufacturer" variant="filled" type="text" value={manufacturer} mb="6" onChange={({ target }) => setManufacturer(target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Manufacturer Location</FormLabel>
                        <Input placeholder="Manufacturer Location" variant="filled" type="text" value={manufacturerLocation} mb="6" onChange={({ target }) => setManufacturerLocation(target.value)} />
                    </FormControl>
                    <FormControl>
                        <Button colorScheme="teal" type="submit">Generate</Button>
                        {/* <div id="qrcode">
                            <img src={generateQRCode()} alt="QRCode" />
                        </div> */}
                    </FormControl>
                </Flex>
            </Flex >
        </form>

    );





}
//background="gray.100"
//#0CA25F
export default CreateCode