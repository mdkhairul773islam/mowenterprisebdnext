import Panel from "@/components/common/Panel";
import CategoryTable from "@/components/category/CategoryTable";

export const metadata = {
  title: "Category",
};

const CategoryPage = () => {
  return (
    <>
      <Panel title="All Category">
        <CategoryTable />
      </Panel>
    </>
  );
};

export default CategoryPage;
