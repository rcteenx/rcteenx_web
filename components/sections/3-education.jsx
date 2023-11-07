import IconDynamic from "@/components/icons/dynamicIcon";

const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto container-p pt-16 md:pt-24 flex flex-col lg:flex-row justify-between items-center gap-10"
    >
      <div className="mx-auto max-w-6xl bg-coral-red rounded-3xl px-10 py-5 lg:px-20 lg:py-8">
        <div className="mx-auto md:w-2/3 text-center text-white">
          <h2 className="p-4 text-center text-white text-4xl lg:text-6xl">
            Eğitim
          </h2>
          <p>
            Okullar, zaten uçabilen kuşlara uçmayı öğretmekten başka bir işe
            yaramıyor. Buna rağmen, okulu bitirmek için gösterilen çaba ve
            tutarlılık, ayrı bir değer yaratıyor!
          </p>
        </div>

        <div className="mx-auto px-10 py-8 my-8 rounded-3xl bg-white flex flex-col md:flex-row  justify-around items-center text-gray-600">
          <div className="text-center px-2 py-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/tr/thumb/e/e2/Bo%C4%9Fazi%C3%A7i_%C3%9Cniversitesi_Logo.png/1200px-Bo%C4%9Fazi%C3%A7i_%C3%9Cniversitesi_Logo.png"
              className="w-16 h-16 block mx-auto"
            />
            <h3>Boğaziçi Üniversitesi</h3>
            <p>B.A. in Business Administration: Management</p>
            <h4></h4>
            <h4 className="font-semibold">1994 - 1999</h4>
          </div>
          <div className="text-center px-8 py-6 border rounded-lg border-coral-red">
            <div className="w-16 h-16 flex justify-center items-center bg-coral-red rounded-full mx-auto">
              {/* <img src={wifi.src} className="w-8 h-8 block mx-auto" /> */}
              <IconDynamic
                icon="wifi"
                svgClass="h-8 w-8"
                svgStrokeColor="white"
              />
            </div>
            <h3>Self-Taught Programmer</h3>
            <h4 className="font-semibold">Since 2006</h4>
          </div>
          <div className="text-center px-8 py-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/tr/9/92/Istanbul_Universitesi.png"
              className="w-16 h-16 block mx-auto"
            />
            <h3>İstanbul Üniversitesi</h3>
            <p>B.S. in Management Information Systems (MIS) </p>
            <h4 className="font-semibold">2019 - 2024</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
