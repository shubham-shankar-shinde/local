import HomeItems from "../Components/HomeItem";
import { useSelector } from "react-redux";
import Loader from "../Components/loader";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.length == 0 && <Loader />}
        {items.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
