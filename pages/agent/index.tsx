import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList:NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>AGNTS LIST MOBILE</Stack>;
  } else {
  return (
     <div style={{margin: "20px 0"}}>
       <Stack className={"container"}>AGNTS LIST</Stack>
     </div>



  );
};
}
export default withLayoutBasic(AgentList);
