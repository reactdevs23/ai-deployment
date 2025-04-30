import { Heading, Line, Text, Wrapper } from "@/components/common";
import classes from "./ModelDetails.module.css";
import clsx from "clsx";
import { editIcon } from "@/images";

const ModelDetails = ({ heading, title, items, children }) => {
  const handleEdit = () => {};
  return (
    <div className={clsx(classes.wrapper, classes.mainWrapper)}>
      <div className={classes.header}>
        <Heading xs medium primitive500 uppercase>
          {heading || "-"}
        </Heading>

        <button className={classes.editButton} onClick={handleEdit}>
          <img src={editIcon} alt="Copy" className={classes.editIcon} />
        </button>
      </div>
      {title && (
        <Heading sm primitive800>
          {title}
        </Heading>
      )}
      {items?.map((item, i) => (
        <div className={classes.item} key={i}>
          <Text lxs primitive700 className={classes.label}>
            {item.label || "-"}
          </Text>
          <Text sm primitive700 medium>
            {item.value || "-"}
          </Text>
        </div>
      ))}
      {children}
    </div>
  );
};
export default ModelDetails;
