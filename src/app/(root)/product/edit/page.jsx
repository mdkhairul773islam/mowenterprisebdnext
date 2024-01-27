import Panel from "@/components/common/Panel";
import EditProductForm from "@/components/product/EditProductForm";

export const metadata = {
  title: "Edit Product",
};

const EditProductPage = () => {
  return (
    <div>
      <Panel title="Edit Product">
        <div className="w-full">
          <EditProductForm />
        </div>
      </Panel>
    </div>
  );
};

export default EditProductPage;
