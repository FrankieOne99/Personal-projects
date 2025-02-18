import style from "./navbar.module.css";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="main page logo" width={90} height={90} />
      </Link>
      <ul className={style.navlist}>
        <li className={style.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navlink}>
          <Link href="/about">About us</Link>
        </li>
        <li className={style.navlink}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={style.navlink}>
          <Link href="/contacts">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
