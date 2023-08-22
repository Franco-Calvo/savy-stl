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
      <button className={`${styles.back} ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>{svgBack()}</button>
      <span className={styles.navTop}>
        <Link href="/admin/categories">{svgNavCub()} <span className={`${styles.adminText}`}>Categorías</span></Link>
        <Link href="/admin/upload">{svgHeart()} <span className={`${styles.adminText}`}>Subir Archivos</span></Link>
        <Link href="/">{svgCrown()}<span className={`${styles.adminText}`}>Estadísticas</span></Link>
        <Link href="/">{svgMessage()} <span className={`${styles.adminText}`}>Tickets</span></Link>
      </span>
    </aside>
  );
};

export default AdminNav;