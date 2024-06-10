import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
     <Stack sx={{background: "81c784"}}>Header</Stack>
     <Container>
      <Stack>HomePage</Stack>
     </Container>
     <Stack>Footer</Stack>
    </>
  )
}