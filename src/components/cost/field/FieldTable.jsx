"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import fieldData from "./fieldData.json";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import FieldFilter from "./FieldFilter";
import FieldTableTr from "./FieldTableTr";
import FieldPagination from "./FieldPagination";
import { GoSortAsc, GoSortDesc } from "react-icons/go";

const FieldTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => fieldData, []);

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
      {/* Field Filter */}
      <FieldFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Field Table */}
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
                  <th className="text-right">Action</th>
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <FieldTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Field Pagination */}
      <FieldPagination
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

export default FieldTable;
