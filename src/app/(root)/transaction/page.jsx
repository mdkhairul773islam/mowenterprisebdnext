import Panel from "@/components/common/Panel";
import TransactionTable from "@/components/transaction/TransactionTable";

export const metadata = {
  title: "Transaction",
};

const TransactionPage = () => {
  return (
    <>
      <Panel title="All Md Transaction">
        <TransactionTable />
      </Panel>
    </>
  );
};

export default TransactionPage;
