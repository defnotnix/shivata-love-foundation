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
import { campaignEducation, campaignWomen } from "./campaign";

export default function PageCampaign() {
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
          <Container size="xl" pt={160} pb={{ base: 64, lg: 160 }}>
            <Text size="6rem" fw={600} c="gray.0" visibleFrom="lg">
              OUR CAMPAIGNS
            </Text>
            <Text size="3rem" fw={600} c="gray.0" hiddenFrom="lg">
              OUR
              <br /> CAMPAIGNS
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - CAMPAIGNS
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0">
                  An overview of our campaigns in different sectors.
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
        <Container size="xl" py={{ base: 64, lg: 100 }}>
          <Stack gap="4rem">
            <div>
              <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                <Text size="3rem" fw={600}>
                  Women
                  <br />
                  Empowerment
                </Text>
                <Text
                  ta="right"
                  size="2rem"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  visibleFrom="lg"
                >
                  Building a Future Where
                  <br /> Women Thrive with Equality,
                  <br /> Opportunity, and Empowerment
                </Text>

                <Text
                  ta="left"
                  size="sm"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  hiddenFrom="lg"
                >
                  Building a Future Where Women Thrive with Equality,
                  Opportunity, and Empowerment
                </Text>
              </SimpleGrid>
            </div>
          </Stack>

          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            {campaignWomen.map((campaign: any, index: number) => (
              <Box my="xl" key={index}>
                <Image
                  h={{ base: 400, lg: 600 }}
                  radius="xl"
                  src={campaign.image}
                />
                <Grid mt="md">
                  <Grid.Col span={{ base: 12, lg: 8 }}>
                    <Text size="xl" lh="sm" fw={600}>
                      {campaign.title}
                    </Text>
                    <Group mt="sm">
                      <Text size="xs" c="brand.6" fw={600}>
                        {campaign.date}
                      </Text>
                      <Text size="xs">{campaign.location}</Text>
                    </Group>
                  </Grid.Col>
                </Grid>
              </Box>
            ))}
          </SimpleGrid>
        </Container>

        <Container size="xl" pb={100}>
          <Stack gap="4rem">
            <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
              <Text size="3rem" fw={600}>
                Students
                <br />& Education
              </Text>
              <Text
                ta={{ base: "left", lg: "right" }}
                size="2rem"
                fw={600}
                opacity={0.5}
                c="brand.6"
                visibleFrom="lg"
              >
                Building a Future Where
                <br />
                Women Thrive with Equality,
                <br />
                Opportunity, and Empowerment
              </Text>
              <Text
                ta={{ base: "left", lg: "right" }}
                size="sm"
                fw={600}
                opacity={0.5}
                c="brand.6"
                hiddenFrom="lg"
              >
                Building a Future Where Women Thrive with Equality, Opportunity,
                and Empowerment
              </Text>
            </SimpleGrid>
          </Stack>

          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            {campaignEducation.map((campaign: any, index: number) => (
              <Box my="xl" key={index}>
                <Image
                  h={{ base: 400, lg: 600 }}
                  radius="xl"
                  src={campaign.image}
                />
                <Grid mt="md">
                  <Grid.Col span={{ base: 12, lg: 8 }}>
                    <Text size="xl" lh="sm" fw={600}>
                      {campaign.title}
                    </Text>
                    <Group mt="sm">
                      <Text size="xs" c="brand.6" fw={600}>
                        {campaign.date}
                      </Text>
                      <Text size="xs">{campaign.location}</Text>
                    </Group>
                  </Grid.Col>
                </Grid>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
