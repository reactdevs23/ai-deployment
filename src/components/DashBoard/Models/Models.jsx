import { Button, Heading, Text, Wrapper } from "@/components/common";
import classes from "./Models.module.css";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const models = [
  {
    name: "sentiment-analyzer",
    domain: "api.domain.com/sentiment-analyzer",
    version: "v1.2.0",
    status: "Live",
    lastUpdated: "April 10, 2025",
  },
  {
    name: "fraud-detector",
    domain: "api.domain.com/fraud-detector",
    version: "v2.0.1",
    status: "Offline",
    lastUpdated: "March 22, 2025",
  },
  {
    name: "vision-transformer",
    domain: "api.domain.com/vision-transformer",
    version: "v3.1.0",
    status: "Live",
    lastUpdated: "March 1, 2025",
  },
];

const Models = () => {
  return (
    <section className={classes.mainWrapper}>
      <Heading base medium primitive900>
        Your Models
      </Heading>
      <div className={classes.models}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation={false}
          modules={[Navigation]}
          breakpoints={{
            1280: { slidesPerView: 3 },
            1199: { slidesPerView: 2.5 },
            991: { slidesPerView: 1.3 },
            100: { slidesPerView: 1.3 },
          }}
        >
          {models.map((el, i) => (
            <SwiperSlide key={i}>
              <Wrapper className={clsx(classes.item, classes.singleModel)}>
                <Heading base medium primitive800>
                  {el.name}
                </Heading>
                <div className={classes.domainAndVersion}>
                  <Text className={classes.domain} xs primitive700>
                    {el.domain}
                  </Text>
                  <Text className={classes.version} xs primitive700>
                    {el.version}
                  </Text>
                </div>
                <div className={classes.spaceBetween}>
                  <Text lxs primitive700>
                    Status
                  </Text>
                  <Text
                    className={clsx(
                      classes.status,
                      el.status.toLowerCase() === "live" && classes.live,
                      el.status.toLowerCase() === "offline" && classes.offline
                    )}
                    lxs
                    medium
                  >
                    {el.status.toLowerCase() === "live" && "✅"}
                    {el.status.toLowerCase() === "offline" && "🛑"}
                    {el.status}
                  </Text>
                </div>
                <div className={classes.spaceBetween}>
                  <Text lxs primitive700>
                    Last Updated
                  </Text>
                  <Text sm primitive700 medium>
                    {el.lastUpdated}
                  </Text>
                </div>
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button sm arrowButton>
        View All Models <FaArrowRight />
      </Button>
    </section>
  );
};

export default Models;
