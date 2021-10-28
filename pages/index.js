
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-image">
      <Toolbar />
      <div className={styles.pageContainer}>
        <div className={styles.headerText}>Welcome To The Eloquent News App</div>
        <h5 className={styles.headlineText}>Your Non stop location for latest news</h5>
      </div>
    </div>

  )
}
