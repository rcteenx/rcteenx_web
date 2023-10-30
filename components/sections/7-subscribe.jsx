import Button from "../ui/Button";

const Subscribe = () => {
  return (
    <section
      id="contact"
      className="container mx-auto container-p  py-8 my-16 text-center"
    >
      <h3 className="text-4xl font-palanquin font-bold">
        Haberler için&nbsp;
        <span className="text-coral-red">Kayıt Olun</span>
      </h3>
      <div className="mx-auto max-w-sm my-8 flex items-center gap-5 p-2 border border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="email"
          className="input border-none mx-2"
        />
        <div className="flex items-center max-sm:w-full">
          <Button label="Üye Ol" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
