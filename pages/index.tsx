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
const  Home: NextPage = () => {
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

export default withLayoutMain(Home);