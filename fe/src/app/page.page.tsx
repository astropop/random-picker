"use client";
import { Container, CssBaseline, Typography } from "@mui/material";
import styles from "./page.module.css";
import HomePage from "./ui/pages/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage></HomePage>
    </div>
  );
}
