import classes from "./BillingHistory.module.css";
import { Input, Dropdown, Heading, Text } from "@/components/common";

import Table from "./Table/Table";
import { useMemo, useState } from "react";

import Pagination from "@/components/common/Pagination/Pagination";
import { FaChevronLeft } from "react-icons/fa6";

const data = [
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Paid",
  },
  {
    invoice: "INV-20491",
    date: "Apr 10, 2025",
    amount: "$49.00",
    status: "Unpaid",
  },
];

const BillingHistory = ({ setStep }) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <button
            className={classes.backButton}
            onClick={() => setStep((prev) => prev - 1)}
          >
            <FaChevronLeft className={classes.arrowLeft} />
          </button>
          <Heading base primitive800 medium>
            Billing History
          </Heading>
        </div>{" "}
        <Text sm primitive600>
          Review your past transactions, download invoices, and keep track of
          your billing activity over time.
        </Text>
      </div>
      <Table data={currentTableData} />
      <Pagination
        className={classes.pagination}
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={itemsPerPage}
        currentItemsCount={currentTableData}
        onPageChange={(page) => setCurrentPage(page)}
        setPageSize={setItemsPerPage}
      />
    </section>
  );
};

export default BillingHistory;
