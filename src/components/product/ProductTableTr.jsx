"use client";
// Import Dependencies
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { Tooltip } from "flowbite-react";

const ProductTableTr = ({ row }) => {
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

        <td>
          <div className="flex items-center justify-end gap-2">
            <Tooltip content="Update" animation="duration-500">
              <Link
                href="/product/edit"
                className="h-7 w-7 bg-emerald-600/20 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer"
              >
                <LiaEdit />
              </Link>
            </Tooltip>

            <Tooltip content="Delete" animation="duration-500">
              <div className="h-7 w-7 bg-red-600/20 text-red-600 hover:bg-red-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer">
                <GoTrash />
              </div>
            </Tooltip>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductTableTr;
