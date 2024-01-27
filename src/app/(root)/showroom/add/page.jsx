import Panel from "@/components/common/Panel";
import AddShowroomForm from "@/components/showroom/AddShowroomForm";

export const metadata = {
  title: "Add Showroom",
};

const AddShowroomPage = () => {
  return (
    <div>
      <Panel title="Add Showroom">
        <div className="w-full">
          <AddShowroomForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddShowroomPage;
