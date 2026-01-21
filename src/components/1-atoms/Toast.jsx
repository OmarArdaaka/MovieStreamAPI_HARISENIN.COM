import {
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const Toast = ({ message, isVisible, type = "success" }) => {
  const style = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };
  const iconType = {
    success: <FaRegCheckCircle />,
    error: <FaRegTimesCircle />,
    warning: <IoWarningOutline />,
    info: <FaInfoCircle />,
  };
  // Pilih class warna berdasarkan prop 'type'
  const bgColor = style[type] || style.success;
  const icon = iconType[type] || iconType.success;
  return (
    <div
      className={`notif-movie-add fixed top-5 left-5 rounded-lg shadow-lg text-white transition-all duration-300 ease-in-out flex flex-row items-center gap-1 px-4 py-2 text-[10px] lg:text-[16px]
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }  ${bgColor} z-50`}
    >
      {icon}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
