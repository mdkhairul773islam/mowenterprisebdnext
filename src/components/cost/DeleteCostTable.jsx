"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import costData from "./costData.json";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import DeleteCostFilter from "./DeleteCostFilter";
import DeleteCostTableTr from "./DeleteCostTableTr";
import DeleteCostPagination from "./DeleteCostPagination";
import { GoSortAsc, GoSortDesc } from "react-icons/go";

const DeleteCostTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => costData, []);

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
      {/* Delete Cost Filter */}
      <DeleteCostFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Delete Cost Table */}
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
              return <DeleteCostTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Cost Pagination */}
      <DeleteCostPagination
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

export default DeleteCostTable;
