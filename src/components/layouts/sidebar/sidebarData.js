import { MdBarChart, MdCategory, MdLocationCity, MdSms } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { TbBrandAirtable } from "react-icons/tb";
import {
  GiBoxTrap,
  GiBoxUnpacking,
  GiPayMoney,
  GiTakeMyMoney,
} from "react-icons/gi";
import { FaBarcode, FaShop, FaUsersLine } from "react-icons/fa6";
import { SiGooglesheets } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

import {
  FaBoxOpen,
  FaDatabase,
  FaFileInvoiceDollar,
  FaHandshake,
  FaRegCalendarAlt,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { LuBarChart3, LuCalendarClock } from "react-icons/lu";
import { IoCart, IoPricetagsSharp, IoSettingsSharp } from "react-icons/io5";
import { AiFillBank, AiOutlineCluster } from "react-icons/ai";

const sidebarData = [
  { title: "Dashboard", icon: <RiDashboardFill />, slug: "/" },
  {
    title: "Product",
    icon: <FaBoxOpen />,
    submenu: [
      { title: "Add Product", slug: "/product/add" },
      { title: "All Product", slug: "/product" },
      { title: "Add Category", slug: "/product/category/add" },
      { title: "All Category", slug: "/product/category" },
      { title: "Add Brand", slug: "/product/brand/add" },
      { title: "All Brand", slug: "/product/brand" },
    ],
  },

  {
    title: "Barcode",
    icon: <FaBarcode />,
    submenu: [
      { title: "Barcode Setting", slug: "/barcode/setting" },
      { title: "Barcode Print", slug: "/barcode/print" },
      { title: "Barcode Generate", slug: "/barcode/generate" },
      { title: "Purchase Wise Barcode", slug: "/barcode/purchase_wise" },
    ],
  },

  {
    title: "Reference",
    icon: <FaUserCheck />,
    submenu: [
      { title: "Add Reference", slug: "/reference/add" },
      { title: "All Reference", slug: "/reference" },
    ],
  },
  {
    title: "Showroom",
    icon: <FaShop />,
    submenu: [
      { title: "Add Showroom", slug: "/showroom/add" },
      { title: "All Showroom", slug: "/showroom" },
    ],
  },
  {
    title: "Supplier",
    icon: <FaUsers />,
    submenu: [
      { title: "Add Supplier", slug: "/supplier/add" },
      { title: "All Supplier", slug: "/supplier" },
      { title: "Add Transaction", slug: "/supplier/transaction/add" },
      { title: "All Transaction", slug: "/supplier/transaction" },
      { title: "Delete Transaction", slug: "/supplier/transaction/delete" },
    ],
  },

  {
    title: "Orders",
    icon: <GiBoxUnpacking />,
    slug: "/orders",
  },
  {
    title: "Zone",
    icon: <MdLocationCity />,
    slug: "/zone",
  },
  {
    title: "Party",
    icon: <FaUsersLine />,
    submenu: [
      { title: "Add Party", slug: "/party/add" },
      { title: "All Party", slug: "/party" },
      { title: "Payable Party List", slug: "/party/payable" },
      { title: "Receivable Party List", slug: "/party/receivable" },
      { title: "Add Transaction", slug: "/party/transaction/add" },
      { title: "All Transaction", slug: "/party/transaction" },
      { title: "Delete Transaction", slug: "/party/transaction/delete" },
      { title: "Collection Report", slug: "/party/transaction/collection" },
    ],
  },
  {
    title: "Purchase",
    icon: <IoCart />,
    submenu: [
      { title: "Add Purchase", slug: "/purchase/add" },
      { title: "All Purchase", slug: "/purchase" },
      { title: "Delete Purchase", slug: "/purchase/delete" },
      { title: "Item Wise", slug: "/purchase/item_wise" },
      { title: "Add Purchase Return ", slug: "/purchase/return/add" },
      { title: "All Purchase Return", slug: "/purchase/return" },
      { title: "Add Purchase Pre Order ", slug: "/purchase/pre_order/add" },
      { title: "All Purchase Pre Order", slug: "/purchase/pre_order" },
    ],
  },
  {
    title: "Stock",
    icon: <MdBarChart />,
    slug: "/stock",
  },
  {
    title: "Datewise Stock",
    icon: <FaRegCalendarAlt />,
    slug: "/datewise_stock",
  },
  {
    title: "Damage Product",
    icon: <GiBoxTrap />,
    submenu: [
      { title: "Add Damage Product", slug: "/damage_product/add" },
      { title: "All Damage Product", slug: "/damage_product" },
      {
        title: "Delete Damage Product",
        slug: "/damage_product/delete_history",
      },
    ],
  },
  {
    title: "Challan ",
    icon: <HiMiniClipboardDocumentList />,
    submenu: [
      { title: "Add Challan", slug: "/challan/add" },
      { title: "All Challan", slug: "/challan" },
    ],
  },
  {
    title: "Sale",
    icon: <IoPricetagsSharp />,
    submenu: [
      { title: "Add Sale", slug: "/sale/add" },
      { title: "All Sale", slug: "/sale" },
      { title: "Delete Sale", slug: "/sale/delete" },
      { title: "Add Hire Sale", slug: "/sale/hire/add" },
      { title: "All Hire Sale", slug: "/sale/hire" },
      { title: "Add Pre Order Sale", slug: "/sale/pre_order/add" },
      { title: "All Pre Order Sale", slug: "/sale/pre_order" },
      { title: "All Delete Pre Order Sale", slug: "/sale/pre_order/delete" },
      { title: "Search Item Wise", slug: "/sale/item_wise" },
      { title: "Add Sale Return", slug: "/sale/return/add" },
      { title: "All Sale Return", slug: "/sale/return" },
    ],
  },
  {
    title: "Income",
    icon: <GiTakeMyMoney />,
    submenu: [
      { title: "Field of Income", slug: "/income/field" },
      { title: "Add Income", slug: "/income/add" },
      { title: "All Income", slug: "/income" },
      { title: "Delete Income", slug: "/income/delete" },
    ],
  },
  {
    title: "Cost",
    icon: <GiPayMoney />,
    submenu: [
      { title: "Field of Cost", slug: "/cost/field" },
      { title: "Add Cost", slug: "/cost/add" },
      { title: "All Cost", slug: "/cost" },
      { title: "Delete Cost", slug: "/cost/delete" },
    ],
  },
  {
    title: "Bank Invoice",
    icon: <FaFileInvoiceDollar />,
    slug: "/bank_invoice",
  },
  {
    title: "Md Transaction",
    icon: <GrTransaction />,
    submenu: [
      { title: "Add Md Transaction", slug: "/transaction/add" },
      { title: "All Md Transaction", slug: "/transaction" },
      { title: "Ledger Md Transaction", slug: "/transaction/ledger" },
      { title: "Delete Md Transaction", slug: "/transaction/delete" },
    ],
  },
  {
    title: "Due List",
    icon: <LuCalendarClock />,
    submenu: [
      { title: "Party Due", slug: "/due_list" },
      { title: "Credit Party Due", slug: "/due_list/credit" },
      { title: "Supplier Due", slug: "/due_list/supplier" },
    ],
  },
  {
    title: "Banking",
    icon: <AiFillBank />,
    submenu: [
      { title: "Add Bank", slug: "/bank/add" },
      { title: "Add Account", slug: "/bank/account/add" },
      { title: "All Account", slug: "/bank/account" },
      { title: "Add Transaction", slug: "/bank/transaction/add" },
      { title: "All Transaction", slug: "/bank/transaction" },
      { title: "Delete Transaction", slug: "/bank/transaction/delete" },
      { title: "Bank Ledger", slug: "/bank/ledger" },
    ],
  },
  {
    title: "Ledger",
    icon: <SiGooglesheets />,
    submenu: [
      { title: "Supplier Ledger", slug: "/ledger/supplier" },
      { title: "Party Ledger", slug: "/ledger/party" },
      { title: "Product Ledger", slug: "/ledger/product" },
    ],
  },
  {
    title: "Customer Commitment",
    icon: <FaHandshake />,
    submenu: [
      { title: "Add Commitment", slug: "/customer_commitment/add" },
      { title: "All Commitment", slug: "/customer_commitment" },
    ],
  },
  {
    title: "Report",
    icon: <FaUsersLine />,
    submenu: [
      { title: "Purchase Report", slug: "/report/purchase" },
      { title: "Sales Report", slug: "/report/sales" },
      { title: "Sales Item Report", slug: "/report/sales_item" },
      { title: "Income Report", slug: "/report/income" },
      { title: "Cost Report", slug: "/report/cost" },
      { title: "Profit Report", slug: "/report/profit" },
      { title: "Profit / Loss Report", slug: "/report/profit_loss" },
      { title: "Balance Sheet", slug: "/report/balance_sheet" },
      { title: "Closing Record", slug: "/report/closing_record" },
      { title: "Highest Sale Product", slug: "/report/highest_sale" },
      { title: "Lowest Sale Product", slug: "/report/lowest_sale" },
      {
        title: "Client Wise Highest Sale ",
        slug: "/report/client_highest_sale",
      },
      { title: "Client Wise Lowest Sale", slug: "/report/client_lowest_sale" },
    ],
  },
  {
    title: "Fixed Assets",
    icon: <AiOutlineCluster />,
    submenu: [
      { title: "Field of Fixed Assets", slug: "/fixed_assets/field" },
      { title: "Add Fixed Assets", slug: "/fixed_assets/add" },
      { title: "All Fixed Assets", slug: "/fixed_assets" },
      { title: "Delete Fixed Assets", slug: "/fixed_assets/delete" },
    ],
  },
  {
    title: "Employee",
    icon: <FaUsers />,
    submenu: [
      { title: "Add Employee", slug: "/employee/add" },
      { title: "All Employee", slug: "/employee" },
      { title: "Add Attendance", slug: "/employee/attendance/add" },
      { title: "All Attendance", slug: "/employee/attendance" },
      { title: "Add Salary", slug: "/employee/salary/add" },
      { title: "All Salary", slug: "/employee/salary" },
      { title: "Add Advance Payment", slug: "/employee/advance_payment/add" },
      { title: "All Advance Payment", slug: "/employee/advance_payment" },
      { title: "Add Payment", slug: "/employee/payment/add" },
      { title: "All Payment", slug: "/employee/payment" },
    ],
  },
  {
    title: "Mobile SMS",
    icon: <MdSms />,
    submenu: [
      { title: "Send SMS ", slug: "/sms/send" },
      { title: "Custom SMS ", slug: "/sms/custom" },
      { title: "SMS Report", slug: "/sms/report" },
    ],
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    slug: "/settings",
  },
  {
    title: "Set Privilege",
    icon: <FaUserPlus />,
    slug: "/privilege",
  },
  {
    title: "Data Backup",
    icon: <FaDatabase />,
    slug: "/data_backup",
  },
];

export default sidebarData;
