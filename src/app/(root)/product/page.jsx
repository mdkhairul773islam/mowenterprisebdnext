import Panel from "@/components/common/Panel";
import ProductTable from "@/components/product/ProductTable";

export const metadata = {
  title: "Product",
};

const ProductPage = () => {
  return (
    <>
      <Panel title="All Product">
        <ProductTable />
      </Panel>
    </>
  );
};

export default ProductPage;
