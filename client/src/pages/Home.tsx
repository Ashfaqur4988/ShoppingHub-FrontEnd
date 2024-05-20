import { Link } from "react-router-dom";
import {} from "../assets/cover.jpg";

const Home = () => {
  return (
    <div className="p-8 flex flex-col h-[calc(h-screen-4rem)] w-full">
      <section className=" bg-no-repeat bg-cover bg-center m-auto h-72 w-full sm:bg-[url('./assets/covera.jpg')] md:bg-[url('./assets/cover.jpg')] lg:bg-[url('./assets/cover.jpg')] xl:bg-[url('./assets/cover.jpg')]"></section>

      <h1 className="mt-12 text-2xl flex flex-row justify-between items-center">
        Latest Product
        <Link className="text-base" to={"/search"}>
          More
        </Link>
      </h1>
      <main className="w-full flex-1 gap-4 overflow-x-auto overflow-y-hidden "></main>
    </div>
  );
};
export default Home;
