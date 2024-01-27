"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import productData from "./productData.json";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import ProductFilter from "./ProductFilter";
import ProductPagination from "./ProductPagination";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";
import ProductTableTr from "./ProductTableTr";

const ProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => productData, []);

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
      {/* Product Filter */}
      <ProductFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      className="whitespace-nowrap"
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
              return <ProductTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Product Pagination */}
      <ProductPagination
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

export default ProductTable;
