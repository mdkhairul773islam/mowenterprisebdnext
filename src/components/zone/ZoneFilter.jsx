"use client";
// Import Dependencies
import "regenerator-runtime/runtime";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useAsyncDebounce } from "react-table";
import Modal from "../common/Modal";
import { MdAddLocationAlt } from "react-icons/md";
import AddZoneForm from "./AddZoneForm";

const ZoneFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const [openModal, setOpenModal] = useState(false);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <div className="flex flex-wrap items-center justify-between mb-10">
      <div className=" max-w-sm relative">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className="pl-10 inputField"
          placeholder="Search here..."
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-xl text-gray-400">
          <IoSearchOutline />
        </span>
      </div>
      <button className="primaryBtn" onClick={() => setOpenModal(true)}>
        <MdAddLocationAlt />
        Add Zone
      </button>

      {/* Add Zone Modal */}
      <Modal title="Add Zone" openModal={openModal} setOpenModal={setOpenModal}>
        <AddZoneForm setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default ZoneFilter;
