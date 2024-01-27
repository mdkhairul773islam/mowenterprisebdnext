import Panel from "@/components/common/Panel";
import ReferenceTable from "@/components/reference/ReferenceTable";

export const metadata = {
  title: "Reference",
};

const ReferencePage = () => {
  return (
    <>
      <Panel title="All Reference">
        <ReferenceTable />
      </Panel>
    </>
  );
};

export default ReferencePage;
