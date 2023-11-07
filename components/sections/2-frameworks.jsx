import { tailwindCssSvg, nextLogoSvg } from "@/content/data/siteMetaData";

const FrameWorks = () => {
  return (
    <section id="education" className="bg-[#f7f7f7] px-4 py-16 md:py-24">
      <h2 className="font-palanquin text-2xl md:text-4xl font-bold text-center">
        MODERN FRONT-END FRAMEWORKS
      </h2>
      <p className="text-center text-sm text-gray-400">
        Yazılım dünyası sürekli eğitim ve kendini güncellemeyi gerektiriyor.
      </p>
      <p className="text-center text-sm text-gray-400">
        2023 yılının başından itibaren kullanıma geçtiğim teknoloji
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4">
          <div className=" my-4 px-4 py-8 text-center max-w-md bg-white  border text-gray-600">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              className="p-2 h-16 block mx-auto"
            />
            <h2>Next JS Framework</h2>
            <p className="text-sm text-gray-400">
              Next.js, hızlı, SEO dostu web uygulamaları geliştirmenin teknoloji
              harikası aracı
            </p>
            <p className="text-sm text-gray-400">
              Yeniden kullanılabilir ve tekrarlanmayan kod yazmayı kolaylaştıran
              bu sistem, bakım sürecini de kolaylaştırıyor.{" "}
            </p>
          </div>
          <div className=" m-4 px-4 py-8 text-center max-w-md bg-white  border  text-gray-600">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              className="p-2 h-16 block mx-auto"
            />
            <h2>TailWind CSS</h2>
            <p className="text-sm text-gray-400">
              Tailwind CSS, istenen tasarımları, hızlı, mükemmele yakın
              uygulamaya destek olan bir çerçeve.
            </p>
            <p className="text-sm text-gray-400">
              Bu yeni çerçeve, CSS kodlarının karmaşıklığının önüne geçiyor,
              bakım ve güncelleme kolaylığına destek oluyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameWorks;
