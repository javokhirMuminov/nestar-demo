import { Stack } from "@mui/material"
import  Head  from "next/head"
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
import { Box } from "@mui/material";
import  WebsIcon  from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import useDeviceDetect from "../hooks/useDeviceDetect";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    const device = useDeviceDetect();

    if (device === "mobile") {
    return (
      <>
     <Head>
      <title>Nestar</title>
    </Head>
    <Stack id="pc-wrap">
        <Stack id={"top"}>
          <Top/>
        </Stack>
        <Stack className="header-main">
          <Stack className={"container"}>
            <HeaderFilter/>
          </Stack>
        </Stack>
    <Stack id={"main"}>
      <Component {...props}/>
    </Stack>
    <Stack id={"footer"}>
      <Footer/>
    </Stack>


    </Stack>
    </>
    )
    }
  };


};


export default withLayoutMain;