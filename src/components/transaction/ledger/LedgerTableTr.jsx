const LedgerTableTr = ({ row }) => {
  return (
    <>
      <tr {...row.getRowProps()}>
        {row.cells.map((cell, index) => {
          return (
            <td key={index} {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default LedgerTableTr;
