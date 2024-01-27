const Panel = ({ title, children }) => {
  return (
    <div className="my-5">
      {/* <div className="bg-gray-100 border-b border-b-light-gray p-4 text-center">
        <h4 className="font-medium text-2xl">{title}</h4>
      </div> */}

      <div className="px-5 py-10 bg-white rounded shadow-md min-h-[calc(100vh-211px)]">
        {children}
      </div>
    </div>
  );
};

export default Panel;
