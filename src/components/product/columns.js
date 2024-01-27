export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Product Code",
    accessor: "product_code",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Brand",
    accessor: "brand",
  },

  {
    Header: "Purchase Price",
    accessor: "purchase_price",
  },
  {
    Header: "Sale Price",
    accessor: "sale_price",
  },
  {
    Header: "Unit",
    accessor: "unit",
    Cell: (props) => "pcs",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => (props.value ? "Available" : "Not Available"),
  },
];
