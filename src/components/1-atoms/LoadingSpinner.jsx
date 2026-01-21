import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    // Wadah untuk menempatkan spinner di tengah layar
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#181A1C] text-white gap-4">
      {/* Ikon spinner dengan animasi putar dari Tailwind */}
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
      <p className="text-lg">Tunggu ya, lagi loading nih...</p>
    </div>
  );
};

export default LoadingSpinner;
