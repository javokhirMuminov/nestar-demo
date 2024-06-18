import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";

const PopularProperties = ({ initialInput, ...props }: any) => {
  const [popularProperties, setPopularProperies] =
    useState<number[]>(initialInput);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Popular Properties</span>
            <p>Latest trends in the world of real estate</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          <Swiper
            className={"popular-property-swiper"}
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
            {popularProperties.map((property, index) => {
              return (
                <SwiperSlide key={index} className={"popular-property-slide"}>
                  <PopularPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};

PopularProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default PopularProperties;