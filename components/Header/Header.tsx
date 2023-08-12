import Link from "next/link";
import styles from './style.module.scss'
import logo from "@/assets/logo.png"
import Image from "next/image";
import {Navigation} from "@/components/Navigation/Navigation";
import attest from "@/assets/attest.svg";
import graph from "@/assets/graph.svg";
import connections from "@/assets/connections.svg";

const Header = () => {

    const navLinks = [
        { label: "Attest meet", href: "/", img: attest},
        { label: "My connections", href: "/connections", img: connections},
        { label: "Social graph", href: "/graph", img: attest}
    ]

    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.logoLink}>
                <div className={styles.logo}>
                    <Image
                        priority
                        quality={100}
                        unoptimized
                        width={32}
                        height={32}
                        draggable={false}
                        src={logo.src}
                        alt={'logo'}/>
                    <h1>AtOM</h1>
                </div>
            </Link>
            <div className={styles.middleMenu}>
                <Navigation navLinks={navLinks}/>
            </div>
            <button className={styles.address}>0x8675*****a8f2</button>
        </header>
)
}

export {Header}
