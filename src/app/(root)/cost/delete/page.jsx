// Import Dependencies
import Panel from "@/components/common/Panel";
import DeleteCostTable from "@/components/cost/DeleteCostTable";

export const metadata = {
  title: "Delete Cost",
};

const DeleteCostPage = () => {
  return (
    <>
      <Panel title="All Cost">
        <DeleteCostTable />
      </Panel>
    </>
  );
};

export default DeleteCostPage;
