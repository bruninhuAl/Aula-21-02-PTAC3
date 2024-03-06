import Image from "next/image";
import styles from "../components/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.fix}>
            <p className={styles.text}>TODOS OS DIREITOS RESERVADOS PARA EU 'BRUNO'</p>
            <Image
                width= {200}
                height={50}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}
            />
        </footer>
    )
}