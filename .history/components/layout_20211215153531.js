import styles from "./layout.module.css";
import utilStyles from '../styles/utils.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
