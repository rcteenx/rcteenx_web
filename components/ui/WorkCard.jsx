const WorkCard = ({ id, imgURL, label, href }) => {
  const w_hero = id % 3 === 2 ? " 2xl:w-[36rem] xl:w-[28rem]" : " ";
  const w_class =
    `overflow-y-auto scrollbar-none md:w-[20rem] h-[12rem]` + w_hero;
  return (
    <div className="border rounded-xl shadow-lg group">
      <a href={href} target="_blank">
        <div className={w_class}>
          <img
            src={imgURL}
            alt={label}
            className="object-fill group-hover:opacity-60  rounded-t-xl shadow-lg group-hover:-translate-y-48 ease-linear duration-1000 "
          />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-6 text-coral-red">
          <h5 className="font-semibold group-hover:opacity-50">{label}</h5>
          <svg
            className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
              stroke="currentColor"
            ></path>
          </svg>
        </div>

        <p className="mb-4 text-center font-thin text-slate-400 text-sm">
          Marketing website &amp; chat interface
        </p>
      </a>
    </div>
    // <div className="p-8 flex-1 sm:min-w-[20rem] rounded-xl shadow-lg">
    //   <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
    //     <img src={imgURL.src} alt={label} />
    //   </div>
    //   <p className="font-palanquin text-4xl leading-normal">{label}</p>
    // </div>
  );
};

export default WorkCard;
