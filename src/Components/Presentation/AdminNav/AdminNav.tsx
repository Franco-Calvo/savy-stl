"use client"
import React from 'react';
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
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <aside className={`${styles.adminNav} ${isExpanded ? styles.adminNavExpanded : ''}`}>
      <button
        className={`${styles.back} ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {svgBack()}
      </button>
      <span className={styles.navTop}>
        <Link href="/admin/filesedit">
          {svgNavCub()} <span className={`${styles.adminText} ${isExpanded ? styles.visible : styles.novisible}`}>Editor</span>
        </Link>
        <Link href="/admin/files">
          {svgHeart()} <span className={`${styles.adminText} ${isExpanded ? styles.visible : styles.novisible}`}>Archivos</span>
        </Link>
        {/* <Link href="/">
          {svgCrown()} <span className={`${styles.adminText} ${isExpanded ? styles.visible : styles.novisible}`}>Estadísticas</span>
        </Link> */}
        <Link href="/admin/tickets">
          {svgMessage()} <span className={`${styles.adminText} ${isExpanded ? styles.visible : styles.novisible}`}>Tickets</span>
        </Link>
        <Link href="/">
          {svgOut()} <span className={`${styles.adminText} ${isExpanded ? styles.visible : styles.novisible}`}>Desconectarse</span>
        </Link>
      </span>
    </aside>
  );
};

export default AdminNav;
