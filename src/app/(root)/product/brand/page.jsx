import Panel from "@/components/common/Panel";
import BrandFilter from "@/components/brand/BrandFilter";
import BrandTable from "@/components/brand/BrandTable";

export const metadata = {
  title: "Brand",
};

const BrandPage = () => {
  return (
    <>
      <Panel title="All Brand">
        <BrandTable />
      </Panel>
    </>
  );
};

export default BrandPage;
