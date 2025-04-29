import {
  Button,
  Dropdown,
  Heading,
  Input,
  Line,
  Text,
} from "@/components/common";
import clsx from "clsx";
import classes from "./DeploymentsListPage.module.css";
import { useState } from "react";
const models = [
  {
    name: "sentiment-analyzer",
    domain: "api.domain.com/sentiment-analyzer",
    version: "v1.2.0",
    hadrware: {
      name: "CPU",
      specification: "4x Cpu, 8GB RAM",
    },
    instances: "2",
    status: "Active",
  },
  {
    name: "vision-transformer",
    domain: "api.domain.com/vision-transformer",
    version: "v3.1.0",
    hadrware: {
      name: "Nvidia A100 (80GB) GPU",
      specification: "10x CPU, 80GB GPU, 144GB RAM",
    },
    instances: "0",
    status: "Idle",
  },
  {
    name: "fraud-detector",
    domain: "api.domain.com/fraud-detector",
    version: "v0.9.4-beta",
    hadrware: {
      name: "2x Nvidia A100 (80GB) GPU",
      specification: "20x CPU, 160GB GPU, 288GB RAM",
    },
    instances: "1-4 (Auto)",
    status: "Scaling",
  },
  {
    name: "text-summarizer",

    version: "v1.0.0",
    hadrware: {
      name: "CPU",
      specification: "2x CPU, 8GB RAM",
    },
    instances: "",
    status: "Failed",
  },
  {
    name: "customer-support-bot",
    domain: "api.domain.com/support-bot",
    version: "v2.4.3",
    hadrware: {
      name: "2x Nvidia A100 (80GB) GPU",
      specification: "20x CPU, 160GB GPU, 288GB RAM",
    },
    instances: "3",
    status: "Active",
  },
];
const allStatuses = ["Show All", "Active", "Idle", "Scaling", "Failed"];
const DeploymentsListPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const [selectedStatus, setSelectedStatus] = useState("Show All");
  const [isStatusActive, setIsStatusActive] = useState(false);
  const filteredModels =
    selectedStatus === "Show All"
      ? models
      : models.filter((model) => model.status === selectedStatus);
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
      <div className={classes.container}>
        {filteredModels.map((el, i) => (
          <div className={classes.modelWrapper} key={i}>
            <div className={clsx(classes.singleModel)}>
              <div className={classes.domainAndVersion}>
                <Heading base medium primitive800>
                  {el?.name || "-"}
                </Heading>
                <Text className={classes.domain} xs primitive700>
                  {el?.domain || "-"}
                </Text>
                <Text className={classes.version} xs primitive700>
                  {el?.version || "-"}
                </Text>
              </div>
              <Line />
              <div className={classes.hardwareContainer}>
                <Heading xs primitive500 medium>
                  HARDWARE
                </Heading>
                <div>
                  <Text sm primitive800 medium>
                    {el?.hadrware?.name || "-"}
                  </Text>
                  <Text sm primitive600>
                    {el?.hadrware?.specification || "-"}
                  </Text>
                </div>
              </div>
              <Line />
              <div className={classes.spaceBetween}>
                <Text xs primitive500 medium>
                  INSTANCES
                </Text>
                <Text sm primitive800 medium>
                  {el?.instances || "-"}
                </Text>
              </div>
              <Line />
              <div className={classes.spaceBetween}>
                <Text lxs primitive700>
                  Status
                </Text>
                <Text
                  className={clsx(
                    classes.status,
                    el?.status?.toLowerCase() === "active" && classes.active,
                    el?.status?.toLowerCase() === "idle" && classes.idle,
                    el?.status?.toLowerCase() === "scaling" && classes.scaling,
                    el?.status?.toLowerCase() === "failed" && classes.failed
                  )}
                  lxs
                  medium
                >
                  {el?.status || "-"}
                </Text>
              </div>
            </div>
            <Button blue50 sm wFull className={classes.manageButton}>
              Manage
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeploymentsListPage;
