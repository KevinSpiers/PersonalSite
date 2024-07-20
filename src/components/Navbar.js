import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/timeline">Timeline</Link></li>
        <li><Link href="/interests">Interests</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;