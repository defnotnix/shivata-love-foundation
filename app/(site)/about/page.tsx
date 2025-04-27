"use client";

//import { PageHome } from "@/modules/home";

import dynamic from "next/dynamic";

const PageAbout = dynamic(() => import("../../../modules/about/page"), {
  ssr: false,
});

export default function Page() {
  return <PageAbout />;
}
