const Badge = ({ type }) => {
  if (type === "trending") {
    return (
      <div className="film-badge bg-[#b71f1d] text-white p-1 lg:px-2 lg:py-1 rounded-br-md rounded-tl-md lg:rounded-br-lg lg:rounded-tl-lg  absolute top-0 right-2 lg:right-4 z-20 text-[8px] lg:text-[14px]">
        <p className="text-center">
          Top
          <br />
          <span>10</span>
        </p>
      </div>
    );
  }
  if (type === "newEpisode") {
    return (
      <div className="film-badge absolute top-2 left-2 bg-[#0f1e93] text-white py-1 px-2 lg:px-3 lg:py-2 rounded-xl lg:rounded-2xl font-regular text-center z-20 text-[8px] lg:text-[14px]">
        <p className="text-center">Episode Baru</p>
      </div>
    );
  }

  // Jika type adalah "none" atau lainnya, jangan tampilkan apa-apa
  return null;
};

export default Badge;
