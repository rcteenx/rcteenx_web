import { tailwindCssSvg, nextLogoSvg } from "@/content/data/siteMetaData";

const FrameWorks = () => {
  return (
    <section id="education" className="bg-[#f7f7f7] py-12 md:py-18">
      <h2 className="text-center">MODERN FRONT-END FRAMEWORKS</h2>
      <p className="text-center">
        Yazılım dünyası sürekli eğitim ve kendini güncellemeyi gerektiriyor.
      </p>
      <p className="text-center">
        2023 yılının başından itibaren kullanıma geçtiğim modern kodlama
        sistemleri
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4">
          <div className=" m-4 px-4 py-8 text-center max-w-md bg-white  border text-gray-600">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              className="p-2 h-24 block mx-auto"
            />
            <h2>Next JS Framework</h2>
            <p>
              Next.js, hızlı, SEO dostu web uygulamaları geliştirmenin teknoloji
              harikası aracı
            </p>
            <p>
              Yeniden kullanılabilir ve tekrarlanmayan kod yazmayı kolaylaştıran
              bu sistem, bakım sürecini de kolaylaştırıyor.{" "}
            </p>
          </div>
          <div className=" m-4 px-4 py-8 text-center max-w-md bg-white  border  text-gray-600">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              className="p-2 h-24 block mx-auto"
            />
            <h2>TailWind CSS</h2>
            <p>
              Tailwind CSS, istenen tasarımları, hızlı, mükemmele yakın
              uygulamaya destek olan bir çerçeve.
            </p>
            <p>
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
