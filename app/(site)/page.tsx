"use client";

//import { PageHome } from "@/modules/home";

import dynamic from "next/dynamic";

const PageHome = dynamic(() => import("../../modules/home/index"), {
  ssr: false,
});

export default function Page() {
  return <PageHome />;
}
