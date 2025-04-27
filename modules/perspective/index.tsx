"use client";
import {
  Anchor,
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import { motion } from "framer-motion";
import { variantGeneral } from "@/animate/variantGeneral";

import imgPerspectiveWomen from "@/assets/image/perspective_women.png";
import imgStudent from "@/assets/image/student.png";
import imgLine from "@/assets/line.png";
import imgMithila from "@/assets/campaigns/mithilaart_2.jpg";
import imgHealth from "@/assets/image/health.png";

export default function PagePerspective() {
  return (
    <>
      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={{ base: 100, lg: 160 }}>
          <Text size="6rem" fw={600} visibleFrom="lg">
            THE PERSPECTIVE
          </Text>
          <Text size="3rem" fw={600} hiddenFrom="lg">
            THE
            <br /> PERSPECTIVE
          </Text>
          <Grid mt="md">
            <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
              <Text size="sm">HOME - PERSPECTIVE</Text>
            </Grid.Col>
            <Grid.Col span={{ lg: 3 }}>
              <Text size="sm">
                Dedicated to making a positive and lasting impact on the lives
                of individuals and communities.{" "}
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Paper
          radius={0}
          bg="linear-gradient(70deg,var(--mantine-color-brand-6),var(--mantine-color-brand-7))"
        >
          <Container size="xl" py={{ base: 100, lg: 160 }}>
            <Text size="sm" c="gray.0" tt="uppercase">
              PERSPECTIVE I - <b>Women Empowerment</b>
            </Text>

            <Grid>
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Text size="3rem" fw={600} mt="sm" c="gray.0" visibleFrom="lg">
                  Committed to Uplifting Women and Creating a Future of Equality
                  and Opportunity.
                </Text>
                <Text size="2rem" fw={600} mt="sm" c="gray.0" hiddenFrom="lg">
                  Committed to Uplifting Women and Creating a Future of Equality
                  and Opportunity.
                </Text>
                <Divider opacity={0.3} my="xl" />
                <Text size="sm" c="gray.0">
                  Empowering women is the key to creating stronger, more
                  resilient societies. By fostering education, economic
                  independence, and leadership opportunities, we enable women to
                  drive meaningful change in their communities.
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 3 }} mt="xl">
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      01
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Empower Communities
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Strengthening communities by empowering women through
                      education, skill development, and financial independence,
                      ensuring a sustainable and inclusive future.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      02
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Empower Women
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Providing women with the tools, resources, and
                      opportunities they need to break barriers, lead with
                      confidence, and achieve economic and social independence.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      03
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Awareness
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Raising awareness on gender equality, women’s rights, and
                      the importance of inclusivity, ensuring a more equitable
                      society for future generations.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, lg: 5 }}
                pos="relative"
                visibleFrom="lg"
              >
                <Image
                  fit="contain"
                  mt={-150}
                  h="calc(100% + 50px)"
                  src={imgPerspectiveWomen.src}
                />

                <Image
                  fit="contain"
                  mt={-150}
                  h="calc(100% + 50px)"
                  src={imgLine.src}
                  style={{
                    position: "absolute",
                    top: 160,
                  }}
                />
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
        <Paper
          radius={0}
          bg="linear-gradient(70deg,var(--mantine-color-brand-1),var(--mantine-color-brand-2))"
        >
          <Container size="xl" py={160}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 5 }} pos="relative" pt={200}>
                <Image
                  fit="contain"
                  mt={-200}
                  h="calc(100% + 50px)"
                  src={imgStudent.src}
                />

                <Image
                  fit="contain"
                  w="90%"
                  mt={-200}
                  h="calc(100% + 50px)"
                  src={imgLine.src}
                  style={{
                    position: "absolute",
                    top: 160,
                  }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Text size="sm" tt="uppercase">
                  PERSPECTIVE II - <b>Education For All</b>
                </Text>

                <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
                  Committed to Providing Students & Underprivileged Childrens
                  with Access to Quality Education and Brighter Opportunities.
                </Text>
                <Text size="2rem" fw={600} mt="sm" hiddenFrom="lg">
                  Committed to Providing Students & Underprivileged Childrens
                  with Access to Quality Education and Brighter Opportunities.
                </Text>
                <Divider opacity={0.3} my="xl" />
                <Text size="sm">
                  Empowering women is the key to creating stronger, more
                  resilient societies. By fostering education, economic
                  independence, and leadership opportunities, we enable women to
                  drive meaningful change in their communities.
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 3 }} mt="xl">
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      01
                    </Text>
                    <Text size="xl" fw={600}>
                      Scholarships
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Providing merit- and need-based scholarships to
                      underprivileged children, ensuring they have the financial
                      support to pursue quality education without barriers.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      02
                    </Text>
                    <Text size="xl" fw={600}>
                      Opportunities
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Creating pathways for children to access better schools,
                      mentorship programs, and career-building resources,
                      empowering them to achieve their dreams.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      03
                    </Text>
                    <Text size="xl" fw={600}>
                      Collective Aid
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Offering financial, material, and academic support to
                      ensure every child has the necessary tools—books,
                      uniforms, and learning resources—to succeed in their
                      education.
                    </Text>
                  </Stack>
                </SimpleGrid>
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
        <Paper
          radius={0}
          bg="linear-gradient(70deg,var(--mantine-color-brand-6),var(--mantine-color-brand-7))"
        >
          <Container size="xl" py={{ base: 100, lg: 160 }}>
            <Text size="sm" c="gray.0" tt="uppercase">
              PERSPECTIVE III - <b>Art & Culture</b>
            </Text>

            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Text size="3rem" fw={600} mt="sm" c="gray.0" visibleFrom="lg">
                  Committed to Preserving Heritage, Promoting Creativity, and
                  Revitalizing Cultural Traditions.
                </Text>
                <Text size="2rem" fw={600} mt="sm" c="gray.0" hiddenFrom="lg">
                  Committed to Preserving Heritage, Promoting Creativity, and
                  Revitalizing Cultural Traditions.
                </Text>
                <Divider opacity={0.3} my="xl" />
                <Text size="sm" c="gray.0">
                  Art and culture are the soul of a society, reflecting its
                  history, values, and identity. By supporting artistic
                  expression, cultural programs, and heritage conservation, we
                  ensure that traditions thrive for future generations.
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 3 }} mt="xl">
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      01
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Promotions
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Encouraging artistic talent and cultural heritage through
                      exhibitions, performances, and initiatives that celebrate
                      diverse art forms and traditions.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      02
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Opportunities
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Creating platforms for artists, performers, and cultural
                      practitioners to showcase their work, innovate, and
                      connect with wider audiences.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600} c="gray.0">
                      03
                    </Text>
                    <Text size="xl" fw={600} c="gray.0">
                      Reforms
                    </Text>
                    <Text size="sm" c="gray.0" opacity={0.5}>
                      Advocating for policies and initiatives that protect
                      cultural heritage, support artistic growth, and integrate
                      traditional art forms into modern society.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, lg: 5 }}
                pos="relative"
                visibleFrom="lg"
              >
                <Image
                  fit="contain"
                  mt={-100}
                  h="calc(100% + 50px)"
                  src={imgMithila.src}
                />

                <Image
                  fit="contain"
                  mt={-100}
                  h="calc(100% + 50px)"
                  src={imgLine.src}
                  style={{
                    position: "absolute",
                    top: 160,
                  }}
                />

                <Text size="xs" c="gray.0" ta="center" mt="xl">
                  Ragini Upadhyaya Mam
                </Text>
                <Text size="xs" c="gray.0" ta="center" opacity={0.5}>
                  Women Art Workshop with padam shree artist. 8th Augst 2024
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
        <Paper
          radius={0}
          bg="linear-gradient(70deg,var(--mantine-color-brand-1),var(--mantine-color-brand-2))"
        >
          <Container size="xl" py={160}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 6 }} pos="relative" pt={200}>
                <Image
                  fit="contain"
                  mt={-200}
                  h="calc(100% + 50px)"
                  src={imgHealth.src}
                />

                <Image
                  fit="contain"
                  w="90%"
                  mt={-200}
                  h="calc(100% + 50px)"
                  src={imgLine.src}
                  style={{
                    position: "absolute",
                    top: 160,
                  }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Text size="sm" tt="uppercase">
                  PERSPECTIVE IV - <b>Healthcare for All</b>
                </Text>

                <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
                  Committed to Enhancing Healthcare Access and Well-Being Across
                  Nepal.
                </Text>
                <Text size="2rem" fw={600} mt="sm" hiddenFrom="lg">
                  Committed to Enhancing Healthcare Access and Well-Being Across
                  Nepal.
                </Text>
                <Divider opacity={0.3} my="xl" />
                <Text size="sm">
                  Quality healthcare is a fundamental right, not a privilege. By
                  providing medical aid, essential resources, and awareness
                  programs, we strive to improve health outcomes and ensure that
                  communities receive the care they deserve.
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 3 }} mt="xl">
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      01
                    </Text>
                    <Text size="xl" fw={600}>
                      Medical Aid
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Supporting hospitals and clinics with essential equipment,
                      medicines, and financial aid to strengthen healthcare
                      infrastructure in underserved areas.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      02
                    </Text>
                    <Text size="xl" fw={600}>
                      Accessibility
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Providing financial assistance and healthcare support to
                      individuals and families who lack access to proper medical
                      care.
                    </Text>
                  </Stack>
                  <Stack gap="xs">
                    <Text size="sm" fw={600}>
                      03
                    </Text>
                    <Text size="xl" fw={600}>
                      Awareness
                    </Text>
                    <Text size="sm" opacity={0.5}>
                      Educating communities on preventive healthcare, disease
                      management, and the importance of regular medical checkups
                      for a healthier future.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
      </motion.section>
    </>
  );
}
