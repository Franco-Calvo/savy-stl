import Link from "next/link";
import styles from "./AdminNav.module.css";
import { FaFilter, FaUpload, FaRegFile, FaUsers } from "react-icons/fa";

const AdminNav: React.FC = () => {
  return (
    <aside className={styles.adminNav}>
      <h3>Admin Panel</h3>
      <span>
        <Link href="/admin/categories">
          <FaFilter />
          Categorías
        </Link>
        <Link href="/admin/upload">
          <FaUpload />
          Subir Archivos
        </Link>
        <Link href="/">
          <FaRegFile />
          Archivos Semanales
        </Link>
        <Link href="/">
          <FaUsers />
          Usuarios
        </Link>
      </span>
    </aside>
  );
};

export default AdminNav;
