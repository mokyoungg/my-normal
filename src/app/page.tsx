import styles from "./page.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx("container")}>
      <div className={cx("section")}>
        <Link href="/mbti">
          <div className={cx("box", "box--mbti")}>
            <span className={cx("title")}>MBTI 테스트</span>
            <br />
            하러가기
          </div>
        </Link>
        <Link href="/order">
          <div className={cx("box", "box--order")}>
            <span className={cx("title")}>순서변경</span>
            <br />
            하러가기
          </div>
        </Link>
      </div>
    </div>
  );
}
