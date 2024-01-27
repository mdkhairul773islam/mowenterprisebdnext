"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import incomeData from "./incomeData.json";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import DeleteIncomeFilter from "./DeleteIncomeFilter";
import DeleteIncomeTableTr from "./DeleteIncomeTableTr";
import DeleteIncomePagination from "./DeleteIncomePagination";
import { GoSortAsc, GoSortDesc } from "react-icons/go";

const DeleteIncomeTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => incomeData, []);

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
      {/* Delete Income Filter */}
      <DeleteIncomeFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Delete Income Table */}
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
              return <DeleteIncomeTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Income Pagination */}
      <DeleteIncomePagination
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

export default DeleteIncomeTable;
