// Import Dependencies
import Panel from "@/components/common/Panel";
import AddCostForm from "@/components/cost/AddCostForm";

export const metadata = {
  title: "Add Cost",
};

const AddCostPage = () => {
  return (
    <div>
      <Panel title="Add Cost">
        <div className="max-w-md mx-auto">
          <AddCostForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddCostPage;
