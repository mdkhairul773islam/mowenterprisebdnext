// Import Dependencies
import DashBoxItems from "@/components/dashboard/DashBoxItems";
import InstallmentTable from "@/components/dashboard/InstallmentTable";

// Meta Data
export const metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  // const [richTextValue, setRichTextValue] = useState("");

  // const handleRichTextChange = (value) => {
  //   setRichTextValue(value);
  // };

  // console.log(richTextValue);

  return (
    <div>
      {/* Dashboard Item  */}
      <DashBoxItems />

      {/* Installment Table  */}
      <div className="bg-white shadow-md rounded my-5 p-5">
        <h3 className="text-xl font-semibold tracking-wider text-dark-800 mb-5">
          Installment List
        </h3>
        <InstallmentTable />
      </div>

      {/* <div>
        <RichTextEditor value={richTextValue} onChange={handleRichTextChange} />
      </div> */}
    </div>
  );
};

export default DashboardPage;
