import {
  Counter,
  Featured,
  Services,
} from "../components/common/page-componets";
import {
  Filters,
  Hero,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div className="pt-16 max-w-7xl mx-auto px-4">
      <Hero />
      <Featured />
      <Services />
      <Counter />
      

   
    </div>
  );
};

export default Home;
