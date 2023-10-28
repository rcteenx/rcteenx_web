import { copyrightSign } from "@/public/assets/icons";

const FooterCopyRight = () => {
  return (
    <div className="flex justify-between text-white-400 mt-16 border-t pt-4  max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        <p>&copy; {new Date().getFullYear()} - Tüm hakları saklıdır.</p>
      </div>
      <span className=" text-red-700">♥</span>&nbsp; by &nbsp;
      <a
        href="https://github.com/rcteenx"
        className="underline"
        target="_blank"
      >
        rcteenx
      </a>
    </div>
  );
};

export default FooterCopyRight;
