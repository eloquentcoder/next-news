import styles from '../styles/Toolbar.module.css';
import { useRouter } from 'next/router';

export const Toolbar = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles.main}>
                <div onClick={() => router.push('/')}>Home</div>
                <div onClick={() => router.push('/feed')}>Feeds</div>
                <div onClick={() => router.push('/nofd')}>News Of The Moment</div>
                <div onClick={() => window.location.href = 'https://twitter.com/eloquentcoder'}>Twitter</div>
            </div>
        </div>
    )
}