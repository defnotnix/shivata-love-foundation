"use client";

import { variantGeneral } from "@/animate/variantGeneral";
import { team } from "@/assets/team";
import {
  Box,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";

import { motion } from "framer-motion";

const teamtop = [
  {
    name: "Ragini Upadhayay",
    position: "President, Founder",
    image: team.imgRagini.src,
  },
  {
    name: "Shivata Upadhyaya Grela",
    position: "Founder",
    image: team.imgShivata.src,
  },
];

const teams = [
  {
    name: "Mr. Jip Opdestip",
    position: "Representative - Netherlands",
    career: "",
    image: team.imgJip.src,
  },
  {
    name: "Mrs. Kriti Shrestha",
    position:
      "Koshi Province Representative, Shivata Love Foundation Nepal (SLFN)",
    career: "Founder/Director, Vogue Interiors Nepal",
    image: team.imgKriti.src,
  },
  {
    name: "Mr. Ram Pujan Thakur",
    position: "Secretary",
    career: "Assembly Member, Nepal Academy of Fine Art",
    image: team.imgRampujan.src,
  },
  {
    name: "Rajan Pandey",
    position: "Board Member",

    image: team.imgRajan.src,
  },
  {
    name: "Nitika Dhungana",
    position: "Board Member",
    image: team.imgNikita.src,
  },
  {
    name: "Erina Tamrakar",
    position: "Board Member",
    career: "Visual Artist/ Co-Founder at E-Art Nepal",
    image: team.imgErina.src,
  },
  {
    name: "Atul Koirala",
    position: "Board Member",
    career: "General Secretary of Sushil Koirala Memorial Foundation",
    image: team.imgAtul.src,
  },
  {
    name: "Ankur Dhungana",
    position: "Treasurer",
    career:
      "Managing Director at Solution of Nepal Engineering Consultancy Pvt.Ltd",
    image: team.imgAnkur.src,
  },
  {
    name: "Sangita Shrestha",
    position: "Board Member",
    career: "",
    image: team.imgSangita.src,
  },
];

export function PageTeam() {
  const TeamCard = ({ details }: any) => {
    return (
      <Box>
        <Image
          mb="md"
          radius="md"
          h={{ base: 200, lg: 400 }}
          src={details?.image || "https://via.placeholder.com/150"}
        />
        <Text size="sm" fw={600}>
          {details?.name}
        </Text>
        <Text size="md" fw={600} c="brand.6">
          {details?.position}
        </Text>
        <Text size="xs" fw={600} opacity={0.5}>
          {details?.career || "Board Member, Shivata Love Foundation"}
        </Text>
      </Box>
    );
  };

  return (
    <>
      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
      >
        <Paper
          radius={0}
          bg="linear-gradient(800deg, #E55454 0%, #7F2F2F 100%)"
        >
          <Container size="xl" py={{ base: 100, lg: 160 }}>
            <Text size="6rem" fw={600} c="gray.0" visibleFrom="lg">
              OUR TEAMS
            </Text>
            <Text size="3rem" fw={600} c="gray.0" hiddenFrom="lg">
              OUR
              <br /> TEAMS
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - TEAMS
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0">
                  We are a collective of artists, creators, and cultural
                  contributors from across Nepal, united by a shared commitment
                  to social impact.
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={100}>
          <Text size="md" c="brand.6" fw={600} ta="center">
            Members
          </Text>
          <Text size="3rem" fw={600} ta="center">
            Team Members
          </Text>

          <SimpleGrid cols={{ base: 2, lg: 4 }} py="xl">
            <Box visibleFrom="lg" />

            {teamtop.map((teaminfo: any, index: number) => (
              <TeamCard key={index} details={teaminfo} />
            ))}
            <Box visibleFrom="lg" />

            {teams.map((teaminfo: any, index: number) => (
              <TeamCard key={index} details={teaminfo} />
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
