import styles from "./OrderList.module.scss";
import classNames from "classnames/bind";
import { TOrder } from "@/types/order";

const cx = classNames.bind(styles);

interface OrderListProps {
  list: TOrder[];
  selectedItem: string[];
  selectItem: (id: string) => void;
}

const OrderList = (props: OrderListProps) => {
  const { list, selectedItem, selectItem } = props;

  return (
    <ul className={cx("list")}>
      {list.map((listItem) => (
        <li
          key={listItem.id}
          className={cx("list-item", {
            "list-item--selected": selectedItem.includes(listItem.id),
          })}
          onClick={() => selectItem(listItem.id)}
        >
          {listItem.text}
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
