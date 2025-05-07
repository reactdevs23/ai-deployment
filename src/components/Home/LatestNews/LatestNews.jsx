import {
  Button,
  HeaderWrapper,
  Heading,
  Section,
  Text,
} from "@/components/common";
import clsx from "clsx";
import classes from "./LatestNews.module.css";
import {
  autoScalingImg,
  deployInMinutesImg,
  readyApiImg,
  workWithAnyModel,
} from "@/images";
const data = [
  {
    date: "April 2, 2025",
    title: "Introducing Real-Time Logs: Debug Faster, Deploy Smarter",
    description:
      "Track your model behavior in real time with our latest logs feature. A game-changer for dev teams working with high-frequency inference.",
  },
  {
    date: "April 2, 2025",
    title: "Introducing Real-Time Logs: Debug Faster, Deploy Smarter",
    description:
      "Track your model behavior in real time with our latest logs feature. A game-changer for dev teams working with high-frequency inference.",
  },
  {
    date: "April 2, 2025",
    title: "Introducing Real-Time Logs: Debug Faster, Deploy Smarter",
    description:
      "Track your model behavior in real time with our latest logs feature. A game-changer for dev teams working with high-frequency inference.",
  },
];
const LatestNews = () => {
  return (
    <Section
      className={clsx(classes.wrapper, classes.mainWrapper, "sectionPattern")}
    >
      <HeaderWrapper
        center
        className={clsx(classes.header, classes.mainHeader)}
        xl4
        heading="The latest news from ScalaNodes"
        info="Explore our latest announcements, deep dives from the Platform Decoded series, and exclusive behind-the-scenes stories from the world of Platform."
      />
      <div className={classes.allNews}>
        {data?.map((news, i) => (
          <div className={classes.news} key={i}>
            <Text base primitive600>
              {news.date}
            </Text>
            <Heading xxl blue600 medium className={classes.title}>
              {news.title}
            </Heading>
            <Text base primitive600>
              {news.description}
            </Text>
          </div>
        ))}
        <Button transparent className={classes.button} to="/blogs">
          See more blog
        </Button>
      </div>
    </Section>
  );
};
export default LatestNews;
