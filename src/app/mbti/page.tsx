import styles from "./page.module.scss";
import classNames from "classnames/bind";
import MBTITest from "@/components/MBTITest/MBTITest";

const cx = classNames.bind(styles);

export default function MBTIPage() {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>
          다이어트
          <br /> MBTI 테스트
        </h2>
        <div className={cx("sub-title")}>
          고민하지 마세요!
          <br />
          평소 생각대로 선택해 주세요
        </div>
      </div>

      <div className={cx("content")}>
        <MBTITest />
      </div>
    </div>
  );
}
