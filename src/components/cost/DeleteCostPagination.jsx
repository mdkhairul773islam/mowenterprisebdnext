const DeleteCostPagination = ({
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  pageIndex,
  pageOptions,
  pageCount,
  gotoPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-dark-800">
            Page <strong className="font-bold">{pageIndex + 1}</strong> of
            <strong className="font-bold"> {pageOptions.length}</strong>
          </span>

          <span>
            {" "}
            | Go to page :{" "}
            <input
              className="w-14 px-2 py-[2px] border border-gray-500 rounded text-sm"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;

                gotoPage(pageNumber);
              }}
            />
          </span>

          <select
            value={pageSize}
            className=" px-2 py-[2px] border border-gray-500 rounded text-sm"
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`px-2 py-[2px] ${
              !canPreviousPage
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-white"
            } border border-gray-500 duration-300  rounded`}
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
          >
            {"<<"}
          </button>
          <button
            className={`px-2 py-[2px] ${
              !canPreviousPage
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-white"
            } border border-gray-500 duration-300  rounded`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className={`px-2 py-[2px] ${
              !canNextPage
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-white"
            }  border border-gray-500 duration-300 rounded`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className={`px-2 py-[2px] ${
              !canNextPage
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-white"
            }  border border-gray-500 duration-300 rounded`}
            disabled={!canNextPage}
            onClick={() => gotoPage(pageCount - 1)}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteCostPagination;
