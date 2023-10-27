const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none ">
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-12 h-12"
        />
      )}
    </button>
  );
};

export default Button;
