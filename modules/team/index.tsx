"use client";

import { variantGeneral } from "@/animate/variantGeneral";
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

export function PageTeam() {
  const TeamCard = ({ teaminfo }: any) => {
    return (
      <Box>
        <Image
          mb="md"
          radius="md"
          h={{ base: 200, lg: 400 }}
          src={
            "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Text size="sm" fw={600}>
          Ragini Upadhayay
        </Text>
        <Text size="md" fw={600} c="brand.6">
          President
        </Text>
        <Text size="xs" fw={600} opacity={0.5}>
          Visual Artist, Former Chancellor of Nepal Academy of Fine Arts.
        </Text>
      </Box>
    );
  };

  return (
    <>
      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
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
            <Text size="2rem" fw={600} c="gray.0" hiddenFrom="lg">
              OUR TEAMS
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - ABOUT
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0">
                  Dedicated to making a positive and lasting impact on the lives
                  of individuals and communities.{" "}
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
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
            <TeamCard />
            <TeamCard />
            <Box visibleFrom="lg" />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
