import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <>
      <SwiperComponent />
      <div
        // className={`min-h-[calc(100vh-100px)] bg-gradient-to-r from-blue-500 to-teal-500 pt-[60px] bg-cover bg-center relative flex flex-col`}
        className={`min-h-[calc(100vh)] bg-gradient-to-r from-blue-500 to-teal-500 pt-[60px] bg-cover bg-center relative flex flex-col `}
      >
        <div className="layout bg-black/70 absolute top-0 left-0 z-10 h-full w-full"></div>
        <div className="content z-20 flex-1 flex justify-center items-center text-center">
          <div className="flex items-center flex-col gap-5">
            <h1 className="text-5xl font-bold text-blue-500">
              Welcome to Table Trail
            </h1>
            <p className="text-xl text-white">
              Discover the worlds most beautiful and unique table trails
            </p>
            <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white  px-8 py-4 rounded-md font-bold duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
