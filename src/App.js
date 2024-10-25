import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  SimpleGrid,
  Link,
  HStack,
  Flex,
  Spacer,
  useColorMode,
  Switch,
  Container,
  Divider,
  Stack,
  Grid,
  Circle,
  Square,
  Badge,
  Wrap,
  WrapItem,
  Avatar,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaDiscord,
  FaGithub,
  FaLaptopCode,
  FaMobileAlt,
  FaTools,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Definindo valores de cor sem usar useColorModeValue
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const textColor = colorMode === "light" ? "black" : "white";
  const borderColor = colorMode === "light" ? "gray.200" : "gray.700";
  const navBgColor = colorMode === "light" ? "white" : "gray.800";
  const navTextColor = colorMode === "light" ? "black" : "teal.300";
  const dividerColor = colorMode === "light" ? "gray.300" : "gray.700";
  const heroBgGradient = isDark
    ? "linear(to-br, #0f2027, #203a43, #2c5364)"
    : "linear(to-br, teal.500, green.500)";
  const modalBgColor = colorMode === "light" ? "white" : "gray.800";
  const iconColor = colorMode === "light" ? "teal.500" : "teal.300";

  const blogPosts = [
    {
      id: 1,
      title: "Construindo uma API RESTful com Node.js",
      summary:
        "Aprenda como criar uma API robusta e escalável usando Node.js e Express.",
      content:
        "Neste artigo, exploraremos como construir uma API RESTful utilizando Node.js e Express. Abordaremos conceitos como rotas, controladores, modelos, autenticação e boas práticas para desenvolvimento backend.",
    },
    {
      id: 2,
      title: "Desenvolvimento Frontend Moderno com React",
      summary:
        "Um guia completo sobre como criar interfaces de usuário dinâmicas com React.",
      content:
        "O React revolucionou a forma como construímos interfaces de usuário. Neste post, vamos aprender sobre componentes funcionais, hooks, gerenciamento de estado e como construir aplicações performáticas e escaláveis.",
    },
  ];

  const [selectedPost, setSelectedPost] = React.useState(null);

  const projects = [
    {
      id: 1,
      title: "Feira de Ciências",
      description:
        "Um site interativo para a feira de ciências, exibindo projetos inovadores e descobertas empolgantes.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2d/ce/foz-do-iguacu.jpg?w=1100&h=1100&s=1",
      link: "https://projetofeira.vercel.app",
    },
    {
      id: 2,
      title: "Xavier Notícias",
      description:
        "Um site de notícias atualizado com as últimas manchetes e reportagens exclusivas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Maria_da_Penha_em_novembro_de_2018_%28cropped_2%29.jpg",
      link: "https://xavier-noticias.vercel.app",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Borrachayt",
      role: "Empreendedor Digital",
      image: "https://via.placeholder.com/100",
      content:
        "Trabalhar com Bolinha foi uma experiência excepcional. Ele desenvolveu um site de classificados altamente funcional e intuitivo que superou todas as minhas expectativas. Sua atenção aos detalhes e comprometimento com a qualidade são incomparáveis.",
    },
    {
      id: 2,
      name: "Plaggxz",
      role: "Dono de E-commerce",
      image: "https://via.placeholder.com/100",
      content:
        "A criação da minha loja virtual com integração ao Mercado Pago foi um sucesso graças ao Bolinha. Sua expertise técnica e abordagem profissional facilitaram todo o processo. O resultado final é uma plataforma robusta e fácil de usar que tem impulsionado minhas vendas.",
    },
  ];

  return (
    <ChakraProvider>
      <Box
        bg={colorMode === "light" ? "gray.50" : "gray.900"}
        minH="100vh"
        color={textColor}
        transition="background-color 0.2s"
      >
        {/* Navbar */}
        <Flex
          as="nav"
          p={6}
          alignItems="center"
          bg={navBgColor}
          boxShadow="lg"
          transition="background-color 0.2s"
        >
          <Heading size="lg" ml={5} color={navTextColor}>
            Bolinha's Portfolio
          </Heading>
          <Spacer />
          <HStack spacing={5} mr={5}>
            <Button leftIcon={<MdLanguage />} variant="ghost" colorScheme="teal">
              EN/PT
            </Button>
            <Switch
              colorScheme="teal"
              isChecked={isDark}
              onChange={toggleColorMode}
              aria-label="Toggle color mode"
            />
          </HStack>
        </Flex>

        {/* Hero Section */}
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          bgGradient={heroBgGradient}
          py={20}
          position="relative"
          overflow="hidden"
          color="white"
          transition="background 0.2s"
        >
          <Container maxW="container.xl">
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={10}
              alignItems="center"
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h1"
                  size="4xl"
                  mb={5}
                  fontWeight="extrabold"
                  lineHeight="1.2"
                >
                  Fullstack Developer Extraordinário
                </Heading>
                <Text fontSize="2xl" mb={8}>
                  Desenvolvedor com 6 anos de experiência, explorando desde o low level
                  até o desenvolvimento de games. Bolinha já fez de tudo!
                </Text>
                <Button size="lg" colorScheme="teal" variant="solid">
                  Saiba Mais
                </Button>
              </Box>
              {/* Hero Image */}
              <Box display={{ base: "none", md: "block" }}>
                <Image
                  src="https://media1.tenor.com/m/dlzYGThHPRwAAAAC/cat-nerd.gif"
                  alt="Hero Image"
                  borderRadius="md"
                  as={motion.img}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </Box>
            </Grid>
          </Container>
          {/* Decorative Elements */}
          <Circle
            size="300px"
            bg="teal.600"
            opacity="0.3"
            position="absolute"
            top="-100px"
            left="-100px"
            as={motion.div}
            animate={{ scale: [0.8, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          />
          <Square
            size="200px"
            bg="blue.400"
            opacity="0.5"
            position="absolute"
            bottom="-50px"
            right="-50px"
            as={motion.div}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          />
        </Box>

        {/* Sobre Mim Section */}
        <Container
          maxW="container.lg"
          mb={20}
          mt={20}
          p={6}
          position="relative"
          overflow="hidden"
        >
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Sobre Mim
            </Heading>
            <Text fontSize="xl" lineHeight="1.7">
              Olá! Eu sou o Bolinha, um desenvolvedor fullstack com experiência em
              diversas tecnologias, incluindo desenvolvimento de cheats para jogos, game
              development, projetos web e muito mais. Eu adoro explorar todos os níveis da
              programação, do low level ao high level, e estou sempre pronto para novos
              desafios.
            </Text>
            <Wrap spacing="20px">
              <WrapItem>
                <Avatar
                  name="Bolinha"
                  src="https://cdns-images.dzcdn.net/images/cover/7b8a5edb3107c985ff36fc020245f84a/0x1900-000000-80-0-0.jpg"
                  size="xl"
                />
              </WrapItem>
              <WrapItem>
                <Badge colorScheme="green" fontSize="1em" p={2}>
                  Fullstack Developer
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge colorScheme="blue" fontSize="1em" p={2}>
                  Game Developer
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge colorScheme="purple" fontSize="1em" p={2}>
                  Low Level Programmer
                </Badge>
              </WrapItem>
            </Wrap>
            {/* Accordion */}
            <Accordion allowToggle w="full">
              {/* Removido Formação Acadêmica */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Experiência Profissional
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Mais de 6 anos de experiência trabalhando em projetos de diferentes
                  escalas, desde startups até grandes empresas.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Projetos Notáveis
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Contribuição significativa em projetos open-source e soluções inovadoras
                  no campo de tecnologia.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
          {/* Random Shape for Decoration */}
          <Circle
            size="150px"
            bg="orange.400"
            opacity="0.2"
            position="absolute"
            bottom="-50px"
            left="-30px"
            as={motion.div}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          />
        </Container>

        <Divider borderColor={dividerColor} />

        {/* Serviços Section */}
        <Container
          maxW="container.xl"
          mt={20}
          mb={20}
          p={6}
          position="relative"
          overflow="hidden"
        >
          <VStack spacing={10} align="start">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Nossos Serviços
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              <Box
                p={5}
                shadow="2xl"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={borderColor}
                bg={bgColor}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Icon as={FaLaptopCode} w={10} h={10} color={iconColor} mb={4} />
                <Heading as="h3" size="lg" mb={4} color={iconColor}>
                  Desenvolvimento Web
                </Heading>
                <Text mb={4}>
                  Criação de sites responsivos, dinâmicos e interativos com as mais
                  recentes tecnologias, proporcionando experiências excepcionais para os
                  usuários.
                </Text>
                <Button size="sm" colorScheme="teal" variant="outline">
                  Saiba Mais
                </Button>
              </Box>
              <Box
                p={5}
                shadow="2xl"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={borderColor}
                bg={bgColor}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Icon as={FaMobileAlt} w={10} h={10} color={iconColor} mb={4} />
                <Heading as="h3" size="lg" mb={4} color={iconColor}>
                  Desenvolvimento Mobile
                </Heading>
                <Text mb={4}>
                  Aplicativos mobile nativos e híbridos, focando na melhor performance e
                  usabilidade para alcançar seus objetivos e atender as necessidades dos
                  usuários.
                </Text>
                <Button size="sm" colorScheme="teal" variant="outline">
                  Saiba Mais
                </Button>
              </Box>
              <Box
                p={5}
                shadow="2xl"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={borderColor}
                bg={bgColor}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Icon as={FaTools} w={10} h={10} color={iconColor} mb={4} />
                <Heading as="h3" size="lg" mb={4} color={iconColor}>
                  Soluções Personalizadas
                </Heading>
                <Text mb={4}>
                  Desenvolvimento de software sob medida para atender às necessidades
                  específicas de cada cliente, com soluções personalizadas que ajudam a
                  alcançar metas de negócios.
                </Text>
                <Button size="sm" colorScheme="teal" variant="outline">
                  Saiba Mais
                </Button>
              </Box>
            </SimpleGrid>
          </VStack>
          {/* Random Decorative Elements */}
          <Square
            size="100px"
            bg="purple.400"
            opacity="0.2"
            position="absolute"
            top="-30px"
            right="-30px"
            as={motion.div}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
          />
        </Container>

        <Divider borderColor={dividerColor} mb={10} />

        {/* Habilidades Section */}
        <Container maxW="container.xl" mt={20} mb={20} p={6}>
          <VStack spacing={10} align="start">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Habilidades
            </Heading>
            <Text fontSize="xl" lineHeight="1.7">
              Aqui estão algumas das habilidades técnicas que possuo e o nível de
              proficiência em cada uma.
            </Text>
            <Stack spacing={5} w="full">
              <Box>
                <Text fontWeight="bold">JavaScript</Text>
                <Progress colorScheme="teal" size="md" value={90} />
              </Box>
              <Box>
                <Text fontWeight="bold">React</Text>
                <Progress colorScheme="blue" size="md" value={85} />
              </Box>
              <Box>
                <Text fontWeight="bold">Node.js</Text>
                <Progress colorScheme="green" size="md" value={80} />
              </Box>
              <Box>
                <Text fontWeight="bold">Python</Text>
                <Progress colorScheme="yellow" size="md" value={75} />
              </Box>
              <Box>
                <Text fontWeight="bold">C++</Text>
                <Progress colorScheme="purple" size="md" value={70} />
              </Box>
            </Stack>
          </VStack>
        </Container>

        <Divider borderColor={dividerColor} mb={10} />

        {/* Projetos Section */}
        <Container maxW="container.xl" mt={20} mb={20} p={6}>
          <VStack spacing={10} align="start">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Projetos Recentes
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
              {projects.map((project) => (
                <Box
                  key={project.id}
                  p={5}
                  shadow="2xl"
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={borderColor}
                  bg={bgColor}
                  as={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heading as="h3" size="md" mb={2} color={iconColor}>
                    {project.title}
                  </Heading>
                  <Text mb={4}>{project.description}</Text>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    variant="solid"
                    as={Link}
                    href={project.link}
                    isExternal
                  >
                    Ver o Projeto
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>

        <Divider borderColor={dividerColor} mb={10} />

        {/* Depoimentos Section */}
        <Container maxW="container.xl" mt={20} mb={20} p={6}>
          <VStack spacing={10} align="center">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Depoimentos
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
              {testimonials.map((testimonial) => (
                <Box
                  key={testimonial.id}
                  p={8}
                  shadow="lg"
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={borderColor}
                  bg={bgColor}
                  position="relative"
                  as={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    as={FaQuoteLeft}
                    w={8}
                    h={8}
                    color="teal.500"
                    position="absolute"
                    top={4}
                    left={4}
                  />
                  <Text fontSize="lg" mb={6} mt={4}>
                    "{testimonial.content}"
                  </Text>
                  <HStack spacing={4} mt={6}>
                    <Avatar src={testimonial.image} name={testimonial.name} />
                    <Box>
                      <Text fontWeight="bold">{testimonial.name}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {testimonial.role}
                      </Text>
                    </Box>
                  </HStack>
                  <Icon
                    as={FaQuoteRight}
                    w={8}
                    h={8}
                    color="teal.500"
                    position="absolute"
                    bottom={4}
                    right={4}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>

        <Divider borderColor={dividerColor} mb={10} />

        {/* Blog Section */}
        <Container maxW="container.xl" mt={20} mb={20} p={6}>
          <VStack spacing={10} align="start">
            <Heading as="h2" size="xl" fontWeight="extrabold">
              Últimos Posts no Blog
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
              {blogPosts.map((post) => (
                <Box
                  key={post.id}
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  bg={bgColor}
                  borderColor={borderColor}
                  as={motion.div}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heading as="h3" size="md" mb={2}>
                    {post.title}
                  </Heading>
                  <Text mb={4}>{post.summary}</Text>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    variant="link"
                    onClick={() => setSelectedPost(post)}
                  >
                    Leia Mais
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>

        {/* Modal for Blog Post */}
        {selectedPost && (
          <Modal isOpen={selectedPost !== null} onClose={() => setSelectedPost(null)}>
            <ModalOverlay />
            <ModalContent bg={modalBgColor} color={textColor}>
              <ModalHeader>{selectedPost.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>{selectedPost.content}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={() => setSelectedPost(null)}>
                  Fechar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        <Divider borderColor={dividerColor} mb={10} />

        {/* Contato Section */}
        <Container maxW="container.xl" mb={20} p={6}>
          <VStack spacing={5} align="center">
            <Heading as="h2" size="xl" fontWeight="extrabold" textAlign="center">
              Contato
            </Heading>
            <Text fontSize="lg" textAlign="center">
              Estou disponível para novos desafios e colaborações. Você pode me contatar
              através do WhatsApp, Discord ou Email.
            </Text>
            <HStack spacing={6} mt={8}>
              <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                size="lg"
                leftIcon={<Icon as={FaWhatsapp} />}
                colorScheme="whatsapp"
                variant="solid"
                as={Link}
                href="https://wa.me/5541988337240"
                isExternal
              >
                WhatsApp
              </Button>
              <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                size="lg"
                leftIcon={<Icon as={FaDiscord} />}
                colorScheme="purple"
                variant="solid"
                as={Link}
                href="https://discordapp.com/users/bolinhay_t"
                isExternal
              >
                Discord
              </Button>
              <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                size="lg"
                leftIcon={<Icon as={FiMail} />}
                colorScheme="blue"
                variant="solid"
                as={Link}
                href="mailto:bolinhacanal2010@gmail.com"
                isExternal
              >
                Email
              </Button>
              <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                size="lg"
                leftIcon={<Icon as={FaGithub} />}
                colorScheme="gray"
                variant="solid"
                as={Link}
                href="https://github.com/bolinhadev"
                isExternal
              >
                GitHub
              </Button>
            </HStack>
          </VStack>
        </Container>

        {/* Footer */}
        <Box
          bg={colorMode === "light" ? "gray.200" : "gray.800"}
          py={10}
          transition="background-color 0.2s"
        >
          <Container maxW="container.xl">
            <Text textAlign="center">
              © {new Date().getFullYear()} Bolinha. Todos os direitos reservados.
            </Text>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
