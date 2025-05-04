"use client";

//import { PageHome } from "@/modules/home";

import dynamic from "next/dynamic";

const _Page = dynamic(() => import("../../../modules/exposure/index"), {
  ssr: false,
});

export default function Page() {
  return <_Page />;
}
