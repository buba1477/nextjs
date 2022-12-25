import { useRouter } from "next/router"

import styles from "../../styles/User.module.scss"


export default function ({user}) {
  const {query} = useRouter()
  
    return(
        <div>
            <h1 className={styles.cite}>Пользователь c ID {query.id}</h1>
            <div>Имя пользователя {user.name}</div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    let user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }