import { FaExclamationTriangle } from "react-icons/fa";

// Komponen menerima prop 'message'
const ErrorMessage = ({
  message = "Terjadi kesalahan, silahkan coba lagi.",
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#181A1C] text-white gap-4 p-4">
      <FaExclamationTriangle className="text-4xl text-red-500" />
      <h2 className="text-2xl font-bold">Oops! Something went wrong.</h2>
      <p className="text-lg text-red-400">{message}</p>
    </div>
  );
};

export default ErrorMessage;
