"use client";

import React from "react";
import { useRouter } from "next/navigation";
//mantine
import {
  Anchor,
  Avatar,
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
  ThemeIcon,
} from "@mantine/core";
//icons
import { ArrowRight, Quotes } from "@phosphor-icons/react";
//motion
import { motion } from "framer-motion";
//assets
import imgMarker from "@/assets/image/circleMarker.png";
import imgTeam from "@/assets/image/org_team.jpg";
import imgMithilaArt from "@/assets/campaigns/mithilaart.jpg";
import imgMithilaArt2 from "@/assets/campaigns/mithilaart_2.jpg";
import imgScholarshipChina from "@/assets/campaigns/scholarshipChina.jpg";
import imgArtsupplies from "@/assets/campaigns/artsuppliesschool.jpg";
import { variantGeneral } from "@/animate/variantGeneral";
import imgSchool from "@/assets/image/school.jpg";
import {
  campaignArtAndCulture,
  campaignEducation,
  campaignWomen,
} from "../campaign/campaign";

export default function PageHome() {
  const Router = useRouter();

  return (
    <>
      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
      >
        <Container size="xl">
          <Box
            pt="xl"
            px="md"
            h="50vh"
            pos="relative"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Text size="6rem" fw={600} visibleFrom="lg">
              INSPIRING HOPE
              <br />
              THROUGH ACTION
            </Text>

            <Text size="3rem" fw={600} hiddenFrom="lg">
              INSPIRING HOPE
              <br />
              THROUGH ACTION
            </Text>

            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Anchor
                  c="dark.9"
                  td="underline"
                  onClick={() => {
                    Router.push("/about");
                  }}
                >
                  LEARN MORE
                </Anchor>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="md">
                  Dedicated to making a positive and lasting impact on the lives
                  of individuals and communities.
                </Text>
              </Grid.Col>
            </Grid>
          </Box>

          <Image
            visibleFrom="lg"
            src={imgMarker.src}
            pos="absolute"
            h={300}
            w={300}
            fit="contain"
            style={{
              top: "16%",
              left: "45%",
              zIndex: -1,
            }}
          />

          <Image
            hiddenFrom="lg"
            src={imgMarker.src}
            pos="absolute"
            h={200}
            w={200}
            fit="contain"
            style={{
              top: "10%",
              left: "10%",
              zIndex: -1,
            }}
          />
        </Container>

        <Grid gutter={0}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Image h="50vh" src={imgSchool.src} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 3 }}>
            <Paper
              h="50vh"
              bg="brand.3"
              p={{ base: "xl", lg: "5rem" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack>
                <Text size="2rem" fw={600} visibleFrom="lg">
                  A Heartwarming Start to 2025 with Special Children
                </Text>
                <Text size="xl" lh="xs" fw={600} hiddenFrom="lg">
                  A Heartwarming Start to 2025 with Special Children
                </Text>
                <Text size="sm">
                  Welcoming 2025 with joy at the Handicapped School in Khokna,
                  Lalitpur, celebrating special children with love and support.
                </Text>
                <Avatar.Group>
                  <Avatar
                    size="lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-AEXt0h1oxwIWrnwOX0O_c2WzIQOZKeL-g&s"
                  />
                  <Avatar
                    size="lg"
                    src="https://i.pinimg.com/474x/42/01/38/420138fb6553717152e8cccf0baa4760.jpg"
                  />
                  <Avatar
                    size="lg"
                    src="https://assets.rumsan.net/clients/recordnepal/QmW3bvZY8zcu2puWfSAnCm32JhHRUxYWJExVxnY3w3Vfwy"
                  />
                  <Avatar size="lg">+5</Avatar>
                </Avatar.Group>

                <Text size="sm">Art supplies for 50+ Students</Text>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 3 }}>
            <Image h="50vh" src={imgMithilaArt.src} />
          </Grid.Col>
        </Grid>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={100}>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, lg: 5 }} visibleFrom="lg">
              <Image h="600px" radius="xl" src={imgTeam.src} />
              <Text mt="md" size="sm" w={300}>
                Sadharan Sabha 2080 between Shivata Love Foundation Members.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
              <Stack gap="xl">
                <Text size="3rem" fw={600} visibleFrom="lg">
                  Through partnerships with local organizations, we work
                  collaboratively to maximize reach.
                </Text>
                <Text size="2rem" fw={600} hiddenFrom="lg">
                  Through partnerships with local organizations, we work
                  collaboratively to maximize reach.
                </Text>
                <Text size="sm">
                  Through partnerships with local organizations, we work
                  collaboratively to maximize our collective impact and broaden
                  community outreach. These alliances help us address real-world
                  needs by combining resources and expertise. Together, we build
                  scalable solutions that make a lasting difference. Whether
                  through shared initiatives, training programs, or awareness
                  campaigns, our goal is to foster growth, inclusion, and
                  sustainability within the communities we serve.
                  <br />
                  <br />
                  By working alongside trusted local entities, we enhance
                  engagement, boost efficiency, and deliver value at every
                  level. Our unified efforts enable responsive action, improved
                  accessibility, and stronger community ties. From planning to
                  execution, we ensure that our approach remains
                  people-centered, solution-driven, and results-oriented.
                </Text>

                <Group gap={0}>
                  <Button
                    leftSection={<ArrowRight />}
                    variant="subtle"
                    color="dark"
                    onClick={() => {
                      Router.push("/about");
                    }}
                  >
                    About
                  </Button>
                  <Button
                    leftSection={<ArrowRight />}
                    variant="subtle"
                    color="dark"
                    onClick={() => {
                      Router.push("/campaign");
                    }}
                  >
                    Campaigns
                  </Button>
                  <Button
                    leftSection={<ArrowRight />}
                    variant="subtle"
                    color="dark"
                    onClick={() => {
                      Router.push("/beneficiaries");
                    }}
                  >
                    Beneficiaries
                  </Button>
                </Group>
              </Stack>
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
        <Paper bg="brand.2" radius={0} py={{ base: 64, lg: 100 }}>
          <Container size="xl">
            <Text size="md" c="brand.6" fw={600}>
              Impact
            </Text>
            <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
              <Text size="3rem" fw={600} visibleFrom="lg">
                Real Changes Through
                <br />
                Collective Action
              </Text>
              <Text size="2rem" fw={600} hiddenFrom="lg">
                Real Changes Through
                <br />
                Collective Action
              </Text>
              <Text size="sm">
                We believe real change comes from the power of collective
                action. By uniting individuals, communities, and organizations
                with a shared vision, we can create lasting impact. Together, we
                break down barriers, uplift the underserved, and pave the way
                for a more equitable future. Through collaboration, every effort
                contributes to a larger movement of positive change.
              </Text>
            </SimpleGrid>

            <Grid my="54" visibleFrom="lg">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Paper
                  radius="xl"
                  h="500px"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    height="510px"
                    src="https://www.youtube.com/embed/UG7X2qN3S7w?si=Rx9n44sKnqjcZvOh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Image h="500px" radius="xl" src={imgMithilaArt.src} />
              </Grid.Col>
            </Grid>

            <Grid my="54" hiddenFrom="lg">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Paper
                  radius="xl"
                  h="200px"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    height="210px"
                    src="https://www.youtube.com/embed/UG7X2qN3S7w?si=Rx9n44sKnqjcZvOh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Image h="300px" radius="xl" src={imgMithilaArt.src} />
              </Grid.Col>
            </Grid>

            <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
              <Text size="sm">
                We’ve provided hundreds of scholarships, supported dozens of
                awareness programs, and assisted thousands through financial aid
                and outreach. These numbers reflect the lasting difference we’re
                making in communities.
              </Text>
              <SimpleGrid cols={{ base: 3, lg: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Text size="3rem" fw={600}>
                    20+
                  </Text>
                  <Text size="sm">Lives Impacted</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Text size="3rem" fw={600}>
                    20+
                  </Text>
                  <Text size="sm">Womens Helped</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Text size="3rem" fw={600}>
                    20+
                  </Text>
                  <Text size="sm">Communities Helped</Text>
                </div>
              </SimpleGrid>
            </SimpleGrid>
          </Container>
        </Paper>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={{ base: 64, lg: 100 }}>
          <Text size="md" c="brand.6" fw={600}>
            Vision & Mission
          </Text>
          <Grid mt="sm">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Text size="2.5rem" lh="3rem" fw={600} visibleFrom="lg">
                Creating a Sustainable World Where Communities Thrive Through
                Equal Opportunities,Compassionate Action, and Collaborative
                Efforts for Positive Change
              </Text>

              <Text size="1.8rem" lh="2rem" fw={600} hiddenFrom="lg">
                Creating a Sustainable World Where Communities Thrive Through
                Equal Opportunities, Compassionate Action, and Collaborative
                Efforts for Positive Change
              </Text>
            </Grid.Col>
          </Grid>

          <Grid my={54}>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Text size="md" fw={600}>
                Our Vision
              </Text>
              <Text size="sm">
                At the Shivata Love Foundation Nepal, our vision is to create a
                world where every young girl, regardless of her background, has
                the opportunity to dream, achieve, and thrive. We envision a
                society where love, compassion, and education bridge the gap
                between privilege and poverty, and where every child can grow up
                with the tools and resources needed to build a better future.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Text size="md" fw={600}>
                Our Mission
              </Text>
              <Text size="sm">
                The Shivata Love Foundation Nepal (SLFN) is dedicated to
                empowering young people, especially girls, by providing
                opportunities for education, financial aid, and social support.
                Rooted in the motto “broad love and prosperity,” our mission is
                to spread unconditional love and global awareness through
                meaningful actions.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Group>
                <Anchor
                  c="brand.6"
                  td="underline"
                  onClick={() => {
                    Router.push("/about");
                  }}
                >
                  LEARN MORE
                </Anchor>
                <Anchor
                  c="brand.6"
                  td="underline"
                  onClick={() => {
                    Router.push("/perspective");
                  }}
                >
                  OUR PERSPECTIVE
                </Anchor>
              </Group>
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Image h="300px" radius="xl" src={imgScholarshipChina.src} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Image h="400px" radius="xl" src={imgMithilaArt2.src} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 2 }} pos="relative" pt="xl">
              <Text pos="absolute" size="3rem" c="brand.6">
                "
              </Text>
              <Stack gap="xs">
                <Text size="sm" mt={"xl"} fw={600}>
                  Love is our key to prevent humanity’s collapse.
                </Text>
                <Text size="xs" opacity={0.5}>
                  Shivata Upadhyay Grela
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Image h="300px" radius="xl" src={imgArtsupplies.src} />
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
        <Container size="xl" py={{ base: 32, lg: 100 }}>
          <Text size="md" c="brand.6" fw={600}>
            CAMPAIGNS
          </Text>
          <Grid mt="sm">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Text size="2.5rem" fw={600}>
                Stories of our Campaigns
              </Text>
            </Grid.Col>
          </Grid>

          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            {campaignArtAndCulture
              .slice(1, 2)
              .map((campaign: any, index: number) => (
                <Box my="xl" key={index}>
                  <Image
                    h={{ base: 400, lg: 600 }}
                    radius="xl"
                    src={campaign.image}
                  />
                  <Grid mt="md">
                    <Grid.Col span={{ base: 12, lg: 8 }}>
                      <Group mt="sm">
                        <Text size="xs" c="brand.6" fw={600}>
                          {campaign.date}
                        </Text>
                        <Text size="xs">{campaign.location}</Text>
                      </Group>
                      <Text size="xl" lh="sm" fw={600}>
                        {campaign.title}
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Box>
              ))}
            {campaignEducation
              .slice(0, 1)
              .map((campaign: any, index: number) => (
                <Box my="xl" key={index}>
                  <Image
                    h={{ base: 400, lg: 600 }}
                    radius="xl"
                    src={campaign.image}
                  />
                  <Grid mt="md">
                    <Grid.Col span={{ base: 12, lg: 8 }}>
                      <Group mt="sm">
                        <Text size="xs" c="brand.6" fw={600}>
                          {campaign.date}
                        </Text>
                        <Text size="xs">{campaign.location}</Text>
                      </Group>
                      <Text size="xl" lh="sm" fw={600}>
                        {campaign.title}
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Box>
              ))}
          </SimpleGrid>
        </Container>
      </motion.section>

      <motion.section
        variants={variantGeneral}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Paper
          py={{ base: 64, lg: 100 }}
          bg="linear-gradient(90deg,#E55454,#7F2F2F)"
          pos="relative"
          style={{
            overflow: "hidden",
          }}
        >
          <Box
            visibleFrom="lg"
            style={{
              position: "absolute",
              top: "50%",
              height: 100,
              width: "100vw",
              background: "var(--mantine-color-red-6)",

              left: "20%",
              transform: "rotate(40deg)",
            }}
          />

          <Container size="xl">
            <Text size="md" fw={600} c="gray.0" opacity={0.5}>
              Join the Cause
            </Text>
            <Grid mt="sm">
              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Text size="2.5rem" fw={600} c="gray.0" visibleFrom="lg">
                  Join Our Campaigns and Be
                  <br /> a Part of Positive Change
                </Text>
                <Text size="2rem" fw={600} c="gray.0" hiddenFrom="lg">
                  Join Our Campaigns and Be
                  <br /> a Part of Positive Change
                </Text>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, lg: 4 }}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Anchor
                  ta="right"
                  td="underline"
                  c="gray.0"
                  onClick={() => {
                    Router.push("/donate");
                  }}
                >
                  DONATE FOR A CAUSE
                </Anchor>
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
          <Text size="md" c="brand.6" fw={600}>
            TESTIMONIALS
          </Text>
          <Grid mt="sm">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Text size="2.5rem" fw={600} visibleFrom="lg">
                Hear from our supports & beneficiaries.
              </Text>
              <Text size="2rem" fw={600} hiddenFrom="lg">
                Hear from our supports & beneficiaries.
              </Text>
            </Grid.Col>
          </Grid>

          <SimpleGrid cols={{ base: 1, lg: 3 }} my="xl">
            <Paper px="xl" py="3rem" pos="relative">
              <ThemeIcon
                color="brand.6"
                pos="absolute"
                top={0}
                right={0}
                size="xl"
              >
                <Quotes weight="fill" />
              </ThemeIcon>
              <Stack gap="md">
                <Avatar />
                <div>
                  <Text size="md" fw={600}>
                    Aasha T.
                  </Text>
                  <Text size="sm" c="brand.7">
                    Student, Kathmandu
                  </Text>
                </div>
                <Text size="sm" opacity={0.7}>
                  Thanks to the Shivata Love Foundation, I was able to continue
                  my studies after my family's financial struggles. Their
                  support gave me a new hope and belief in myself.
                </Text>
              </Stack>
            </Paper>

            <Paper px="xl" py="3rem" pos="relative">
              <ThemeIcon
                color="brand.6"
                pos="absolute"
                top={0}
                right={0}
                size="xl"
              >
                <Quotes weight="fill" />
              </ThemeIcon>
              <Stack gap="md">
                <Avatar />
                <div>
                  <Text size="md" fw={600}>
                    Binita K.
                  </Text>
                  <Text size="sm" c="brand.7">
                    Young Entrepreneur, Pokhara
                  </Text>
                </div>
                <Text size="sm" opacity={0.7}>
                  I attended one of their social impact workshops and it changed
                  my perspective. Today, I run my own small business and mentor
                  other young girls in my village!
                </Text>
              </Stack>
            </Paper>

            <Paper px="xl" py="3rem" pos="relative">
              <ThemeIcon
                color="brand.6"
                pos="absolute"
                top={0}
                right={0}
                size="xl"
              >
                <Quotes weight="fill" />
              </ThemeIcon>
              <Stack gap="md">
                <Avatar />
                <div>
                  <Text size="md" fw={600}>
                    Suman P.
                  </Text>
                  <Text size="sm" c="brand.7">
                    Social Worker, Bharatpur
                  </Text>
                </div>
                <Text size="sm" opacity={0.7}>
                  Shivata Love Foundation is truly about compassion in action.
                  Through their financial support programs, we were able to
                  organize free health camps for underprivileged families.
                </Text>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
