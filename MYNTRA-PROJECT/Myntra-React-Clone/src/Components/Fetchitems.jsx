import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../store/itemSlice";

const Fetchitems = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispath(itemAction.addInitItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);
  return;
};
export default Fetchitems;
