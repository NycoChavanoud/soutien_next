import style from "./style/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Link href={"/"}>
        <div className={style.linkHeader}>HOME</div>
      </Link>
      <Link href={"/users"}>
        <div className={style.linkHeader}>USER LIST</div>
      </Link>
      <Link href={"/form"}>
        <div className={style.linkHeader}>FORM</div>
      </Link>
    </div>
  );
};

export default Header;
