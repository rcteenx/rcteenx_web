import IconDynamic from "@/components/icons/dynamicIcon";

const WhiteBox = ({ imgURL, svgSlug, label, subtext }) => {
  return (
    <div className="p-8 flex-1 sm:min-w-[20rem] rounded-xl shadow-lg">
      {/* <div className="w-12 h-12 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL.src} alt={label} width={24} height={24} />
      </div> */}

      <div className="w-12 h-12 flex justify-center items-center bg-coral-red rounded-full">
        <IconDynamic
          icon={svgSlug}
          svgColor="black"
          svgFill="white"
          svgClass="h-6 w-6"
        />
      </div>
      <h3 className="font-palanquin text-2xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-sm text-gray-400">
        {subtext}
      </p>
    </div>
  );
};

export default WhiteBox;
