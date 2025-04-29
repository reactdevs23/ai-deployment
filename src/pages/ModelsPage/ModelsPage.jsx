import classes from "./ModelsPage.module.css";
import { Input, Dropdown } from "@/components/common";

import ModelsTable from "./Table/Table";
import { useMemo, useState } from "react";

import Pagination from "@/components/common/Pagination/Pagination";

const data = [
  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Ready",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Needs Setup",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Archived",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Ready",
  },

  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Needs Setup",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Archived",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Ready",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Needs Setup",
  },
  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Ready",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Needs Setup",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Archived",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Ready",
  },

  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Needs Setup",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Archived",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Ready",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Needs Setup",
  },
  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Ready",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Needs Setup",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Archived",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Ready",
  },

  {
    model: "sentiment-analyzer",
    type: "Private",
    framework: "PyTorch",
    version: "v1.2.0",
    lastUpdated: "Apr 9, 2025",
    status: "Needs Setup",
  },
  {
    model: "vision-transformer",
    type: "Public",
    framework: "TensorFlow",
    version: "v3.1.0",
    lastUpdated: "Mar 28, 2025",
    status: "Archived",
  },
  {
    model: "fraud-detector",
    type: "Private",
    framework: "Scikit-learn",
    version: "v2.0.1",
    lastUpdated: "Feb 21, 2025",
    status: "Ready",
  },
  {
    model: "text-generator-gpt2",
    type: "Public",
    framework: "HuggingFace",
    version: "v1.0.0",
    lastUpdated: "Jan 12, 2025",
    status: "Needs Setup",
  },
];
const allTypes = ["All", "Private", "Public"];
const allFrameworks = ["All", "PyTorch", "TensorFlow", "ONNX", "Other"];
const allStatuses = ["All", "Ready", "Needs Setup", "Archived"];

const ModelsPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const [selectedType, setSelectedType] = useState("All");
  const [isTypesActive, setIsTypesActive] = useState(false);

  const [selectedFramework, setSelectedFramework] = useState("All");
  const [isFrameworkActive, setIsFrameworkActive] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isStatusActive, setIsStatusActive] = useState(false);

  // Filtering logic
  const filteredData = data.filter((item) => {
    const matchesSearch = item.model
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesType = selectedType === "All" || item.type === selectedType;

    const matchesFramework =
      selectedFramework === "All" || item.framework === selectedFramework;

    // Since there is no `status` field in your data, just skip filtering or implement a fake field if needed
    const matchesStatus = selectedStatus === "All"; // Show all because no data has 'status'

    return matchesSearch && matchesType && matchesFramework && matchesStatus;
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <section className={classes.wrapper}>
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
          <Dropdown
            label="Type"
            dropdownItems={allTypes}
            isActive={isTypesActive}
            setIsActive={setIsTypesActive}
            selectedValue={selectedType}
            onSelect={(val) => setSelectedType(val)}
          />
          <Dropdown
            label="Framework"
            dropdownItems={allFrameworks}
            selectedValue={selectedFramework}
            onSelect={setSelectedFramework}
            isActive={isFrameworkActive}
            setIsActive={setIsFrameworkActive}
          />
          <Dropdown
            label="Status"
            dropdownItems={allStatuses}
            selectedValue={selectedStatus}
            onSelect={setSelectedStatus}
            isActive={isStatusActive}
            setIsActive={setIsStatusActive}
          />
        </div>
      </div>
      <ModelsTable data={currentTableData} />
      <Pagination
        className={classes.pagination}
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={itemsPerPage}
        currentItemsCount={currentTableData}
        onPageChange={(page) => setCurrentPage(page)}
        setPageSize={setItemsPerPage}
      />
    </section>
  );
};

export default ModelsPage;
