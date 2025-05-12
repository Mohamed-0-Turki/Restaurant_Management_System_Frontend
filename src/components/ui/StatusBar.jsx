import clsx from "clsx";

const ORDER_STAGES = ["Pending", "Preparing", "Ready", "Delivered"];

const StatusBar = ({ currentStatus }) => {
  const currentIndex = ORDER_STAGES.indexOf(currentStatus);

  return (
    <div className="flex items-center gap-2 mt-4">
      {ORDER_STAGES.map((stage, index) => {
        const isActive = index <= currentIndex;
        return (
          <div key={stage} className="flex items-center gap-2">
            <div
              className={clsx(
                "w-4 h-4 rounded-full border",
                isActive ? "bg-green-500 border-green-500" : "bg-gray-300 border-gray-300"
              )}
            />
            <span className={clsx("text-sm", isActive ? "text-green-600" : "text-gray-400")}>
              {stage}
            </span>
            {index !== ORDER_STAGES.length - 1 && (
              <div className="w-6 h-0.5 bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusBar;
