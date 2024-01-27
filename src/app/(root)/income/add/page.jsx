import Panel from "@/components/common/Panel";
import AddIncomeForm from "@/components/income/AddIncomeForm";

export const metadata = {
  title: "Add Income",
};

const AddIncomePage = () => {
  return (
    <div>
      <Panel title="Add Income">
        <div className="max-w-md mx-auto">
          <AddIncomeForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddIncomePage;
