import Panel from "@/components/common/Panel";
import ZoneTable from "@/components/zone/ZoneTable";

export const metadata = {
  title: "Zone",
};

const ZonePage = () => {
  return (
    <>
      <Panel title="All Zone">
        <ZoneTable />
      </Panel>
    </>
  );
};

export default ZonePage;
