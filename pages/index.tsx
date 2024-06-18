import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  WebsIcon  from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopProperties from "@/libs/components/homepage/TopProperties";
import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";
import { useState } from "react";
const  Home: NextPage = () => {
   const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);
   const device = useDeviceDetect();

   if (device === "mobile") {
     return <Stack>PropertyList MOBILE</Stack>;
   } else {
  return (
     <Stack className={"home-page"}>
        <TrendProperties/>
        <PopularProperties/>
        <Advertisement/>
        <TopProperties/>
        {/* <TopAgents/> */}
     </Stack>

  )
};
}

export default withLayoutMain(Home);