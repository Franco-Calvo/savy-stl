import Link from "next/link";
import styles from "./AdminNav.module.css";
import { FaFilter, FaUpload, FaRegFile, FaUsers } from "react-icons/fa";

const AdminNav: React.FC = () => {
  return (
    <aside className={styles.adminNav}>
      <span>
        <Link href="/admin/categories">
          <FaFilter />
        </Link>
        <Link href="/admin/upload">
          <FaUpload />
        </Link>
        <Link href="/">
          <FaRegFile />
        </Link>
        <Link href="/">
          <FaUsers />
        </Link>
      </span>
    </aside>
  );
};

export default AdminNav;
