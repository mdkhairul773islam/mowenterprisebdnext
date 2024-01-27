import Panel from "@/components/common/Panel";
import DeleteIncomeTable from "@/components/income/DeleteIncomeTable";

export const metadata = {
  title: "Delete Income",
};

const DeleteIncomePage = () => {
  return (
    <>
      <Panel title="All Income">
        <DeleteIncomeTable />
      </Panel>
    </>
  );
};

export default DeleteIncomePage;
