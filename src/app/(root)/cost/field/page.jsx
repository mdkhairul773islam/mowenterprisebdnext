// Import Dependencies
import Panel from "@/components/common/Panel";
import FieldTable from "@/components/cost/field/FieldTable";

export const metadata = {
  title: "Field of Cost",
};

const FieldPage = () => {
  return (
    <>
      <Panel title="All Field">
        <FieldTable />
      </Panel>
    </>
  );
};

export default FieldPage;
