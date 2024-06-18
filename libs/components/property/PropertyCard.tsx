import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/property/detail",
            query: { id: "test123sldjsl" },
          }}
        >
          <img src={imagePath} alt="" />
        </Link>
        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography>TOP</Typography>
        </Box>
        <Box className="price-box">
          <Typography>$250000</Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test123sdijslkdj" },
              }}
            >
              <Typography>Kingstone apartments</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>Manhatten, Center City 200 - 5</Typography>
          </Stack>
        </Stack>
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>2 bed</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />
            <Typography>3bth</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />
            <Typography>1150 sqf</Typography>
          </Stack>
        </Stack>
        <Divider />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;