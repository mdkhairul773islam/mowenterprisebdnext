"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import transactionData from "./transactionData.json";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import DeleteTransactionFilter from "./DeleteTransactionFilter";
import DeleteTransactionTableTr from "./DeleteTransactionTableTr";
import TransactionPagination from "./TransactionPagination";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";

const DeleteTransactionTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => transactionData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {/* Transaction Filter */}
      <DeleteTransactionFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-2xl">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <GoSortAsc />
                            ) : (
                              <GoSortDesc />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <DeleteTransactionTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Transaction Pagination */}
      <TransactionPagination
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default DeleteTransactionTable;
