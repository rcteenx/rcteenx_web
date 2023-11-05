const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="p-8 flex-1 sm:min-w-[20rem] rounded-xl shadow-lg">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full text-white">
        <img src={imgURL.src} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-palanquin text-4xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat md:text-lg text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
