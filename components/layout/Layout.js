import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Store Website</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/m-tabaei" target="_blank">
          Mtabaei Creator
        </a>{" "}
        |  Next.js Store Project &copy;
      </footer>
    </>
  );
}

export default Layout;
