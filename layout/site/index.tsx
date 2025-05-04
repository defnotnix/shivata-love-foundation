"use client";

import {
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Quotes } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const redBgPages = [
  "/about",
  "/team",
  "/campaigns",
  "/beneficiaries",
  "/donate",
];

export function LayoutSite({ children }: PropsWithChildren) {
  const Pathname = usePathname();
  const Router = useRouter();

  const [scroll, scrollTo] = useWindowScroll();

  const [opened, setOpened] = useDisclosure(false);

  return (
    <>
      <Box
        bg={scroll.y > 500 ? "rgba(247,237,237,.7)" : "rgba(0,0,0,0"}
        visibleFrom="lg"
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          backdropFilter: "blur(10px)",
          zIndex: 99,
        }}
      >
        <Container size="xl" py="xs">
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text
                onClick={() => {
                  Router.push("/");
                }}
                lh="xs"
                size="sm"
                fw={800}
                c={
                  scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "gray.0"
                      : "dark"
                    : "dark"
                }
              >
                SHIVATA LOVE
                <br />
                FOUNDATION
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Group justify="center" gap={0}>
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "brand"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/");
                  }}
                >
                  Home
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/about"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "brand"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/about");
                  }}
                >
                  About
                </Button>{" "}
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/team"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "brand"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/team");
                  }}
                >
                  Team
                </Button>{" "}
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/perspective"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "brand"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/perspective");
                  }}
                >
                  Perspective
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/campaigns"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "dark"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/campaigns");
                  }}
                >
                  Campaigns
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/beneficiaries"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "dark"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/beneficiaries");
                  }}
                >
                  Beneficiaries
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  c={
                    Pathname == "/exposure"
                      ? scroll.y < 500
                        ? redBgPages.includes(Pathname)
                          ? "gray.0"
                          : "dark"
                        : ""
                      : scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "rgba(255,255,255,.5)"
                        : "dark"
                      : "dark"
                  }
                  onClick={() => {
                    Router.push("/exposure");
                  }}
                >
                  Media Exposure
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Group justify="flex-end">
                <Text
                  style={{
                    cursor: "pointer",
                  }}
                  size="sm"
                  onClick={() => {
                    //@ts-ignore
                    document.getElementById("footer").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  fw={600}
                  c={
                    scroll.y < 500
                      ? redBgPages.includes(Pathname)
                        ? "gray.0"
                        : "dark"
                      : "dark"
                  }
                >
                  Contact
                </Text>
                <Button
                  onClick={() => {
                    Router.push("/donate");
                  }}
                >
                  Donate
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box
        hiddenFrom="lg"
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          backdropFilter: "blur(10px)",
          zIndex: 99,
        }}
      >
        <Container px="lg" py="sm">
          <Group justify="space-between">
            <Text
              lh="xs"
              size="sm"
              fw={600}
              c={
                scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "gray.0"
                    : "dark"
                  : "dark"
              }
            >
              SHIVATA LOVE
              <br />
              FOUNDATION
            </Text>

            <Burger
              color={
                scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "gray.0"
                    : "dark"
                  : "dark"
              }
              opened={opened}
              onClick={() => setOpened.toggle()}
            />
          </Group>
        </Container>

        <Drawer
          opened={opened}
          onClose={() => setOpened.close()}
          title="Navigation"
        >
          <Stack>
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "dark"
                      : "brand"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();
                Router.push("/");
              }}
            >
              Home
            </Button>
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/about"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "dark"
                      : "brand"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();
                Router.push("/about");
              }}
            >
              About
            </Button>{" "}
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/team"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "dark"
                      : "brand"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();

                Router.push("/team");
              }}
            >
              Team
            </Button>{" "}
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/perspective"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "dark"
                      : "brand"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();

                Router.push("/perspective");
              }}
            >
              Perspective
            </Button>
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/campaigns"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "dark"
                      : "dark"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();

                Router.push("/campaigns");
              }}
            >
              Campaigns
            </Button>
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/beneficiaries"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "gray.0"
                      : "dark"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();

                Router.push("/beneficiaries");
              }}
            >
              Beneficiaries
            </Button>
            <Button
              justify="flex-start"
              size="48px"
              pl={0}
              variant="subtle"
              c={
                Pathname == "/exposure"
                  ? scroll.y < 500
                    ? redBgPages.includes(Pathname)
                      ? "gray.0"
                      : "dark"
                    : ""
                  : scroll.y < 500
                  ? redBgPages.includes(Pathname)
                    ? "dark"
                    : "dark"
                  : "dark"
              }
              onClick={() => {
                setOpened.close();

                Router.push("/exposure");
              }}
            >
              Media Exposure
            </Button>
          </Stack>
        </Drawer>
      </Box>

      {children}

      <footer
        id="footer"
        style={{
          background: "linear-gradient(90deg,#150808,#291010)",
        }}
      >
        <Container
          size="xl"
          pb={100}
          pt={{ base: 200, lg: 200 }}
          pos="relative"
        >
          <Group wrap="nowrap" gap="xl" justify="center">
            <Quotes
              size={24}
              color="var(--mantine-color-brand-3)"
              weight="fill"
              style={{
                marginTop: -10,
                transform: "rotate(180deg)",
              }}
            />

            <Text
              ta="center"
              size="3rem"
              c="dark.0"
              style={{
                fontFamily: "Oooh Baby",
              }}
              fw={700}
            >
              {" "}
              <span> Love is our Key to</span>, prevent Humanity's collapse
            </Text>
            <Quotes
              size={24}
              color="var(--mantine-color-brand-3)"
              weight="fill"
              style={{
                marginTop: -10,
              }}
            />
          </Group>
          <Text size="md" opacity={0.6} c="white" ta="center" mt="md">
            Shivata Upadhyaya Grela
          </Text>

          <Divider mt="6rem" opacity={0.1} />

          <Space h="6rem" />

          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="2rem">
                <div>
                  <SimpleGrid cols={2} spacing="xl">
                    <div>
                      <Text size="md" c="dark.0" opacity={0.5}>
                        Building
                      </Text>
                      <Text size="md" c="dark.0" opacity={1}>
                        Shivata Love Foundation Branch Office <br />
                        Building
                        <br />
                        <br />
                      </Text>
                      <Text size="md" c="dark.0">
                        Ragini Art Center Building Balkot Bhaktapur, Nepal.
                      </Text>
                    </div>
                    <div>
                      <Text size="md" c="dark.0" opacity={0.5}>
                        Parking Location
                      </Text>
                      <Text size="md" c="dark.0">
                        Parking available in Ragini Art Center Premises.
                      </Text>
                    </div>

                    <div>
                      <Text size="md" c="dark.0" opacity={0.5}>
                        Phone
                      </Text>
                      <Text size="md" c="dark.0">
                        01-6630335
                      </Text>
                    </div>
                    <div>
                      <Text size="md" c="dark.0" opacity={0.5}>
                        Email
                      </Text>
                      <Text size="md" c="dark.0" visibleFrom="lg">
                        shivatalovefoundation16@gmail.com{" "}
                      </Text>
                      <Text size="md" c="dark.0" hiddenFrom="lg">
                        info@shivata-love.org
                        <br /> shivatalovefoundation16
                        <br />
                        @gmail.com{" "}
                      </Text>
                    </div>
                  </SimpleGrid>
                </div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <SimpleGrid cols={{ base: 2, lg: 3 }}>
                <div>
                  <Text size="xs" c="dark.0" opacity={0.5}>
                    About
                  </Text>

                  <Stack gap={"xs"} mt="sm">
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/");
                      }}
                    >
                      Home
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/about");
                      }}
                    >
                      About
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/team");
                      }}
                    >
                      Team
                    </Anchor>
                  </Stack>
                </div>
                <div>
                  <Text size="xs" c="dark.0" opacity={0.5}>
                    Vision & Works
                  </Text>

                  <Stack gap={"xs"} mt="sm">
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/campaigns");
                      }}
                    >
                      Camapigns
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/perspective");
                      }}
                    >
                      Perspective
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/beneficiaries");
                      }}
                    >
                      Beneficiaries
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("/exposure");
                      }}
                    >
                      Media Exposure
                    </Anchor>
                  </Stack>
                </div>
                <div>
                  <Text size="xs" c="dark.0" opacity={0.5}>
                    Socials
                  </Text>

                  <Stack gap={"xs"} mt="sm">
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push("https://www.facebook.com/shivata.love/");
                      }}
                    >
                      Facebook
                    </Anchor>
                    <Anchor
                      size="sm"
                      c="dark.0"
                      onClick={() => {
                        Router.push(
                          "https://www.instagram.com/shivatalovefoundation16"
                        );
                      }}
                    >
                      Instagram
                    </Anchor>
                  </Stack>
                </div>
              </SimpleGrid>
            </Grid.Col>
          </Grid>

          <Divider mt="10rem" mb="xl" opacity={0.1} />

          <Group justify="space-between">
            <Text size="xs" c="dark.0">
              Powered by vStudio.co
            </Text>
            <Text size="xs" c="dark.0">
              All data & right copyright under Shivata Love Foundation @ 2025
            </Text>
          </Group>
        </Container>
      </footer>
    </>
  );
}
