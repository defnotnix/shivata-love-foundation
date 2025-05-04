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
import { beneficiaries } from "./data";

export default function PageBeneficiaries() {
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
              BENEFICIARIES
            </Text>
            <Text size="3rem" fw={600} c="gray.0" hiddenFrom="lg">
              BENEFICIARIES
            </Text>
            <Grid mt="md">
              <Grid.Col span={{ lg: 1.5 }} offset={{ lg: 5 }}>
                <Text size="sm" c="gray.0">
                  HOME - BENEFICIARIES
                </Text>
              </Grid.Col>
              <Grid.Col span={{ lg: 3 }}>
                <Text size="sm" c="gray.0">
                  The lives we’ve touched — individuals and communities who have
                  grown, thrived, and moved forward with our support.
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
          <SimpleGrid cols={{ base: 2, lg: 4 }}>
            {beneficiaries.map((beneficiary: any, index: number) => (
              <Box my="xl" key={index}>
                <Image
                  h={{ base: 200, lg: 400 }}
                  radius="xl"
                  src={
                    beneficiary.img ||
                    "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                  }
                />
                <Stack gap={4} mt="md">
                  <Text size="md" fw={600}>
                    {beneficiary.name}
                  </Text>
                  <Text size="sm">{beneficiary.scholarYear}</Text>
                  <Text size="sm">{beneficiary.details}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </motion.section>
    </>
  );
}
