export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Showroom Name",
    accessor: "showroom",
  },
  {
    Header: "Credit",
    accessor: "credit",
  },
  {
    Header: "Debit",
    accessor: "debit",
  },
  {
    Header: "Balance",
    accessor: "balance", // Add accessor for the calculated balance
    Cell: ({ row }) => {
      const total = row.original.credit - row.original.debit;
      return total.toFixed(2);
    },
  },
];
