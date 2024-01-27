import Panel from "@/components/common/Panel";
import IncomeTable from "@/components/income/IncomeTable";

export const metadata = {
  title: "Income",
};

const IncomePage = () => {
  return (
    <>
      <Panel title="All Income">
        <IncomeTable />
      </Panel>
    </>
  );
};

export default IncomePage;
