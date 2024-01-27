"use client";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineFundView } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

const HeaderProfile = ({ image }) => {
  return (
    <>
      <Dropdown
        label=""
        renderTrigger={() => (
          <div className="flex items-center gap-3  justify-center cursor-pointer">
            <Image
              height={40}
              width={40}
              src="/images/mehedi.jpg"
              alt="User"
              className="aspect-square h-full rounded-full object-cover "
            />
            <h5 className="font-medium text-dark-700 whitespace-nowrap hidden tracking-wider md:block">
              Mowenterprise
              <span className="text-xs text-dark-500 block font-medium">
                Super Admin
              </span>
            </h5>
            <RiArrowDownSLine className="text-dark-500 hidden md:block" />
          </div>
        )}
      >
        <Dropdown.Header>
          <span className="block text-sm">Mowenterprise</span>
          <span className="block truncate text-sm font-medium">
            mowenterprisebd.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item href="/admin" icon={HiViewGrid}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
        <Dropdown.Item href="/" icon={AiOutlineFundView}>
          Frontend
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/login" icon={HiLogout}>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default HeaderProfile;
