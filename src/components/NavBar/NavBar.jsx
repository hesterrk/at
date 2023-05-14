import styles from './NavBar.module.css';

function NavBar() {
  const items = ['Home', 'About', 'Contact', 'Pricing', 'Support'];
  return (
    <nav className={styles.navigation}>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
