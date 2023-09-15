import app2 from "./App2";

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

function App() {
  return (
    
    
    
    <Box h="100vh">

      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
 <Flex align="center"
        justify="center"
        bg="#24394A"
        
        width="calc(100% - 50px)"
        top="30px"
        left="50px"
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
      {/* VOLTAR NESSA PORRA DESSE CARALHO */}
      <Flex
        align="center"
        justify="center"
        bg="red"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="#24394A"
          top={100}
          position="absolute"
          borderRadius={5}
          p="4"
          boxShadow="0 1px 2px #ccc"
        
        >
          <FormControl display="flex" flexDir="column" gap="4" color = "#11C8B4" isRequired marginTop='15px' >
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome"color='white'>Nome Completo:</FormLabel>
                <Input color='white'id="nome" />
              </Box>
               <Box w="100%"> 
                <FormLabel htmlFor="nasc" color='white' >Data de Nascimento:</FormLabel>
                <Input color='white'id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="age" color='white' >Idade:</FormLabel>
                <Input color='white' id="age" type="age" />
              </Box>
              
            </HStack>
           
            <HStack spacing="4">
              <Box w="100%"
              
              >
                <FormLabel  color='white'>Sexo:</FormLabel>
                
                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack square="24px">
                  <Checkbox value = "masculino" defaultChecked>Masculino</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Feminino</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Outros</Checkbox>
                  </HStack>
                </RadioGroup>
                
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="cidade">Telefone:</FormLabel>
                <Input color='white' id="cidade" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor ="cidade">Celular:</FormLabel>
                <Input color='white' id="cidade" />
              </Box>
            </HStack>
          
            <HStack spacing="4">
                   

                   
              <Box w="100%">
                <FormLabel color='white' htmlFor="adress">Endereço Residencial:</FormLabel>
                <Input color='white' id="adress" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="adress">CEP:</FormLabel>
                <Input color='white' id="adress" />
              </Box>
            </HStack>

            
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel color='white' htmlFor="UF">UF:</FormLabel>
                <Input color='white' id="adress" type="adress" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="Tefone">Cidade:</FormLabel>
                <Input color='white' id="adress" type="adress" />
              </Box>
              
              <Box w="100%">
                <FormLabel color='white' htmlFor="Tefone">Email:</FormLabel>
                <Input color='white' id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
            <Box w="32%">
                <FormLabel color='white'  htmlFor="nasc">Data de Hoje:</FormLabel>
                <Input color='white' id="nasc" type="date" />
              </Box>
          
              <Box
              
              display='flex'
              alignItems='center'
              justifyContent='right'
              width='100%'
              >

             
             
             
             
             
             
             
              <Button 
                
               
                w={250}
                p="5"
                type="submit"
                bg="teal.400"
                color="black"
                fontWeight="bold"
                fontSize="xl"
                mt="7"
                
                _hover={{ bg: "teal.800" }}
              
                >
                Cadastrar Paciente
              </Button>
              </Box>
              </HStack>
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



<Box w='100%'> 
               <FormLabel  htmlFor="nome"color='white'>Motivo da consulta:</FormLabel>
                <Input p={12} color='white'id="nome" />
             
             </Box>
             
            
            
            <HStack spacing="4">
             <Box w='100%'>
               
               <FormLabel  htmlFor="raça"color='white'>Raça:</FormLabel>
                
                <Select placeholder='Selecione'color="black">
                <option value='option1'>Preta</option>
                <option value='option2'>Branca</option>
                <option value='option3'>Parda</option>
                <option value='option4'>Amarela</option>
                </Select>
             
             
             
                </Box>
           
                <Box w='100%'>
              
                 <FormLabel  htmlFor="altura"color='white'>Altura:</FormLabel>
                   <Input  color='white'id="altura" type="number" />
             
           
             </Box>
           
             <Box w='100%'>
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
                <option value='option1'>A+</option>
                <option value='option2'>A-</option>
                <option value='option3'>B+</option>
                <option value='option4'>B-</option>
                <option value='option5'>AB+</option>
                <option value='option6'>AB-</option>
                <option value='option7'>O+</option>
                <option value='option8'>O-</option>


</Select>







</Box>

</HStack>


            
            
            

 

   <Box
    color='white'
      fontWeight='semibold'
      letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'>
      


</Box>
Antecedentes Pessoais - Paciente teve
       
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
<HStack spacing="4">
            
            <Box w='100%'> 
               <FormLabel  htmlFor="nome"color='white'>Motivo da consulta:</FormLabel>
               <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Anemia</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Depressão</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Tosse Frequente</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Pressão Alta</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Sensibilidade alérgica</Checkbox>
                  
            </HStack>
            
            
            
            
            
            
                </RadioGroup>
             
             </Box>
             
            
             </HStack>
            
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Cardiopatias</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Convulsão</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Asma</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Tensão</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Anestésico</Checkbox>
            </HStack>
            
            
            
            
            
            
                </RadioGroup>  
            
            
                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Hemorragias</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Diabete</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Bronquite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Artrite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Analgésico</Checkbox>
            </HStack>
            
            
            
            
            
            
                </RadioGroup>
            
            
            
            
            
                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Hemofilia</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Herpes</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Rinite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Reumatismo</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Anti-Inflamatório</Checkbox>
            </HStack>
            
            
            
            
            
            
                </RadioGroup>




                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Aids</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Hepatite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Sinusite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Cirrose Hepática</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Antibiótico</Checkbox>
            </HStack>
            
            
            
            
            
            
                </RadioGroup>


          




                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Gastrite</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Desmaios</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Tuberculose</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Meningite</Checkbox>
                  
            </HStack>
            
            
            
            
            
            
                </RadioGroup>
          
          
                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Úlcera</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Enfer.venérea</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Febre Reumát.</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Dor na articula da mand.</Checkbox>
                  
            </HStack>
            
            
            
            
            
            
                </RadioGroup>
          
          
          
                <Box w='100%'> 
               <FormLabel  htmlFor="nome"color='white'>Outras doenças ou alergias:</FormLabel>
                <Input p={12} color='white'id="nome" />
             
             </Box>
          
             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Está tomando algum medicamento no momento, se sim qual ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>
          
             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Está fazendo tratamento médico no momento, se sim qual ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>
          
             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Já fez tratamento de radioterapia ou quimioterapia ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            
          
          
          
          
          
        
          
          
             </Box>



             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>As gengivas sangram com facilidade ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
          
          
          
          
          
          
        
          
          
             </Box>


             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Range os dentes durante o sono ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
          
          
          
          
          
        
          
          
             </Box>




             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Dorme de boca aberta ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
           
          
          
          
          
          
        
          
          
             </Box>

             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Ronca durante o sono ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
         
          
          
          
          
          
        
          
          
             </Box>

             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Está grávida, se sim quantos meses ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>

             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Está tomando algum medicamento no momento, se sim qual?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>



             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Último tratamento odontológico
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>- 6 meses</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>6 meses</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>1 ano</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>2 anos ou +</Checkbox>
           
           
            </HStack>
             </RadioGroup>
             </FormLabel>
          
          
          
          
          
        
          
          
             </Box>
             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Horários da escovação: 
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Antes do café</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Depois do café</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Depois do almoço</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Depois da janta</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Antes de dormir</Checkbox>
            
            
            </HStack>
             </RadioGroup>
             </FormLabel>
            
          
          
          
          
          
        
          
          
             </Box>
          


             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Usa pasta de dente, qual?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Opaca</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Gel</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Mistas(Com Listras)</Checkbox>
            </HStack>
             </RadioGroup>
             </FormLabel>
            
          
          
          
          
          
        
          
          
             </Box>


             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Bochechos com fluor ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            
          
          
          
          
          
        
          
          
             </Box>







             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Usa fio dental ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
         
          
          
          
          
          
        
          
          
             </Box>


             <Center
  as="header"
  h={150}
  bg="#24394A"
  color="white"
  fontWeight="bold"
  fontSize="4xl"
  pb="8"
 
>

<Flex align="center"
  justify="center"
  bg="#24394A"
  
  width="4xl"
  top="30px"
  left="50px"
  maxW={840}
  height="60px"
  borderRadius="10px"
  padding="20px"
  gap="35px"
  position="center"
color = "white"
    >

   <Box
    color='white'
      fontWeight='semibold'
      letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'>
      


</Box>
Antecedentes Familiares  mais próximos 
</Flex>
</Center>  


<Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Alergias, se sim quem ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>



             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Cardiopatias, se sim quem ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>



             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Hemofilia, se sim quem ? 
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>


             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Diabetes, se sim quem ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>







             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>A mãe teve rubéola próxima a gravidez ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
          
          
          
          
          
          
        
          
          
             </Box>



             <Box w='100%'>
             <FormLabel  htmlFor="nome"color='white'>Outros, se sim quem e quais ?
             <RadioGroup color='white' defaultValue="Masculino">
                  <HStack spacing = "12" square="24px">
                  <Checkbox value = "masculino" defaultChecked>Sim</Checkbox>
                  <Checkbox value = "masculino" defaultChecked>Não</Checkbox>
                  
            </HStack>
             </RadioGroup>
             </FormLabel>
            <Input  color='white'id="peso" type="string" />
          
          
          
          
          
        
          
          
             </Box>



             <Box
              
              display='flex'
              alignItems='center'
              justifyContent='right'
              width='100%'
              >

             
             
             
             
             
             
             
              <Button 
                
               
                w={250}
                p="5"
                type="submit"
                bg="teal.400"
                color="black"
                fontWeight="bold"
                fontSize="xl"
                mt="7"
                
                _hover={{ bg: "teal.800" }}
              
                >
                Registrar Informações 
              </Button>
              </Box>
             
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

<Center
  as="header"
  h={150}
  bg="#24394Are"
  color="white"
  fontWeight="bold"
  fontSize="4xl"
  pb="8"
 
>

<Flex align="center"
  justify="center"
  bg="#24394A"
  
  width="calc(100% - 50px)"
  top="30px"
  left="50px"
  maxW={840}
  height="60px"
  borderRadius="10px"
  padding="20px"
  gap="35px"
  position="center"
color = "white"
    >

   <Box
    color='white'
      fontWeight='semibold'
      letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'>
      


</Box>
Ficha Clínica - Paciente
</Flex>
</Center>  



<TableContainer>
  <Table variant='striped' colorScheme='#13232F' w='100%'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr>
        <Th> <FormLabel htmlFor="nasc" color='white' ></FormLabel>  <Input color='white' id="nasc" type="date" /></Th>
        <Th><Input  color='white'id="peso" type="string" /></Th>
        <Th><Input  color='white'id="peso" type="string" /></Th>
        <Th><Input  color='white'id="peso" type="string" /></Th>
        <Th><Input  color='white'id="peso" type="string" /></Th>
      </Tr>
      
    </Thead>
    <Tbody>
      <Tr>
        <Td> <FormLabel htmlFor="nasc" color='white' ></FormLabel>  <Input color='white' id="nasc" type="date" /></Td>
        <Td><Input  color='white'id="peso" type="string" /> </Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
      </Tr>
      <Tr>
        <Td>  <FormLabel htmlFor="nasc" color='white' ></FormLabel> <Input color='white' id="nasc" type="date" /></Td>
        <Td><Input  color='white'id="peso" type="string" /> </Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
      </Tr>
      <Tr>
      <Td> <FormLabel htmlFor="nasc" color='white' ></FormLabel>  <Input color='white' id="nasc" type="date" /></Td>
        <Td> <Input  color='white'id="peso" type="string" /> </Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
      </Tr>
    
    </Tbody>
    
    <Tfoot>
      <Tr>
      <Td> <FormLabel htmlFor="nasc" color='white' ></FormLabel> <Input color='white' id="nasc" type="date" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
        <Td><Input  color='white'id="peso" type="string" /></Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>


<Box
              
              display='flex'
              alignItems='center'
              justifyContent='right'
              width='100%'
              >

             
             
             
             
             
             
             
              <Button 
                
               
                w={250}
                p="5"
                type="submit"
                bg="teal.400"
                color="black"
                fontWeight="bold"
                fontSize="xl"
                mt="7"
                
                _hover={{ bg: "teal.800" }}
              
                >
                Registrar Anotação 
              </Button>
              </Box>
             






          </FormControl>
        </Center>
      </Flex>
    </Box>
  
  
  
  
  
  
  
  );
}

export default App;