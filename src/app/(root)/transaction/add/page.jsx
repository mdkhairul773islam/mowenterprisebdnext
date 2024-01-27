import Panel from "@/components/common/Panel";
import AddTransactionForm from "@/components/transaction/AddTransactionForm";

export const metadata = {
  title: "Add Transaction",
};

const AddTransactionPage = () => {
  return (
    <div>
      <Panel title="Add Md Transaction">
        <div className="max-w-md mx-auto">
          <AddTransactionForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddTransactionPage;
