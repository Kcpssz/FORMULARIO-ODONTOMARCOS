import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  VStack,


} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
   TabPanels,
    Tab,
     TabPanel, Checkbox, CheckboxGroup 

} from "@chakra-ui/react";
import { Portal } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
 
  function App2() {
    return (
    
    
        <Box h="100vh">
{/*Começo da Primeira Div*/}
        <Center
          as="header"
          h={150}
          bg="teal.500"
          color="black"
          fontWeight="bold"
          fontSize="4xl"
          pb="8"
        >
   <Flex align="center"
          justify="center"
          bg="#24394A"
          width="calc(100% - 50px)"
          maxW={840}
          height="60px"
          borderRadius="10px"
          padding="20px"
          gap="35px"
          position="center"
  >
  
  <Box
            color='white'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
  <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}>Cadastro de Identificação</Tab>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}> Anamnese</Tab>  
    <Tab _selected={{ color: 'white', bg: '#13232F' }}> Orçamento</Tab>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}>Ficha Clínica</Tab>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}>Pacientes</Tab>
    

 
  </TabList>
  
  
</Tabs>

</Box>
      
    </Flex>
</Center>  
{/*final da Primeira Div*/}


{/*Começo da segunda div*/}
<Flex
align="center"
justify="center"
bg="#11C8B4"
h="calc(100vh - 150px)"
>
<Center
w="100%"
maxW={840}
bg="#24394A"
top={100}
position="absolute"
borderRadius={5}
p="6"
boxShadow="0 1px 2px #24394A"
>
<FormControl display ="flex" flexDir="column" gap="4" isRequired ='15px'>
<HStack spacing="4">
<Box w='100%'
> 
<FormLabel  htmlFor="motivodaConsulta"color='white'>Motivo da consulta:</FormLabel>
<Input p={12} color='white'id="motivodaConsulta" />             
</Box>
</HStack>
         
      
             <HStack spacing="4">
              <Box w="32%">
             <FormLabel  htmlFor="raça"color='white'>Raça:</FormLabel>
             <Select placeholder='Selecione'color="black">
                <option value='preta'>Preta</option>
                <option value='branca'>Branca</option>
                <option value='parda'>Parda</option>
                <option value='amarela'>Amarela</option>
                </Select>
                </Box>
                
        <Box w="32%">
        <FormLabel  htmlFor="altura"color='white'>Altura:</FormLabel>
                   <Input  color='white'id="altura" type="number" />
        </Box>

        <Box w="32%">
        <FormLabel  htmlFor="peso"color='white'>Peso:</FormLabel>
                <Input  color='white'id="peso" type="number" />
        </Box>



                </HStack>
                     
                <HStack spacing="4">
<Box 
alignItems='center'
width='32%'> 
<FormLabel  htmlFor="nome"color='white'>Tipo Sanguíneo:</FormLabel>
<Select placeholder='Selecione'color="black">
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='AB+'>AB+</option>
                <option value='AB-'>AB-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>

</Select>

</Box>

</HStack>

</FormControl> 

</Center>
{/*FInal da segunda div*/}


<Flex 
flexDirection="column" 
alignItems="center" 
justifyContent="center" 
p="4"
w="100%"
maxW={840}
bg="#24394A"
position="absolute"
borderRadius={5}
boxShadow="0 1px 2px #24394A"
>
  <h2>Minha Nova Div com Flex</h2>
  <p>Aqui estão alguns elementos na minha nova div:</p>
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3 </li>
  </ul>
  
</Flex>


































</Flex>
    </Box>
  
        );
    }
    
    export default App2;