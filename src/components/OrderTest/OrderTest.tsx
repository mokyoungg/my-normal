"use client";

import { useState } from "react";
import styles from "./OrderTest.module.scss";
import classNames from "classnames/bind";
import OrderList from "../OrderList/OrderList";
import { ORDER_LIST } from "@/constants/order";
import { TOrder } from "@/types/order";

const cx = classNames.bind(styles);

const OrderTest = () => {
  const [orderList, setOrderList] = useState<TOrder[]>(ORDER_LIST);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const selectItem = (id: string) => {
    setSelectedItem((prev) =>
      prev.includes(id) ? prev.filter((listId) => listId !== id) : [...prev, id]
    );
  };

  // 배열 순서 왼쪽으로
  const rasingOrder = () => {
    let newList = [...orderList];
    let firstItem: TOrder | undefined;

    selectedItem.forEach((id) => {
      const index = newList.findIndex((item) => item.id === id);
      if (index > 0) {
        [newList[index], newList[index - 1]] = [
          newList[index - 1],
          newList[index],
        ];
      } else if (index === 0 && !firstItem) {
        firstItem = newList[0];
      }
    });

    if (firstItem) {
      newList = newList.filter((item) => item.id !== (firstItem as TOrder).id);
      newList.unshift(firstItem);
    }

    setOrderList(newList);
  };

  // 배열 순서 오른쪽으로
  const loweringOrder = () => {
    let newList = [...orderList];
    let lastItem: TOrder | undefined;

    const indexes = selectedItem.map((id) =>
      newList.findIndex((item) => item.id === id)
    );

    indexes.sort((a, b) => b - a);

    indexes.forEach((index) => {
      if (index < newList.length - 1) {
        [newList[index], newList[index + 1]] = [
          newList[index + 1],
          newList[index],
        ];
      } else if (index === newList.length - 1) {
        lastItem = newList[newList.length - 1];
      }
    });

    if (lastItem) {
      newList = newList.filter((item) => item.id !== (lastItem as TOrder).id);
      newList.push(lastItem);
    }

    setOrderList(newList);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("order-control")}>
        <button className={cx("order-btn")} onClick={rasingOrder}>
          순서 올리기
        </button>
        <button className={cx("order-btn")} onClick={loweringOrder}>
          순서 내리기
        </button>
      </div>

      <OrderList
        list={orderList}
        selectedItem={selectedItem}
        selectItem={selectItem}
      />
    </div>
  );
};

export default OrderTest;
