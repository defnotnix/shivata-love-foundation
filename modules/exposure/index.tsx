"use client";

import { variantGeneral } from "@/animate/variantGeneral";
import {
  Anchor,
  Box,
  Button,
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
import { news, videos } from "./data";
import { useRouter } from "next/navigation";

export default function PageMedia() {
  const Router = useRouter();

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
              MEDIA EXPOSURE
            </Text>
            <Text size="3rem" fw={600} c="gray.0" hiddenFrom="lg">
              MEDIA EXPOSURE
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - EXPOSURE
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0">
                  "Stories of resilience and success — moments where our mission
                  resonated across platforms, amplifying the voices of those we
                  empower.
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
          <Stack gap="4rem">
            <div>
              <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                <Text size="3rem" fw={600}>
                  Video
                  <br />
                  Highlights
                </Text>
                <Text
                  ta="right"
                  size="2rem"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  visibleFrom="lg"
                >
                  Stories of Change Captured on Film
                  <br />
                  Witness the journeys, voices, and impact
                  <br /> through our video storytelling.
                </Text>

                <Text
                  ta="left"
                  size="sm"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  hiddenFrom="lg"
                >
                  Stories of Change Captured on Film — witness the journeys,
                  voices, and impact through our video storytelling.
                </Text>
              </SimpleGrid>
            </div>
          </Stack>

          <SimpleGrid cols={{ base: 1, lg: 2 }} my="xl">
            {videos.map((video: any, index: number) => (
              <Box key={index}>
                <iframe
                  width="100%"
                  height="400"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={100}>
          <Stack gap="4rem">
            <div>
              <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                <Text size="3rem" fw={600}>
                  News
                  <br />
                  Highlights
                </Text>
                <Text
                  ta="right"
                  size="2rem"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  visibleFrom="lg"
                >
                  Sharing Our Impact with the World
                  <br />
                  Featured stories, and media coverage
                  <br /> from national and global outlets.
                </Text>

                <Text
                  ta="left"
                  size="sm"
                  fw={600}
                  opacity={0.5}
                  c="brand.6"
                  hiddenFrom="lg"
                >
                  Sharing Our Impact with the World — featured stories,
                  interviews, and media coverage from national and global
                  outlets.
                </Text>
              </SimpleGrid>
            </div>
          </Stack>

          <SimpleGrid cols={{ base: 1, lg: 3 }} my="xl">
            {news.map((nn: any, index: number) => (
              <Paper key={index} withBorder p="xl">
                <Stack>
                  <Text size="xs" c="brand.5">
                    {nn.source}
                  </Text>
                  <Text size="1.5rem" fw={700}>
                    {nn.title}
                  </Text>
                  <Text size="xs" opacity={0.5}>
                    {nn.brief}
                  </Text>
                  <Anchor size="xs">{nn.url}</Anchor>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
