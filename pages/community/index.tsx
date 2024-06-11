import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES TOUTER");
  const [title, setTitle] = useState<string>("hello");
  return <div>COMMUNITY</div>;
};

export default withLayoutBasic(Community);