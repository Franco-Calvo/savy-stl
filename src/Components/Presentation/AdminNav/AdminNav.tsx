import Link from "next/link";
import styles from "./AdminNav.module.css";
import {
  svgCrown,
  svgHeart,
  svgMessage,
  svgNavCub,
  svgOut,
  svgBack,
} from "../Icons/icons";

const AdminNav: React.FC = () => {
  return (
    <aside className={styles.adminNav}>
      <span className={styles.back}>{svgBack()}</span>
      <span className={styles.navTop}>
        <Link href="/admin/categories">{svgNavCub()}</Link>
        <Link href="/admin/upload">{svgHeart()}</Link>
        <Link href="/">{svgCrown()}</Link>
        <Link href="/">{svgMessage()}</Link>
      </span>

      <span>
        <Link href="">{svgOut()}</Link>
      </span>
    </aside>
  );
};

export default AdminNav;
