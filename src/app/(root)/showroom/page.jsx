import Panel from "@/components/common/Panel";
import ShowroomTable from "@/components/showroom/ShowroomTable";

export const metadata = {
  title: "Showroom",
};

const ShowroomPage = () => {
  return (
    <>
      <Panel title="All Showroom">
        <ShowroomTable />
      </Panel>
    </>
  );
};

export default ShowroomPage;
