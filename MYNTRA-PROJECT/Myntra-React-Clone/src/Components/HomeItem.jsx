import { useDispatch, useSelector } from "react-redux";
import { BagSliceAction } from "../store/bagSlice";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdLibraryAdd } from "react-icons/md";
const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementid = bag.indexOf(item.id) >= 0;
  const handleaddBag = () => {
    dispatch(BagSliceAction.addBag(item.id));
  };
  const handledelete = () => {
    dispatch(BagSliceAction.removetoBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementid ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handledelete}
        >
          <FcDeleteDatabase />
          {"\t\t"}
          Remove From Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleaddBag}
        >
          <MdLibraryAdd /> {"\t\t"}
          Add To Bag
        </button>
      )}
    </div>
  );
};
export default HomeItems;
