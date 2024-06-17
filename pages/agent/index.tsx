import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList:NextPage = () => {
  console.log("PROPERTYLIST COMPONENT - PAGE ROUTER");
  return (
     <div style={{margin: "20px 0"}}>
       <Stack className={"container"}>AGNTS LIST</Stack>
     </div>



  );
};

export default withLayoutBasic(AgentList);
