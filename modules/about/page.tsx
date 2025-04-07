"use client";

import {
  Anchor,
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";

import imgTeam from "@/assets/image/org_team.jpg";
import imgTeam2 from "@/assets/image/org_team2.jpg";
import imgShivata from "@/assets/image/shivata.jpg";

import imgBlob from "@/assets/image/Vector.png";
import imgPerson from "@/assets/image/Subtract.png";
import imgPie from "@/assets/image/pie50.png";

import { categories, prevention, symptoms } from "./data";

import { motion } from "framer-motion";
import { variantGeneral } from "@/animate/variantGeneral";
import { artworks } from "@/assets/artworks";

export function PageAbout() {
  return (
    <>
      <motion.section
        variants={variantGeneral}
        initial="initial"
        animate="visible"
        viewport={{ once: true }}
        style={{
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Paper
          radius={0}
          bg="linear-gradient(800deg, #E55454 0%, #7F2F2F 100%)"
        >
          <Container size="xl" py={{ base: 100, lg: 160 }}>
            <Text size="6rem" fw={600} c="gray.0" visibleFrom="lg">
              ABOUT
              <br />
              THE ORGANIZATION
            </Text>
            <Text size="2rem" fw={600} c="gray.0" hiddenFrom="lg">
              ABOUT
              <br />
              THE ORGANIZATION
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - ABOUT
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0" visibleFrom="lg">
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
        animate="visible"
        viewport={{ once: true }}
      >
        <Container size="xl" py={100}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Text size="md" c="brand.6" fw={600}>
                About the Organization
              </Text>
              <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
                Committed to Transforming Lives and Building Sustainable,
                Resilient Communities Worldwide.
              </Text>
              <Text size="2rem" fw={600} mt="sm" hiddenFrom="lg">
                Committed to Transforming Lives and Building Sustainable,
                Resilient Communities Worldwide.
              </Text>
              <Grid>
                <Grid.Col
                  span={{ base: 12, lg: 10 }}
                  offset={{ lg: 2 }}
                  pos="relative"
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "30%",
                      height: 100,
                      width: "100vw",
                      background: "var(--mantine-color-red-6)",
                      zIndex: -1,
                      left: "-90vw",
                      transform: "rotate(10deg)",
                    }}
                  />

                  <Image
                    h={{ base: 300, lg: 500 }}
                    radius="lg"
                    mt="4rem"
                    src={imgTeam.src}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }} pt={{ base: 0, lg: 100 }}>
              <Image
                radius="lg"
                mt={{ base: 0, lg: "4rem" }}
                src={imgTeam2.src}
              />

              <Text size="sm" mt="xl">
                Shivata Love Foundation Nepal (SLFN) commemorates the life and
                legacy of Shivata Upadhayay Grela, promoting unconditional love
                and global thinking through its support for neglected women and
                girls. Founded in Belgium and Nepal, SLFN raises awareness about
                the meningitis B vaccine, which could have saved Shivata’s life,
                and provides scholarships to underprivileged girls in Nepal and
                small grants to those who have fallen out of the school system
                in Belgium. The foundation has also contributed to disaster
                relief efforts, including the rescue of flood victims.
                <br />
                <br />
                Through partnerships with local organizations, SLFN works
                collaboratively to maximize its impact, ensuring that support
                reaches those in need. By fostering education, empowerment, and
                resilience, the foundation helps women and girls build brighter
                futures. Its commitment to compassionate action continues to
                create lasting change, reinforcing the values Shivata stood for.{" "}
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
        <Container size="xl" py={100}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Stack>
                <Text size="sm">15+ Members</Text>
                <Avatar.Group>
                  <Avatar src="image.png" />
                  <Avatar src="image.png" />
                  <Avatar src="image.png" />
                  <Avatar>+5</Avatar>
                </Avatar.Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
                Committed to Transforming Lives and Building Sustainable,
                Resilient Communities Worldwide.
              </Text>

              <Text size="2rem" fw={600} mt="sm" hiddenFrom="lg">
                Committed to Transforming Lives and Building Sustainable,
                Resilient Communities Worldwide.
              </Text>

              <Text size="sm" mt="xl">
                Shivata Love Foundation Nepal (SLFN) commemorates the life and
                legacy of Shivata Upadhayay Grela, promoting unconditional love
                and global thinking through its support for neglected women and
                girls. Founded in Belgium and Nepal, SLFN raises awareness about
                the meningitis B vaccine, which could have saved Shivata’s life,
                and provides scholarships to underprivileged girls in Nepal and
                small grants to those who have fallen out of the school system
                in Belgium. The foundation has also contributed to disaster
                relief efforts, including the rescue of flood victims.
                <br />
                <br />
                Through partnerships with local organizations, SLFN works
                collaboratively to maximize its impact, ensuring that support
                reaches those in need. By fostering education, empowerment, and
                resilience, the foundation helps women and girls build brighter
                futures. Its commitment to compassionate action continues to
                create lasting change, reinforcing the values Shivata stood for.{" "}
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }} offset={{ base: 0, lg: 1 }}>
              <Image
                radius="lg"
                src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
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
        <Paper radius={0} bg="brand.2">
          <Container size="xl" py={160}>
            <Text size="md" c="brand.6" fw={600}>
              About the Organization
            </Text>
            <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
              In the loving memory
              <br /> of Shivata Upadhayaya Grela{" "}
            </Text>
            <Text size="2rem" fw={600} mt="sm" hiddenFrom="lg">
              In the loving memory
              <br /> of Shivata Upadhayaya Grela{" "}
            </Text>

            <Grid py="xl">
              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Image mb="xl" h={600} radius="lg" src={imgShivata.src} />

                <Text size="2rem" fw={600}>
                  Shivata Upadhyay Grela
                </Text>
                <Text size="xl" fw={600}>
                  1995-2016
                </Text>

                <Text size="sm" mt="sm">
                  Shivata Love Foundation Nepal (SLFN) honors the life and
                  legacy of Shivata Upadhayay Grela. Founded in Belgium and
                  Nepal, this non-profit organization follows Shivata’s example
                  by promoting unconditional love and global awareness.
                </Text>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
                <Text size="sm" fw={600} c="brand.7">
                  THE STORY
                </Text>
                <Text size="sm" mt="sm">
                  Shivata Upadhayay Grela was born on April 27, 1995, and grew
                  up with a deep love for Nepal, carrying her identity with
                  immense pride. She studied at The British School and later
                  pursued higher education, shaping herself into a compassionate
                  and artistic individual. Her passion for social work was
                  evident early on—despite her success in modeling, she
                  selflessly donated her earnings to NGOs, ensuring they could
                  make a meaningful impact. A naturally gifted artist, she often
                  kept her creations hidden due to self-doubt, yet she saw art
                  as a reflection of the soul. Shivata spoke frequently about
                  life and death, believing that death was merely a transition,
                  a thought that later became a source of strength for her loved
                  ones.
                </Text>

                <Text mt="xl" size="sm" fw={600} c="brand.7">
                  SHIVATA & ART
                </Text>
                <Text size="sm" mt="sm">
                  Shivata Upadhayay Grela’s life was deeply intertwined with
                  art, a gift she inherited from her mother, Ragini Upadhayay, a
                  celebrated artist. Growing up surrounded by creativity,
                  Shivata admired her mother’s work but struggled with
                  self-doubt, often hiding her own paintings, uncertain of their
                  worth. Yet, art became her silent language, reflecting her
                  thoughts on life, death, and impermanence—themes she
                  frequently pondebrand. A profound moment in her journey was
                  witnessing thousands of butterflies on Hitler’s wall, a
                  haunting symbol of fleeting beauty that deeply resonated with
                  her. Over time, Shivata became more than just a daughter; she
                  became a teacher to her mother, guiding her to embrace life’s
                  uncertainties with acceptance, often telling her, “Take it
                  easy, Mom.” Her tragic passing in 2016 due to meningitis B
                  left an irreplaceable void, but through her art, compassion,
                  and the mission of the Shivata Love Foundation Nepal, she
                  continues to inspire, proving that love and creativity
                  transcend even death.{" "}
                </Text>

                <Text mt="xl" size="sm" fw={600} c="brand.7">
                  DEATH
                </Text>
                <Text size="sm" mt="sm">
                  In 2016, Shivata tragically contracted meningitis B, a
                  bacterial infection that proved fatal despite her being
                  vaccinated. Her passing left a deep void in the lives of those
                  who loved her, but her legacy endures through the Shivata Love
                  Foundation Nepal (SLFN), which continues her mission of
                  helping neglected women and girls. Her story is not just one
                  of loss but of love, giving, and caring. Through her art,
                  generosity, and vision, she left behind a lasting message:
                  death is just a process of life & freedom, and love is the
                  true legacy we leave behind.{" "}
                </Text>
              </Grid.Col>
            </Grid>

            <Space h={100} />

            <Text size="md" c="brand.6" fw={600}>
              Artworks
            </Text>
            <Text size="3rem" fw={600} mt="sm" visibleFrom="lg">
              Some artworks
              <br /> of Shivata Upadhayaya Grela{" "}
            </Text>

            <SimpleGrid cols={{ base: 1, lg: 3 }} mt="xl" spacing="xs">
              <Stack gap="xs" pt={{ base: 0, lg: 50 }}>
                {artworks.slice(0, 2).map((artwork: any, index: number) => (
                  <Stack key={index} gap="xs">
                    <Image src={artwork.image.src} />
                    <Text size="sm" fw={600} opacity={0.5}>
                      {artwork.label}
                    </Text>
                  </Stack>
                ))}
              </Stack>
              <Stack gap="xs">
                {artworks.slice(2, 4).map((artwork: any, index: number) => (
                  <Stack key={index} gap="xs">
                    <Image src={artwork.image.src} />
                    <Text size="sm" fw={600} opacity={0.5}>
                      {artwork.label}
                    </Text>
                  </Stack>
                ))}
              </Stack>
              <Stack gap="xs" pt={{ base: 0, lg: 32 }}>
                {artworks.slice(5, 7).map((artwork: any, index: number) => (
                  <Stack key={index} gap="xs">
                    <Image src={artwork.image.src} />
                    <Text size="sm" fw={600} opacity={0.5}>
                      {artwork.label}
                    </Text>
                  </Stack>
                ))}
              </Stack>
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
        <Container size="xl" py={100}>
          <Text size="md" c="brand.6" fw={600} ta="center">
            Awareness
          </Text>
          <Text size="3rem" fw={600} mt="sm" ta="center">
            Meningitis Awareness{" "}
          </Text>

          <Grid gutter={0} mt="100">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Stack gap="xl">
                <Paper
                  h={180}
                  bg="brand.2"
                  p="lg"
                  radius="lg"
                  style={{
                    transform: "rotate(5deg)",
                  }}
                >
                  <Text size="md" ta="center" fw={600}>
                    Reasons
                  </Text>

                  <SimpleGrid cols={3} mt="sm">
                    <div>
                      <Center>
                        <Avatar
                          src="https://static.vecteezy.com/system/resources/previews/040/323/541/non_2x/ai-generated-bacteria-isolated-on-transparent-background-free-png.png"
                          bg="gray.0"
                          size={64}
                          mb="sm"
                        />
                      </Center>
                      <Text size="sm" ta="center">
                        Bacteria
                      </Text>
                    </div>
                    <div>
                      <Center>
                        <Avatar
                          src="https://www.vbivaccines.com/wp-content/uploads/2021/02/virus.png"
                          bg="gray.0"
                          size={64}
                          mb="sm"
                        />
                      </Center>
                      <Text size="sm" ta="center">
                        Virus
                      </Text>
                    </div>
                    <div>
                      <Center>
                        <Avatar
                          src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-bacterial-and-fungal-virus-illustration-png-image_4746415.jpg"
                          bg="gray.0"
                          size={64}
                          mb="sm"
                        />
                      </Center>
                      <Text size="sm" ta="center">
                        Fungi
                      </Text>
                    </div>
                  </SimpleGrid>
                </Paper>

                <Paper
                  radius="lg"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src="https://www.youtube.com/embed/FuhFp22YbpM?si=kvWn4bBJ8bxH94dW"
                      title="YouTube video player"
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                </Paper>
                <Paper
                  bg="brand.2"
                  p="lg"
                  radius="lg"
                  style={{
                    transform: "rotate(-5deg)",
                  }}
                >
                  <Grid py={32}>
                    <Grid.Col span={3}>
                      <Image src={imgPie.src} />
                    </Grid.Col>
                    <Grid.Col span={9}>
                      <Text size="xl" lh="xs" fw={600}>
                        50 % Deaths
                        <br />
                        without treatment.{" "}
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Paper>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }} pos="relative">
              <Image height={400} mt={110} fit="contain" src={imgBlob.src} />
              <Image
                fit="contain"
                left="10%"
                height={500}
                pos="absolute"
                top={0}
                src={imgPerson.src}
                style={{
                  mixBlendMode: "multiply",
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 2 }} offset={{ base: 0, lg: 1 }}>
              <Text size="md" ta="center" fw={600}>
                Symptoms
              </Text>

              <SimpleGrid cols={2}>
                {symptoms.map((symptominfo: any, index: number) => (
                  <div key={index}>
                    <Center>
                      <Avatar
                        p="sm"
                        src={symptominfo.img}
                        bg="gray.0"
                        size="xl"
                        mb="sm"
                      />
                    </Center>
                    <Text size="xs" ta="center" fw={600}>
                      {symptominfo.label}
                    </Text>
                  </div>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>

        <Container size="sm">
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
            <Text size="3rem" fw={600} mt="sm" ta="right" visibleFrom="lg">
              Meningitis Prevention{" "}
            </Text>
            <Text size="2rem" fw={600} mt="sm" ta="center" hiddenFrom="lg">
              Meningitis Prevention{" "}
            </Text>
            <Text size="sm" mt="xl">
              Prevent bacterial meningitis by getting vaccinated, practicing
              good hygiene, avoiding close contact with sick individuals, and
              maintaining a strong immune system.
            </Text>
          </SimpleGrid>
        </Container>
        <Container size="md">
          <SimpleGrid cols={{ base: 4, lg: 8 }} my="xl">
            {prevention.map((preventionData: any, index: number) => (
              <div key={index}>
                <Center>
                  <Avatar
                    p="sm"
                    src={preventionData.img}
                    bg="brand.2"
                    size="xl"
                    mb="sm"
                  />
                </Center>
                <Text size="xs" ta="center" fw={600}>
                  {preventionData.label}
                </Text>
              </div>
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
        <Container size="xl" py={100}>
          <Text size="md" c="brand.6" fw={600}>
            PERSPECTIVE
          </Text>
          <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
            <Text size="3rem" fw={600} visibleFrom="lg">
              Focusing on Key Areas to Drive Meaningful Change.
            </Text>
            <Text size="2rem" fw={600} hiddenFrom="lg">
              Focusing on Key Areas to Drive Meaningful Change.
            </Text>
            <Group justify="flex-end">
              <Anchor c="dark.9" td="underline">
                READ OUR PERSPECTIVE
              </Anchor>
            </Group>
          </SimpleGrid>

          <SimpleGrid spacing="xs" my="54" cols={{ base: 1, lg: 4 }}>
            {categories.map((info: any, index: number) => (
              <Paper p="xl" bg="brand.2" radius="sm" key={index}>
                <Avatar src={info.icon} bg="brand.6" size="sm" mb="sm" />

                <Text size="lg" fw={600} mb="xs">
                  {info.label}
                </Text>
                <Text size="sm" opacity={0.7}>
                  {info.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
