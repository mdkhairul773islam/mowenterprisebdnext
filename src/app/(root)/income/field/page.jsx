import Panel from "@/components/common/Panel";
import FieldTable from "@/components/income/field/FieldTable";

export const metadata = {
  title: "Field of Income",
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
