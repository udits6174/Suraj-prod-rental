const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Suraj Tours and Travels
            </h1>
            <p className="mb-8 leading-relaxed">
              Suraj Tours and Travels offers top-notch cab services in Mumbai
              with well-maintained vehicles and professional drivers. We ensure
              a safe, comfortable, and hassle-free journey, catering to your
              specific needs. Whether for business or leisure, enjoy a seamless
              travel experience exploring Mumbai's vibrant sights. Sit back,
              relax, and let us take you on an extraordinary journey.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
