import MessageConatiner from "../../components/MessageConatiner/MessageConatiner"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar className="w-full md:w-1/4" />
      <MessageConatiner className="w-full md:w-3/4" />
    </div>
  );
};

export default Home;
