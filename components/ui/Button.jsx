const Button = ({
  href,
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  let cname =
    "flex justify-center items-center gap-2  px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  border-coral-red ";
  if (
    backgroundColor
      ? (cname += backgroundColor + " ")
      : (cname += "bg-coral-red ")
  );
  if (textColor ? (cname += textColor) : (cname += "text-white"));
  return (
    <a className={cname} href={href}>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-8 h-8"
        />
      )}
    </a>
  );
};

export default Button;
