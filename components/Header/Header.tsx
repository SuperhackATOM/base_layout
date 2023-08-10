import Link from "next/link";
import styles from './style.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.link} href={'/qr'}>qr</Link>
            <Link className={styles.link} href={'/'}>attest</Link>
            <Link className={styles.link} href={'/connections'}>connections</Link>
        </header>
    )
}

export {Header}