import { Dropdown, Heading, Text, Wrapper } from "@/components/common";
import classes from "./Hardware.module.css";
import { useState } from "react";
import CheckBox from "./CheckBox/CheckBox";
import clsx from "clsx";

const hardwareItems = [
  {
    name: "CPU",
    specification: "4x CPU, 16GB RAM",
    price: 0.0001,
  },
  {
    name: "Nvidia A100 (80GB) GPU",
    specification: "10x CPU, 80GB GPU, 144GB RAM",
    price: 0.0014,
  },
  {
    name: "2x Nvidia A100 (80GB) GPU",
    specification: "20x CPU, 160GB GPU, 288GB RAM",
    price: 0.0028,
  },
  {
    name: "4x Nvidia A100 (80GB) GPU",
    specification: "40x CPU, 320GB GPU, 576GB RAM",
    price: 0.0112,
  },
];

const Hardware = () => {
  const [selectedHardware, setSelectedHardware] = useState([
    {
      name: "Nvidia A100 (80GB) GPU",
      specification: "10x CPU, 80GB GPU, 144GB RAM",
      price: 0.0014,
    },
  ]);

  const toggleHardware = (item) => {
    setSelectedHardware((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      return exists
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item];
    });
  };

  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading lsm medium blue500>
        Hardware
      </Heading>
      <div className={classes.container}>
        {hardwareItems.map((item, i) => {
          const isSelected = selectedHardware.some(
            (selected) => selected.name === item.name
          );
          return (
            <button
              key={i}
              className={clsx(classes.itemContainer, {
                [classes.active]: isSelected,
              })}
              onClick={() => toggleHardware(item)}
            >
              <CheckBox checked={isSelected} />
              <div className={classes.contentContainer}>
                <div
                  className={clsx(
                    classes.content,
                    classes.nameAndSpecification
                  )}
                >
                  <Text
                    primitive700
                    sm
                    medium
                    textLeft
                    className={clsx(classes.info, classes.name)}
                  >
                    {item.name}
                  </Text>
                  <Text
                    lxs
                    primitive600
                    textLeft
                    className={clsx(classes.info, classes.specification)}
                  >
                    {item.specification}
                  </Text>
                </div>
                <div className={clsx(classes.content, classes.priceContainer)}>
                  <Text lxs primitive600 medium className={classes.info}>
                    ${item.price}/sec
                  </Text>
                  <Text lxs primitive600 className={classes.info}>
                    ${(item.price * 3600).toFixed(2)}/hour
                  </Text>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Hardware;
