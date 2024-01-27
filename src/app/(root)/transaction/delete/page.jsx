import Panel from "@/components/common/Panel";
import DeleteTransactionTable from "@/components/transaction/DeleteTransactionTable";

export const metadata = {
  title: "Delete Transaction",
};

const DeleteTransactionPage = () => {
  return (
    <>
      <Panel title="All Md Transaction">
        <DeleteTransactionTable />
      </Panel>
    </>
  );
};

export default DeleteTransactionPage;
