import { Text } from "@/components/common";
import classes from "./ModelInfo.module.css";
import clsx from "clsx";

const ModelInfo = ({ items }) => {
  return (
    <div className={clsx(classes.wrapper, classes.mainWrapper)}>
      {items?.map((item, i) => (
        <div className={classes.spaceBetween} key={i}>
          <Text lxs primitive700>
            {item.label || "-"}
          </Text>
          <Text
            sm
            primitive700
            medium
            className={clsx(
              item?.label.toLowerCase() === "status" && [
                classes.status,
                item?.value?.toLowerCase() === "active" && classes.active,
                item?.value?.toLowerCase() === "idle" && classes.idle,
                item?.value?.toLowerCase() === "scaling" && classes.scaling,
                item?.value?.toLowerCase() === "failed" && classes.failed,
              ]
            )}
          >
            {item.value || "-"}
          </Text>
        </div>
      ))}
    </div>
  );
};
export default ModelInfo;
