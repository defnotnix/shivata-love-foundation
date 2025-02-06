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

export function PageDonate() {
  return (
    <>
      <section>
        <Paper
          radius={0}
          bg="linear-gradient(800deg, #E55454 0%, #7F2F2F 100%)"
        >
          <Container size="xl" py={160}>
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
                <Text size="3rem" fw={600}>
                  We will provide you a “Certificate of Donation” for every
                  successful donation.
                </Text>
                <Text size="sm">
                  Shivata love foundation Nepal needs your help to get a kick
                  start with its activities donation are welcome and necessary
                  for activities to make place, therefore you can help by making
                  a donation to the bank account listed below any amount can
                  make a difference.{" "}
                </Text>
              </SimpleGrid>
            </div>

            <Text size="3rem" fw={600} opacity={0.2}>
              Donation Address
            </Text>

            <SimpleGrid cols={{ base: 1, lg: 2 }}>
              <div>
                <Text size="2rem" fw={600}>
                  NMB Bank
                </Text>

                <Stack gap="xs" mt="xl">
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Account Name
                    </Text>
                    <Text size="md" fw={600}>
                      : Shivata Love Foundation Nepal
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Account Number
                    </Text>
                    <Text size="md" fw={600}>
                      : 0010053651600015
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Bank Details{" "}
                    </Text>
                    <Text size="md" fw={600}>
                      : NMB Bank Ltd, Babar Mahal, Kathmandu, Nepal
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      BIC/SWIFT{" "}
                    </Text>
                    <Text size="md" fw={600}>
                      : NMBBNPKA
                    </Text>
                  </Group>
                </Stack>
              </div>

              <div>
                <Text size="2rem" fw={600}>
                  Sanima Bank
                </Text>

                <Stack gap="xs" mt="xl">
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Account Name
                    </Text>
                    <Text size="md" fw={600}>
                      : Shivata Love Foundation Nepal
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Account Number
                    </Text>
                    <Text size="md" fw={600}>
                      : 0010053651600015
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      Bank Details{" "}
                    </Text>
                    <Text size="md" fw={600}>
                      : NMB Bank Ltd, Babar Mahal, Kathmandu, Nepal
                    </Text>
                  </Group>
                  <Group>
                    <Text size="md" w={150} fw={600}>
                      BIC/SWIFT{" "}
                    </Text>
                    <Text size="md" fw={600}>
                      : NMBBNPKA
                    </Text>
                  </Group>
                </Stack>
              </div>
            </SimpleGrid>
          </Stack>
        </Container>
      </section>
    </>
  );
}
