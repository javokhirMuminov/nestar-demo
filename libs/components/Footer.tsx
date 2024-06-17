import { Box, Stack } from "@mui/material"
import FacebookOutLinedIcon from "@mui/icons-material/FacebookOutLined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return(
  <Stack className={"footer-container"}>
    <Stack className={"main"}>
      <Stack className={"left"}>
        <Box component={"div"} className={"footer-box"}>
          <img src="/img/logo/logoWhite.svg" alt="" className={"logo"}/>
        </Box>
        <Box component={"div"} className={"footer-box"}>
          <span>total free customer care</span>
          <p>+801021797755</p>
        </Box>
        <Box component={"div"} className={"footer-box"}>
          <span>nee live</span>
          <p>+801021797755</p>
          <span>Support?</span>
        </Box>
        <Box component={"div"} className={"footer-box"}>
          <p>follow us on socil media</p>
          <div className={"media-box"}>
            <FacebookOutLinedIcon/>
            <TelegramIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
          </div>
        </Box>
      </Stack>
      <Stack className={"right"}>
        <Box component={"div"} className={"top"}>
          <strong>keep yourself up to date</strong>
          <div>
            <input type="text" placeholder="Your Email" />
            <span>Subscribe</span>
          </div>
        </Box>
        <Box component={"div"} className={"bottom"}>
          <div>
            <strong>Popular Search</strong>
            <span>Popular Search</span>
            <span>Popular Search</span>
          </div>
          <div>
          <strong>Popular Search</strong>
            <span>Popular Search</span>
            <span>Popular Search</span>
            <span>Popular Search</span>
            <span>Popular Search</span>
            <span>Popular Search</span>
          </div>
          <div>
          <strong>Popular Search</strong>
            <span>Popular Search</span>
            <span>Popular Search</span>
            <span>Popular Search</span>
          </div>
        </Box>
      </Stack>
    </Stack>
    <Stack className={"second"}>
      <span>Nestar - All rights reserved. Nestar 2024</span>
      <span>Privacy Terms Sistemap</span>
    </Stack>

 </Stack>
  );
}

export default Footer;