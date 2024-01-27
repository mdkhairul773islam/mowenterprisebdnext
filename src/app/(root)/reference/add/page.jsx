import Panel from "@/components/common/Panel";
import AddReferenceForm from "@/components/reference/AddReferenceForm";

export const metadata = {
  title: "Add Reference",
};

const AddReferencePage = () => {
  return (
    <div>
      <Panel title="Add Reference">
        <div className="max-w-md mx-auto">
          <AddReferenceForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddReferencePage;
