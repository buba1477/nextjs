import { useRouter } from "next/router"

import styles from "../../styles/User.module.scss"


export default function () {
  const {query} = useRouter()
  
    return(
        <div>
            <h1 className={styles.cite}>Пользователь c ID {query.id}</h1>
        </div>
    )
}