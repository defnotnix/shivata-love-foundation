"use client";

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

import imgFoneQR from "@/assets/image/nicQR.png";

export default function PageDonate() {
  return (
    <>
      <section>
        <Paper
          radius={0}
          bg="linear-gradient(800deg, #E55454 0%, #7F2F2F 100%)"
        >
          <Container size="xl" py={{ base: 100, lg: 160 }}>
            <Text size="6rem" fw={600} c="gray.0" visibleFrom="lg">
              DONATIONS
            </Text>
            <Text size="2rem" fw={600} c="gray.0" hiddenFrom="lg">
              DONATIONS
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - DONATIONS
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
      </section>

      <section>
        <Container size="xl" py={100}>
          <Stack gap="4rem">
            <div>
              <Text size="md" c="brand.6" fw={600}>
                Support Our Cause
              </Text>
              <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                <Text size="2rem" fw={600} hiddenFrom="lg">
                  We will provide you a “Certificate of Donation” for every
                  successful donation.
                </Text>
                <Text size="3rem" fw={600} visibleFrom="lg">
                  We will provide you a “Certificate of Donation” for every
                  successful donation.
                </Text>
                <Text size="md">
                  Your donation to Shivata Love Foundation Nepal multiplies into
                  women's empowerment programs, children's education
                  initiatives, cultural preservation projects, and vital
                  healthcare services. Each contribution helps us create a
                  brighter, more equitable future across Nepal's communities.
                  Join us in making meaningful change possible.
                </Text>
              </SimpleGrid>
            </div>

            <Text size="3rem" fw={600} opacity={0.2} visibleFrom="lg">
              Donation Address
            </Text>
            <Text size="2rem" fw={600} opacity={0.2} hiddenFrom="lg">
              Donation Address
            </Text>

            <SimpleGrid cols={{ base: 1, lg: 2 }}>
              <div>
                <Text size="2rem" fw={600}>
                  Sanima Bank
                </Text>

                <Stack gap="xs" mt="xl">
                  <Group wrap="nowrap" align="flex-start">
                    <Text size="md" w={150} fw={600}>
                      Account Name
                    </Text>
                    <Text size="md" fw={600} w={{ base: "60%", lg: "auto" }}>
                      : Shivata Love Foundation Nepal
                    </Text>
                  </Group>
                  <Group wrap="nowrap" align="flex-start">
                    <Text size="md" w={150} fw={600}>
                      Account Number
                    </Text>
                    <Text size="md" fw={600} w={{ base: "60%", lg: "auto" }}>
                      : 076010010000413
                    </Text>
                  </Group>
                  <Group wrap="nowrap" align="flex-start">
                    <Text size="md" w={150} fw={600}>
                      Bank Details{" "}
                    </Text>
                    <Text size="md" fw={600} w={{ base: "60%", lg: "auto" }}>
                      : Sanima Bank Limited, Gatthaghar Branch, Nepal
                    </Text>
                  </Group>
                  <Group wrap="nowrap" align="flex-start">
                    <Text size="md" w={150} fw={600}>
                      BIC/SWIFT{" "}
                    </Text>
                    <Text size="md" fw={600} w={{ base: "60%", lg: "auto" }}>
                      : SNMANPKA
                    </Text>
                  </Group>
                </Stack>
              </div>

              <Group justify="flex-end">
                <Paper withBorder mt={{ base: 0, lg: -100 }}>
                  <Image w={300} src={imgFoneQR.src} />
                </Paper>
              </Group>
            </SimpleGrid>
          </Stack>
        </Container>
      </section>
    </>
  );
}
