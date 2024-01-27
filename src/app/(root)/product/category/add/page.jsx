import Panel from "@/components/common/Panel";
import AddCategoryForm from "@/components/category/AddCategoryForm";

export const metadata = {
  title: "Add Category",
};

const AddCategoryPage = () => {
  return (
    <div>
      <Panel title="Add Category">
        <div className="max-w-md mx-auto">
          <AddCategoryForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddCategoryPage;
