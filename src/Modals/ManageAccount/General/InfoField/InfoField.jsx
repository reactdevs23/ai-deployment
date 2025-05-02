import { editIcon, plusIcon } from "@/images";
import { Text } from "@/components/common";
import classes from "./InfoField.module.css";
import clsx from "clsx";

const InfoField = ({ type2, label, value, ...rest }) => {
  return (
    <div className={clsx(classes.wrapper, type2 && classes.wrapper2)}>
      <Text className={classes.label} lxs primitive700>
        {label}
      </Text>
      <Text sm primitive700 medium>
        {value || "-"}
      </Text>
      {!type2 && (
        <button className={classes.button} {...rest}>
          {value ? (
            <img src={editIcon} alt="#" className={classes.icon} />
          ) : (
            <img src={plusIcon} alt="#" className={classes.icon} />
          )}
        </button>
      )}
    </div>
  );
};
export default InfoField;
