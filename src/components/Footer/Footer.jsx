import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>&#169;</span>
      <p>ACME Ltd.</p>
    </footer>
  );
}
export default Footer;
