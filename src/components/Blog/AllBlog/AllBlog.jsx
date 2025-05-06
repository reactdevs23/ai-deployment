import { NavLink } from "react-router-dom";
import classes from "./AllBlog.module.css";
import { Button, Heading, Line, Text } from "@/components/common";
import React, { useState } from "react";

const blogs = [
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
const INITIAL_VISIBLE_ITEMS = 10;

const AllBlog = ({ ...rest }) => {
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 10, blogs.length));
  };

  const handleShowLess = () => {
    setVisibleItems(INITIAL_VISIBLE_ITEMS);
  };

  const allItemsVisible = visibleItems >= blogs.length;
  const someItemsHidden = visibleItems < blogs.length;
  return (
    <div className={classes.blogContainer} {...rest}>
      {blogs.slice(0, visibleItems)?.map((blog, i) => (
        <React.Fragment key={i}>
          <NavLink className={classes.blog} to={`/blog/${i}`}>
            <Text xs primitive500 className={classes.date}>
              {blog.date}
            </Text>
            <Heading lg blue500>
              {blog.title}
            </Heading>{" "}
            <Text sm primitive600>
              {blog.description}
            </Text>
          </NavLink>
          <Line />
        </React.Fragment>
      ))}

      {someItemsHidden && (
        <Button lsm transparent mxAuto onClick={handleLoadMore}>
          Load More
        </Button>
      )}
      {allItemsVisible && blogs.length > INITIAL_VISIBLE_ITEMS && (
        <Button lsm transparent mxAuto onClick={handleShowLess}>
          Show Less
        </Button>
      )}
    </div>
  );
};
export default AllBlog;
