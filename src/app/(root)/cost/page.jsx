// Import Dependencies
import Panel from "@/components/common/Panel";
import CostTable from "@/components/cost/CostTable";

export const metadata = {
  title: "Cost",
};

const CostPage = () => {
  return (
    <>
      <Panel title="All Cost">
        <CostTable />
      </Panel>
    </>
  );
};

export default CostPage;
