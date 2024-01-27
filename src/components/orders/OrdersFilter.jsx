"use client";
import "regenerator-runtime/runtime";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useAsyncDebounce } from "react-table";

const OrdersFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <div className="mb-10 max-w-sm relative">
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
  );
};

export default OrdersFilter;
