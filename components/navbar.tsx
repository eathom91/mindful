import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
import NavItem from './navitem';

export  default function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <Image  
                src="/images/mindful_logo.png"
                height={60}
                width={60}
                alt=""
                />
                <h2 className={styles.title}>Mindful</h2>
            </div>
            <div className={styles.header__right}>
                <NavItem title="Home" link='/'/>
                <NavItem title="Login" link='/login'/>
                <NavItem title="Signup" link='/signup'/>
            </div>
        </div>
    )
}