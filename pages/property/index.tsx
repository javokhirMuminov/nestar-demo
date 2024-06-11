import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList:NextPage = () => {
  console.log("PROPERTYLIST COMPONENT - PAGE ROUTER");
  return (
  

     <Container>PROPERTY  LIST</Container>



  );
};

export default withLayoutBasic(PropertyList);
