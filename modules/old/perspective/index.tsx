"use client";
import { Anchor, Avatar, Box, Center, Container, Divider, Grid, Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";


export function PagePerspective() {
    return (
        <>
            <section>

                <Container size="xl" py={160}>
                    <Text size="6rem" fw={600} >
                        THE PERSPECTIVE
                    </Text>
                    <Grid mt="md">
                        <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                            <Text size="sm" >
                                HOME - ABOUT
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={{ lg: 3 }}>
                            <Text size="sm">
                                Dedicated to making a positive and lasting impact on the lives of individuals and communities.                                </Text>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            <section>
                <Paper
                    radius={0}
                    bg="brand.7"
                >
                    <Container size="xl" py={160}>
                        <Text size="sm" c="gray.0">
                            PERSPECTIVE I - Women Empowerment
                        </Text>

                        <Grid>
                            <Grid.Col span={{ base: 12, lg: 7 }}>
                                <Text size="3rem" fw={600} mt="sm" c="gray.0">
                                    Committed to Transforming Lives and Building Sustainable, Resilient Communities Worldwide.
                                </Text>
                                <Divider opacity={.3} my="xl" />
                                <Text size="sm" c="gray.0">
                                    Dedicated to making a positive and lasting impact on the lives of individuals and communities.
                                </Text>

                                <SimpleGrid cols={3} mt="xl">
                                    <Stack gap="xs">
                                        <Text size="sm" fw={600} c="gray.0">
                                            01
                                        </Text>
                                        <Text size="xl" fw={600} c="gray.0">
                                            Empower
                                            Communities
                                        </Text>
                                        <Text size="sm" c="gray.0" opacity={.5}>
                                            Dedicated to making a positive and lasting impact on the lives of individuals and communities.                                </Text>
                                    </Stack>
                                    <Stack gap="xs">
                                        <Text size="sm" fw={600} c="gray.0">
                                            01
                                        </Text>
                                        <Text size="xl" fw={600} c="gray.0">
                                            Empower
                                            Communities
                                        </Text>
                                        <Text size="sm" c="gray.0" opacity={.5}>
                                            Dedicated to making a positive and lasting impact on the lives of individuals and communities.                                </Text>
                                    </Stack>
                                    <Stack gap="xs">
                                        <Text size="sm" fw={600} c="gray.0">
                                            01
                                        </Text>
                                        <Text size="xl" fw={600} c="gray.0">
                                            Empower
                                            Communities
                                        </Text>
                                        <Text size="sm" c="gray.0" opacity={.5}>
                                            Dedicated to making a positive and lasting impact on the lives of individuals and communities.                                </Text>
                                    </Stack>
                                </SimpleGrid>
                            </Grid.Col>
                        </Grid>

                    </Container>
                </Paper>
            </section>
        </>
    )
}