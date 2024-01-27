import Panel from "@/components/common/Panel";
import OrdersTable from "@/components/orders/OrdersTable";

export const metadata = {
  title: "Orders",
};

const OrdersPage = () => {
  return (
    <>
      <Panel title="All Orders">
        <OrdersTable />
      </Panel>
    </>
  );
};

export default OrdersPage;
