import Panel from "@/components/common/Panel";
import LedgerTable from "@/components/transaction/ledger/LedgerTable";

export const metadata = {
  title: "Ledger Md Transaction",
};

const LedgerPage = () => {
  return (
    <>
      <Panel title="Ledger Md Transaction">
        <LedgerTable />
      </Panel>
    </>
  );
};

export default LedgerPage;
