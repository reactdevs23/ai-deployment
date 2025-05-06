import { Heading } from "@/components/common";
import classes from "./ListWrapper.module.css";

const ListWrapper = ({ list, heading }) => {
  return (
    <div className={classes.wrapper}>
      <Heading blue500 lg medium>
        {heading}
      </Heading>
      <ul className={classes.listContainer}>
        {list?.map((list, i) => (
          <li key={i} className={classes.list}>
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListWrapper;
