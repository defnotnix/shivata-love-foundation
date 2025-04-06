"use client";

import { variantGeneral } from "@/animate/variantGeneral";
import {
  Box,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import { motion } from "framer-motion";

export function PageCampaign() {
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
          <Container size="xl" py={160}>
            <Text size="6rem" fw={600} c="gray.0">
              OUR CAMPAIGNS
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - CAMPAIGNS
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
          <Stack gap="4rem">
            <div>
              <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                <Text size="3rem" fw={600}>
                  Women
                  <br />
                  Empowerment
                </Text>
                <Text ta="right" size="2rem" fw={600} opacity={0.5} c="brand.6">
                  Building a Future Where
                  <br /> Women Thrive with Equality,
                  <br /> Opportunity, and Empowerment
                </Text>
              </SimpleGrid>
            </div>
          </Stack>

          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            <Box my="xl">
              <Image
                h="600px"
                radius="xl"
                src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Grid mt="md">
                <Grid.Col span={{ base: 12, lg: 8 }}>
                  <Text size="xl" lh="sm" fw={600}>
                    Shivata Love Foundation Nepal organized a Mithila Art
                    Exhibition
                  </Text>
                  <Group mt="sm">
                    <Text size="xs" c="brand.6" fw={600}>
                      August 18, 2024
                    </Text>
                    <Text size="xs">Babarmahal, Kathmandu</Text>
                  </Group>
                </Grid.Col>
              </Grid>
            </Box>
            <Box my="xl">
              <Image
                h="600px"
                radius="xl"
                src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Grid mt="md">
                <Grid.Col span={{ base: 12, lg: 8 }}>
                  <Text size="xl" lh="sm" fw={600}>
                    Shivata Love Foundation Nepal organized a Mithila Art
                    Exhibition
                  </Text>

                  <Group mt="sm">
                    <Text size="xs" c="brand.6" fw={600}>
                      August 18, 2024
                    </Text>
                    <Text size="xs">Babarmahal, Kathmandu</Text>
                  </Group>
                </Grid.Col>
              </Grid>
            </Box>
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
