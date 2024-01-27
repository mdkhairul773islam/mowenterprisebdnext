"use client";
// Import Dependencies
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { Tooltip } from "flowbite-react";

const OrdersTableTr = ({ row }) => {
  return (
    <>
      <tr {...row.getRowProps()}>
        {row.cells.map((cell, index) => {
          return (
            <td key={index} {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default OrdersTableTr;
