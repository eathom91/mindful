import Link from 'next/link';
import styles from '../styles/Navitem.module.css'

interface NavItemProps {
    title: string;
    link: string;
}

export default function NavItem({title, link}: NavItemProps) {
    return (
        <div className={styles.navItem}>
            <Link href={link}>{title}</Link>
        </div>
    )
}