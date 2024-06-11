import { Stack } from "@mui/material"
import { Head } from "next/document"


const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
     <Head>
      <title>Nestar</title>
    </Head>
    <Stack id="pc-wrap">
    <Stack sx={{background: "81c784"}}>Header</Stack>
    <Stack id={"main"}>
      <Component {...props}/>
    </Stack>
    <Stack sx={{background: "#a1887f"}}>FooterSC</Stack>


    </Stack>
    </>
    )

  };


};


export default withLayoutMain;