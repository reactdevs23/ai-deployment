import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import classes from "./Pagination.module.css";

import { usePagination, DOTS } from "@/hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    currentItemsCount,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 350);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 350);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={clsx("pagination-container", classes.pagination, {
        [className]: className,
        [classes.mobile]: isMobile,
      })}
    >
      {!isMobile && (
        <li
          className={clsx(
            classes.paginationItem,
            classes.dekstopArrow,
            currentPage === 1 && classes.disabled
          )}
          onClick={currentPage > 1 ? onPrevious : undefined}
        >
          <button
            className={clsx(classes.arrow, classes.left)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft className={classes.arrow} />
          </button>
        </li>
      )}

      {isMobile ? (
        <>
          <li
            className={clsx(
              classes.paginationItem,
              currentPage === 1 && classes.disabled
            )}
            onClick={currentPage > 1 ? onPrevious : undefined}
          >
            <button
              className={clsx(
                classes.arrow,
                classes.left,
                classes.arrowContainer
              )}
              disabled={currentPage === 1}
            >
              <FaChevronLeft className={classes.arrow} />
            </button>
          </li>
          <li
            className={clsx(
              classes.paginationItem,
              currentPage === lastPage && classes.disabled,
              classes.arrowContainer
            )}
            onClick={currentPage < lastPage ? onNext : undefined}
          >
            <button
              className={clsx(classes.arrow, classes.right)}
              disabled={currentPage === lastPage}
            >
              <FaChevronRight className={classes.arrow} />
            </button>
          </li>
        </>
      ) : (
        paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={`pag-dot-${idx}`}
                className={clsx(classes.paginationItem, "pagination-item dots")}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={`pag-num-${pageNumber}`}
              className={clsx(
                classes.paginationItem,
                pageNumber === currentPage && classes.active
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })
      )}

      {!isMobile && (
        <li
          className={clsx(
            classes.paginationItem,
            classes.dekstopArrow,
            currentPage === lastPage && classes.disabled
          )}
          onClick={currentPage < lastPage ? onNext : undefined}
        >
          <button
            className={clsx(classes.arrow, classes.right)}
            disabled={currentPage === lastPage}
          >
            <FaChevronRight className={classes.arrow} />
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
