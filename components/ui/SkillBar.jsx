const SkillBar = ({ label, percent }) => {
  const classRRound = percent == 100 ? "rounded-r-2xl" : "";

  const classColor = () => {
    switch (percent) {
      case "100":
        return "bg-green-900";
      case "95":
        return "bg-green-800";
      case "90":
        return "bg-green-700";
      case "85":
        return "bg-green-600";
      case "80":
        return "bg-green-500";
      case "75":
        return "bg-green-400 text-black";
      case "70":
        return "bg-green-300 text-black";
      case "65":
        return "bg-green-200 text-black";
      case "60":
        return "bg-green-100 text-black";
      case "55":
        return "bg-yellow-500 text-black";
      case "50":
        return "bg-yellow-400 text-black";
      case "45":
        return "bg-yellow-300 text-black";
      case "40":
        return "bg-red-700";
      case "35":
        return "bg-red-600";
      case "30":
        return "bg-red-500";

      default:
        return "";
    }
  };

  return (
    <div className="skillBarContainer">
      <div
        class={`skillBar w-[80%] bg-green-500 ${classRRound} ${classColor()}`}
        style={{ width: percent + "%" }}
      >
        {label}
        <span>{percent}%</span>
      </div>
    </div>
  );
};

export default SkillBar;
