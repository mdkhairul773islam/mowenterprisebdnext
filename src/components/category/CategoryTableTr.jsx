"use client";
// Import Dependencies
import { useState } from "react";
import Modal from "../common/Modal";
import { GoTrash } from "react-icons/go";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";
import EditCategoryForm from "./EditCategoryForm";

const CategoryTableTr = ({ row }) => {
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

        <td>
          <div className="flex items-center justify-end gap-2">
            <Tooltip content="Update" animation="duration-500">
              <div
                onClick={() => {
                  console.log(row.original.id);
                  setOpenModal(true);
                }}
                className="h-7 w-7 bg-emerald-600/20 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer"
              >
                <LiaEdit />
              </div>
            </Tooltip>

            <Tooltip content="Delete" animation="duration-500">
              <div className="h-7 w-7 bg-red-600/20 text-red-600 hover:bg-red-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer">
                <GoTrash />
              </div>
            </Tooltip>
          </div>
        </td>
      </tr>

      {/* Edit Category Modal */}
      <Modal
        title="Edit Category"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <EditCategoryForm setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
};

export default CategoryTableTr;
