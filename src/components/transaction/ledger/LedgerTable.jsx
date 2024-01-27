"use client";

// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import LedgerFilter from "./LedgerFilter";
import LedgerTableTr from "./LedgerTableTr";
import ledgerData from "./ledgerData.json";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { useGlobalFilter, useSortBy, useTable } from "react-table";

const LedgerTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => ledgerData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  // Calculate total balance
  const totalBalance = rows.reduce((total, row) => {
    return total + (row.original.credit - row.original.debit);
  }, 0);
  return (
    <>
      {/* Transaction Filter */}
      <LedgerFilter filter={globalFilter} setFilter={setGlobalFilter} />

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
            {rows.map((row, index) => {
              prepareRow(row);
              return <LedgerTableTr key={index} row={row} />;
            })}
            <tr>
              <td colSpan="4" className="text-right font-bold">
                Total
              </td>
              <td className="font-bold">{totalBalance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LedgerTable;
