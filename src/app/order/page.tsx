import styles from "./page.module.scss";
import classNames from "classnames/bind";
import OrderTest from "@/components/OrderTest/OrderTest";

const cx = classNames.bind(styles);

export default function OrderPage() {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>노출 순서 변경</div>

      <div className={cx("content")}>
        <OrderTest />
      </div>
    </div>
  );
}
