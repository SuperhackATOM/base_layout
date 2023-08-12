import {Connection} from "@/components/Connection/Connection";
import styles from "./page.module.scss"
export default function Connections() {
    return (
        <div className={styles.connections}>
            <h4>My connections</h4>
            <Connection/>
            <Connection/>
            <Connection/>
        </div>
    )
}
