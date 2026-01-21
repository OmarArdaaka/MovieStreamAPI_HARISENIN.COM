import { FaStar } from "react-icons/fa";

const MovieInfo = ({ title, rating }) => {
  return (
    <>
      <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="poster-info absolute bottom-0 left-0 p-4 text-white font-medium flex flex-row justify-between w-full">
        <span className="title font-medium text-sm lg:text-[18px] line-clamp-1">
          {title}
        </span>
        <div className="rating flex flex-row items-center text-sm lg:text-[18px] mt-1 gap-1">
          <FaStar />
          <span className="text-[14px]">{rating}</span>
        </div>
      </div>
    </>
  );
};
export default MovieInfo;
