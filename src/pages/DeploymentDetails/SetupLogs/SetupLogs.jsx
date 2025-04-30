import classes from "./SetupLogs.module.css";
import { Input, Dropdown, Header, Text } from "@/components/common";

import { useMemo, useState } from "react";

import Pagination from "@/components/common/Pagination/Pagination";
import SetupLogsTable from "./Table/SetupLogsTable";
import { setupLogs } from "@/assets/data";

const allStatuses = ["Show All", "Successful", "Error"];
const SetupLogs = () => {
  const [searchValue, setSearchValue] = useState("");

  const [selectedStatus, setSelectedStatus] = useState("Show All");
  const [isStatusActive, setIsStatusActive] = useState(false);
  const filteredData =
    selectedStatus === "Show All"
      ? setupLogs
      : setupLogs.filter((log) => log.status === selectedStatus);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <div className={classes.wrapper}>
      <Header
        className={classes.heading}
        heading="Setup Logs"
        description="Monitor everything happening behind the scenes as your deployment is being set up. This includes environment provisioning, model loading, and readiness checks."
      />
      <div className={classes.header}>
        <Input
          name="search"
          search
          placeholder="Search"
          value={searchValue}
          setValue={setSearchValue}
          className={classes.searchInput}
        />
        <div className={classes.dropdownContainer}>
          <Text primitive600 sm className={classes.filterBy}>
            Filter by Status
          </Text>
          <Dropdown
            type2
            dropdownItems={allStatuses}
            isActive={isStatusActive}
            setIsActive={setIsStatusActive}
            selectedValue={selectedStatus}
            onSelect={(val) => setSelectedStatus(val)}
          />
        </div>
      </div>
      <SetupLogsTable data={currentTableData} />
      <Pagination
        className={classes.pagination}
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={itemsPerPage}
        currentItemsCount={currentTableData}
        onPageChange={(page) => setCurrentPage(page)}
        setPageSize={setItemsPerPage}
      />
    </div>
  );
};

export default SetupLogs;
