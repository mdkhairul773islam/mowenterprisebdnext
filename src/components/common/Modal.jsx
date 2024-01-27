// Import Dependencies
import { Modal } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";

const CustomModal = ({ title, size, openModal, setOpenModal, children }) => {
  return (
    <Modal
      size={size || "lg"}
      dismissible
      show={openModal}
      className="z-[99999999999999999]"
      onClose={() => setOpenModal(false)}
    >
      <div className="p-5 flex bg-white rounded flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-tertiary text-lg font-medium">
            {title || ""}
          </span>
          <div
            onClick={() => setOpenModal(false)}
            className="flex items-center justify-center h-6 w-6 hover:bg-gray-100 cursor-pointer hover:text-red-600 rounded-full"
          >
            <RxCross2 />
          </div>
        </div>

        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
