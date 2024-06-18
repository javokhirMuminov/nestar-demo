import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./TrendPropertyCard";

const TopProperties = () => {
  const [trendingProperties, setTrendingProperies] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="trending-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Properties</span>
            <p>Latest trends in the world of real estate</p>
          </Box>
          <Box className="right">
            <div className="pagination-box">
              <WestIcon className="swiper-trend-prev"></WestIcon>
              <div className="swiper-trend-pagination"></div>
              <EastIcon className="swiper-trend-next"></EastIcon>
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {trendingProperties.length === 0 ? (
            <Box className="empty-list">Trends Empty</Box>
          ) : (
            <Swiper
              className={"trend-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {trendingProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"trend-property-slide"}>
                    <TrendPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;