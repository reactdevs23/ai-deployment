import { Line } from "@/components/common";
import classes from "./Sidebar.module.css";
import { logoutIcon } from "@/images";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
const Sidebar = ({
  navItems,
  handleLogout,
  activeNavItem,
  isSidebarActive,
  setIsSidebarActive,
  setActiveNavItem,
}) => {
  return (
    <>
      <aside
        className={clsx(
          classes.sidebar,
          isSidebarActive && classes.showSidebar
        )}
      >
        <div className={clsx(classes.navItems)}>
          {navItems.map(({ icons, navItem }, id) => {
            return (
              <button
                key={"manage-account-nav-item-" + id}
                onClick={() => {
                  setActiveNavItem(navItem);
                  setIsSidebarActive(false);
                }}
                className={clsx(
                  classes.navItem,
                  activeNavItem === navItem && classes.active
                )}
              >
                <img
                  className={classes.icon}
                  src={activeNavItem === navItem ? icons[1] : icons[0]}
                  alt="#"
                />
                {navItem}
              </button>
            );
          })}
        </div>
        <Line />
        <button
          className={clsx(classes.navItem, classes.logoutButton)}
          onClick={handleLogout}
        >
          <img src={logoutIcon} alt="#" className={classes.logoutIcon} />
          Logout
        </button>
      </aside>
      <div
        className={clsx(classes.overlay, isSidebarActive && classes.active)}
        onClick={() => setIsSidebarActive(false)}
      >
        <button className={classes.closeIcon}>
          <MdClose />
        </button>
      </div>
    </>
  );
};
export default Sidebar;
