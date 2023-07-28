import Link from "next/link";
import styles from "./AdminNav.module.css";
import { FaFilter, FaUpload, FaRegFile, FaUsers } from "react-icons/fa";

const AdminNav: React.FC = () => {
  return (
    <aside className={styles.adminNav}>
      <h3>Admin Panel</h3>
      <span>
        <Link href="/adminpanel/categories">
          <a>
            <FaFilter />
            Categorías
          </a>
        </Link>
        <Link href="/adminpanel/upload">
          <a>
            <FaUpload />
            Subir Archivos
          </a>
        </Link>
        <Link href="/">
          <a>
            <FaRegFile />
            Archivos Semanales
          </a>
        </Link>
        <Link href="/">
          <a>
            <FaUsers />
            Usuarios
          </a>
        </Link>
      </span>
    </aside>
  );
};

export default AdminNav;
