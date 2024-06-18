import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const CS:NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>CSMOBILE</Stack>;
  } else {
  return (
     <div style={{margin: "20px 0"}}>
       <Stack className={"container"}>CS</Stack>
     </div>



  );
};
}
export default withLayoutBasic(CS);
