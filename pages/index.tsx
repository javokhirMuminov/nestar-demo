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
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
const  Home: NextPage = () => {
   const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);
   const device = useDeviceDetect();


   const {
      loading: getPropertiesLoading,
      data: getPropertiesData,
      error: getPropertiesError,
      refetch: getPropertiesRefetch,
    } = useQuery(GET_PROPERTIES, {
      fetchPolicy: "network-only",
      variables: {
        input: {
          page: 1,
          limit: 5,
          sort: "createdAt",
          direction: "DESC",
          search: {},
        },
      },
    });

    console.log("getPropertiesData: ", getPropertiesData);

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