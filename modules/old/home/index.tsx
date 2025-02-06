"use client";

import React from "react";

//mantine
import { Anchor, Avatar, AvatarGroup, Box, Button, Container, Grid, Group, Image, Paper, SimpleGrid, Stack, Text, ThemeIcon } from "@mantine/core"
//icons
import { ArrowRight, Quotes } from "@phosphor-icons/react"
//styles
import classes from "./home.module.css"

export function PageHome() {
    return (
        <>
            <section>
                <Container size="xl">

                    <Box h="50vh" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <Text size="6rem" fw={600}>
                            INSPIRING HOPE<br />
                            THROUGH ACTION
                        </Text>
                        <Grid mt="md">
                            <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                                <Anchor c="dark.9" td="underline">
                                    LEARN MORE
                                </Anchor>
                            </Grid.Col>
                            <Grid.Col span={{ lg: 3 }}>
                                <Text size="sm">
                                    Dedicated to making a positive and lasting impact on the lives of individuals and communities.
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Box>


                </Container>

                <Grid gutter={0}>
                    <Grid.Col span={{ base: 12, lg: 6 }}>
                        <Image h="50vh" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, lg: 4 }}>
                        <Paper h="50vh" bg="brand.1" p={{ base: 0, lg: "5rem" }} style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                            <Stack>
                                <Text size="2rem" fw={600}>
                                    A Heartwarming Start to 2025 with Special Children
                                </Text>
                                <Text size="sm">
                                    Welcoming 2025 with joy at the Handicapped School in Khokna, Lalitpur, celebrating special children with love and support.
                                </Text>
                                <Avatar.Group>
                                    <Avatar src="image.png" />
                                    <Avatar src="image.png" />
                                    <Avatar src="image.png" />
                                    <Avatar>+5</Avatar>
                                </Avatar.Group>

                                <Text size="sm">
                                    Art supplies for 50+ Students
                                </Text>

                            </Stack>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, lg: 2 }}>
                        <Image h="50vh" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Grid.Col>
                </Grid>
            </section>

            <section>
                <Container size="xl" py={100}>
                    <Grid gutter="xl" align="center">
                        <Grid.Col span={{ base: 12, lg: 5 }}>
                            <Image h="600px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Text mt="md" size="sm" w={300}>
                                Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque .
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
                            <Stack gap="xl">
                                <Text size="3rem" fw={600}>
                                    Through partnerships with local organizations, we work collaboratively to maximize reach.
                                </Text>
                                <Text size="sm">
                                    Through partnerships with local organizations, we work collaboratively to maximize reach. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ullamcorper sit amet risus nullam eget. Magna fringilla urna porttitor  rhoncus dolor purus non. Fermentum dui faucibus in ornare quam. Integer  quis auctor elit sed vulputate mi sit. Viverra orci sagittis eu  volutpat. Ac placerat vestibulum lectus mauris ultrices. Vitae et leo  duis ut diam quam nulla porttitor.
                                    <br /><br />
                                    Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus. Nibh mauris cursus mattis molestie a iaculis at erat. Iaculis  urna id volutpat lacus laoreet non curabitur gravida arcu.
                                </Text>

                                <Group gap={0}>
                                    <Button
                                        leftSection={<ArrowRight />}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        About
                                    </Button>
                                    <Button
                                        leftSection={<ArrowRight />}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        Campaigns
                                    </Button>
                                    <Button
                                        leftSection={<ArrowRight />}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        Beneficiaries
                                    </Button>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            <section>
                <Paper bg="brand.1" radius={0} py={100}>
                    <Container size="xl">
                        <Text size="md" c="brand.6" fw={600}>
                            Impact
                        </Text>
                        <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }} >
                            <Text size="3rem" fw={600}>
                                Real Changes Through<br />
                                Collective Action
                            </Text>
                            <Text size="sm">
                                Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus. Nibh mauris cursus mattis molestie a iaculis at erat. Iaculis  urna id volutpat lacus laoreet non curabitur gravida arcu.
                            </Text>
                        </SimpleGrid>

                        <Grid my="54">
                            <Grid.Col span={{ base: 12, lg: 7 }}>
                                <Image h="500px" radius="xl" src="http  s://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, lg: 5 }}>
                                <Image h="500px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </Grid.Col>
                        </Grid>

                        <SimpleGrid mt="md" cols={{ base: 1, lg: 2 }}>
                            <Text size="sm">
                                Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet   interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus. Nibh mauris cursus mattis molestie a iaculis at erat. Iaculis  urna id volutpat lacus laoreet non curabitur gravida arcu.
                            </Text>
                            <SimpleGrid cols={{ lg: 3 }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}>
                                    <Text size="3rem" fw={600}>
                                        20+
                                    </Text>
                                    <Text size="sm">
                                        Lives Impacted
                                    </Text>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}>
                                    <Text size="3rem" fw={600}>
                                        20+
                                    </Text>
                                    <Text size="sm">
                                        Lives Impacted
                                    </Text>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}>
                                    <Text size="3rem" fw={600}>
                                        20+
                                    </Text>
                                    <Text size="sm">
                                        Lives Impacted
                                    </Text>
                                </div>
                            </SimpleGrid>
                        </SimpleGrid>

                    </Container>
                </Paper>
            </section>

            <section>
                <Container size="xl" py={100}>
                    <Text size="md" c="brand.6" fw={600}>
                        Vision & Mission
                    </Text>
                    <Grid mt="sm">
                        <Grid.Col span={{ base: 12, lg: 8 }}>
                            <Text size="2.5rem" lh="3rem" fw={600}>
                                Creating a  Sustainable World Where Communities Thrive Through Equal Opportunities,Compassionate Action, and Collaborative Efforts for Positive Change
                            </Text>
                        </Grid.Col>
                    </Grid>

                    <Grid my={54}>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Text size="md" fw={600}>
                                Our Mission
                            </Text>
                            <Text size="sm">
                                Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus.
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Text size="md" fw={600}>
                                Our Mission
                            </Text>
                            <Text size="sm">
                                Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus.
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Group>
                                <Anchor c="dark.9" td="underline">
                                    LEARN MORE
                                </Anchor>
                                <Anchor c="dark.9" td="underline">
                                    OUR PERSPECTIVE
                                </Anchor>
                            </Group>
                        </Grid.Col>
                    </Grid>

                    <Grid>
                        <Grid.Col span={{ base: 12, lg: 3 }}>
                            <Image h="300px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Image h="400px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 2 }} pos="relative" pt="xl">

                            <Text pos="absolute" size="3rem" c="brand.6">"</Text>
                            <Stack gap="xs">
                                <Text size="sm" mt={"xl"} fw={600}>
                                    Love is our key to prevent
                                    humanity’s collapse.
                                </Text>
                                <Text size="xs" opacity={.5}>
                                    Shivata Upadhyay Grela
                                </Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 3 }}>
                            <Image h="300px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            <section>
                <Container size="xl" py={100}>
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
                        <Box my="xl">
                            <Image h="600px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Grid mt="md">
                                <Grid.Col span={{ base: 12, lg: 8 }}>
                                    <Text size="xl" lh="sm" fw={600}>
                                        Shivata Love Foundation
                                        Nepal organized a Mithila Art Exhibition
                                    </Text>
                                    <Group mt="sm">
                                        <Text size="xs" c="brand.6" fw={600}>
                                            August 18, 2024
                                        </Text>
                                        <Text size="xs">
                                            Babarmahal, Kathmandu
                                        </Text>
                                    </Group>
                                </Grid.Col>
                            </Grid>
                        </Box>
                        <Box my="xl">
                            <Image h="600px" radius="xl" src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Grid mt="md">
                                <Grid.Col span={{ base: 12, lg: 8 }}>
                                    <Text size="xl" lh="sm" fw={600}>
                                        Shivata Love Foundation
                                        Nepal organized a Mithila Art Exhibition
                                    </Text>

                                    <Group mt="sm">
                                        <Text size="xs" c="brand.6" fw={600}>
                                            August 18, 2024
                                        </Text>
                                        <Text size="xs">
                                            Babarmahal, Kathmandu
                                        </Text>
                                    </Group>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </SimpleGrid>

                </Container>
            </section>

            <section>
                <Paper py={100}
                    bg="linear-gradient(90deg,#E55454,#7F2F2F)"
                    pos="relative"
                    style={{
                        overflow: "hidden"
                    }}
                >

                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            height: 100,
                            width: "100vw",
                            background: 'var(--mantine-color-red-6)',

                            left: "20%",
                            transform: "rotate(40deg)"
                        }}
                    />

                    <Container size="xl">
                        <Text size="md" fw={600} c="gray.0" opacity={.5}>
                            Join the Cause
                        </Text>
                        <Grid mt="sm">
                            <Grid.Col span={{ base: 12, lg: 8 }}>
                                <Text size="2.5rem" fw={600} c="gray.0">
                                    Join Our Campaigns and Be<br /> a Part of Positive Change
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, lg: 4 }} style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>
                                <Anchor ta="right" td="underline" c="gray.0">
                                    DONATE FOR A CAUSE
                                </Anchor>
                            </Grid.Col>
                        </Grid>

                    </Container>
                </Paper>
            </section>

            <section>
                <Container size="xl" py={100}>
                    <Text size="md" c="brand.6" fw={600}>
                        TESTIMONIALS
                    </Text>
                    <Grid mt="sm">
                        <Grid.Col span={{ base: 12, lg: 8 }}>
                            <Text size="2.5rem" fw={600}>
                                Hear from our supports & beneficiaries.
                            </Text>
                        </Grid.Col>
                    </Grid>

                    <SimpleGrid cols={{ base: 1, lg: 3 }} my="xl">
                        <Paper px="xl" py="3rem" pos="relative">
                            <ThemeIcon color="brand.6" pos="absolute" top={0} right={0} size="xl">
                                <Quotes weight="fill" />
                            </ThemeIcon>
                            <Stack gap="md">
                                <Avatar />
                                <div>
                                    <Text size="md" fw={600}>
                                        Rachel S.
                                    </Text>
                                    <Text size="sm" c="brand.7">
                                        Director, CG Group
                                    </Text>
                                </div>
                                <Text size="sm" opacity={.7}>
                                    Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus.
                                </Text>
                            </Stack>

                        </Paper>

                        <Paper px="xl" py="3rem" pos="relative">
                            <ThemeIcon color="brand.6" pos="absolute" top={0} right={0} size="xl">
                                <Quotes weight="fill" />
                            </ThemeIcon>
                            <Stack gap="md">
                                <Avatar />
                                <div>
                                    <Text size="md" fw={600}>
                                        Rachel S.
                                    </Text>
                                    <Text size="sm" c="brand.7">
                                        Director, CG Group
                                    </Text>
                                </div>
                                <Text size="sm" opacity={.7}>
                                    Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus.
                                </Text>
                            </Stack>

                        </Paper>

                        <Paper px="xl" py="3rem" pos="relative">
                            <ThemeIcon color="brand.6" pos="absolute" top={0} right={0} size="xl">
                                <Quotes weight="fill" />
                            </ThemeIcon>
                            <Stack gap="md">
                                <Avatar />
                                <div>
                                    <Text size="md" fw={600}>
                                        Rachel S.
                                    </Text>
                                    <Text size="sm" c="brand.7">
                                        Director, CG Group
                                    </Text>
                                </div>
                                <Text size="sm" opacity={.7}>
                                    Quis vel eros donec ac odio  tempor. Leo vel orci porta non pulvinar neque laoreet suspendisse  interdum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu  cursus.
                                </Text>
                            </Stack>

                        </Paper>
                    </SimpleGrid>
                </Container>
            </section>

        </>
    )
}