import { getIcon } from "@/lib/iconLoader";

export default function IconDynamic({
  icon = "cv-2", // default icon
  svgClass = "h-6 w-6", // or any default size of your choice
  svgColor = "white", // or any color of your choice
  svgStrokeColor = "white",
  svgFill = "none",
}) {
  // console.log(icon);
  let svgString = getIcon(icon);
  svgString = svgString.replace("{svgColor}", svgColor);
  svgString = svgString.replace("{svgFill}", svgFill);
  svgString = svgString.replace("{svgStrokeColor}", svgStrokeColor);
  svgString = svgString.replace("{svgClass}", svgClass);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: svgString,
      }}
    ></div>
  );
}
