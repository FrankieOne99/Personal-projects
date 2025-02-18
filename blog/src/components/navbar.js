import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.navlist}>
        <li className={style.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.link}>
          <Link href="/about">About us</Link>
        </li>
        <li className={style.link}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={style.link}>
          <Link href="/contacts">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
