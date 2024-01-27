import Panel from "@/components/common/Panel";
import AddBrandForm from "@/components/brand/AddBrandForm";

export const metadata = {
  title: "Add Brand",
};

const AddBrandPage = () => {
  return (
    <div>
      <Panel title="Add Brand">
        <div className="max-w-md mx-auto">
          <AddBrandForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddBrandPage;
