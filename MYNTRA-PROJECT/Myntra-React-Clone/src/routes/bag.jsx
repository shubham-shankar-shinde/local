import BagItems from "../Components/BagItems";
import BagSummry from "../Components/BagSummry";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems key={item.id} item={item} />
          ))}
        </div>

        <BagSummry />
      </div>
    </main>
  );
};
export default Bag;
