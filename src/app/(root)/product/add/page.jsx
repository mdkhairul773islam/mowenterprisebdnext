import Panel from "@/components/common/Panel";
import AddProductForm from "@/components/product/AddProductForm";

export const metadata = {
  title: "Add Product",
};

const AddProductPage = () => {
  return (
    <div>
      <Panel title="Add Product">
        <div className="w-full">
          <AddProductForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddProductPage;
