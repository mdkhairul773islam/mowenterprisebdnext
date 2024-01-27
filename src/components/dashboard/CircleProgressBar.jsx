const CircleProgressBar = ({ percentage }) => {
  var strokeDashOffsetValue = Number(100 - percentage * 100);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 34 34"
        className="h-16 -rotate-90 w-16"
      >
        <circle
          cx="16"
          cy="16"
          r="15.9155"
          className="fill-none stroke-[#e2eff0] [stroke-width:1.8]"
        />

        <circle
          cx="16"
          cy="16"
          r="15.9155"
          className={`[stroke-width:1.8] fill-none stroke-primary [stroke-dasharray:100_100] [stroke-dashoffset:30] [stroke-linecap:round] [transition:stroke-dashoffset_1s_ease-in-out]`}
        />
      </svg>
    </div>
  );
};

export default CircleProgressBar;
