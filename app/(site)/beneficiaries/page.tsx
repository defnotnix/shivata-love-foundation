"use client";

//import { PageHome } from "@/modules/home";

import dynamic from "next/dynamic";

const _Page = dynamic(() => import("../../../modules/beneficiaries/index"), {
  ssr: false,
});

export default function Page() {
  return <_Page />;
}
