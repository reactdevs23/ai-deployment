import React from "react";
import classes from "./Footer.module.css";
import clsx from "clsx";

import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandDiscordFilled } from "react-icons/tb";

import { Button, Heading, Text } from "@/components/common";
import CopyrightContainer from "./CopyrightContainer/CopyrightContainer";

import { Link } from "react-router-dom";
import { checkMarkIcon, Logo } from "@/images";

const companyLinks = [
  {
    navItem: "Home",
    to: "/",
  },
  {
    navItem: "About Us",
    to: "/about-us",
  },
  {
    navItem: "Pricing",
    to: "/pricing",
  },
  {
    navItem: "Blog",
    to: "/blog",
  },
  {
    navItem: "Contact Us",
    to: "/contact-us",
  },
];
const resoucesLinks = [
  {
    navItem: "Documentation",
    to: "/documentation",
  },
  {
    navItem: "FAQ’s",
    to: "/faqs",
  },
  {
    navItem: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    navItem: "Terms of Use",
    to: "/terms-of-use",
  },
  {
    navItem: "Terms of Service",
    to: "/terms-of-service",
  },
];
const socialMedia = [
  {
    icon: <FaTelegramPlane className={classes.icon} />,

    to: "https://t.me/zarp_ai",
  },
  {
    icon: <PiRedditLogoFill className={classes.icon} />,

    to: "#",
  },
  {
    icon: <FaSquareXTwitter className={classes.icon} />,

    to: "https://x.com/zarp_ai",
  },
  {
    icon: <FaLinkedin className={classes.icon} />,

    to: "#",
  },
  {
    icon: <TbBrandDiscordFilled className={classes.icon} />,

    to: "#",
  },
];
const Footer = () => {
  return (
    <section className={classes.wrapper}>
      <footer className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <span className={classes.logo}>
            {" "}
            <Logo color="#fff" />{" "}
          </span>

          <div className={classes.title}>
            <Heading primitive0 medium className={classes.topHeading}>
              ScalaNodes
            </Heading>
            <Text primitive0 sm>
              AI-Powered Conversations
            </Text>
          </div>
          <Button className={classes.button}>
            <img className={classes.checkMarkIcon} src={checkMarkIcon} />
            All System Operationals
          </Button>
        </div>
        <div className={clsx(classes.itemsContainer, classes.companyLinks)}>
          <Heading primitive0 xs className={classes.heading} medium>
            COMPANY
          </Heading>

          {companyLinks.map(({ navItem, to }, i) => (
            <Link to={to} className={classes.link} key={i}>
              {navItem}
            </Link>
          ))}
        </div>
        <div className={classes.devider1}></div>
        <div className={classes.itemsContainer}>
          <Heading primitive0 xs className={classes.heading} medium>
            Resources
          </Heading>

          {resoucesLinks.map(({ navItem, to }, i) => (
            <Link to={to} className={classes.link} key={i}>
              {navItem}
            </Link>
          ))}
        </div>
        <div className={classes.devider2}></div>
        <div className={clsx(classes.itemsContainer, classes.supportContainer)}>
          <Heading primitive0 xs className={classes.heading} medium>
            Support
          </Heading>
          <Link to="/support" className={classes.link}>
            Support
          </Link>
          <Link to="/get-in-touch" className={classes.link}>
            Get in Touch
          </Link>
          <div className={classes.emailContainer}>
            <Heading primitive0 xs className={classes.heading} medium>
              EMAIL:
            </Heading>
            <a
              href="mailto:support@zarp.ai"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              support@[yourbrand].com
            </a>
          </div>{" "}
          <div className={classes.followUsContainer}>
            <Heading primitive0 xs className={classes.heading} medium>
              SOCIAL:
            </Heading>
            <div className={classes.socialContainer}>
              {socialMedia.map((el, i) => (
                <a
                  href={el.to}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className={classes.social}
                >
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <CopyrightContainer />
    </section>
  );
};

export default Footer;
