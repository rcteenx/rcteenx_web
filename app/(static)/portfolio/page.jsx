import { getStaticFile } from "@/lib/static";
import { tutorials } from "@/content/data/portfolio";

import { bookmark } from "@/public/assets/images";

import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";
import WorkCard from "@/components/ui/WorkCard";

export async function generateMetadata() {
  const sPage = await getStaticFile("portfolio");
  return {
    title: sPage.title,
  };
}

export default async function Page() {
  const sPage = await getStaticFile("portfolio");
  return (
    <>
      <Header />
      <main className="container mx-auto container-p mt-20 lg:my-32">
        <section>
          <p className="mb-8 text-xs md:text-lg font-montserrat text-coral-red">
            {sPage.description}
          </p>
          <h1 className="text-coral-red text-4xl md:text-6xl font-bold max-w-xl text-center mx-auto tracking-wide">
            PORTFOLIO '23
          </h1>
          <p className="max-w-xl text-center mx-auto text-gray-400 font-thin">
            Farklı "framework"ler ile hazırlanmış web sayfa ve bölüm örnekleri
          </p>
          {/* <h1 className="text-coral-red text-6xl">{sPage.title}</h1> */}
          <div>
            {tutorials.map((t) => (
              <div key={t.id} className="my-8">
                <h2 className="my-6 max-w-xl text-4xl text-center mx-auto text-coral-red ">
                  {t.title}
                </h2>
                {/* <p className=" max-w-xl text-center mx-auto text-gray-400 mb-4">
                  {t.desc}
                </p> */}
                <div key={t.id} className="flex gap-4 flex-wrap justify-center">
                  {t.works.map((w) => (
                    <WorkCard
                      key={w.id}
                      id={w.id}
                      imgURL={w.image.src}
                      label={w.label}
                      href={
                        "tutorials/" + t.folder + "/" + w.folder + "/index.html"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
