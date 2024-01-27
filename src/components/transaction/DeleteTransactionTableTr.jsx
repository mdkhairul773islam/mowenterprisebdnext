"use client";
// Import Dependencies
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";
import Modal from "../common/Modal";
import EditTransactionForm from "./EditTransactionForm";

const DeleteTransactionTableTr = ({ row }) => {
  const [openModal, setOpenModal] = useState(false);

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

export default DeleteTransactionTableTr;
