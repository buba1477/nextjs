import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"

import styles from "../../styles/User.module.scss"


export default function ({user}) {
  const {query} = useRouter()
  
    return(
        <MainContainer keywords ={user.name}>
         <div className={styles.style}>
            <h1 className={styles.cite}>Пользователь c ID { query.id}</h1>
            <div>Имя пользователя {user.name}</div>
        </div>
        </MainContainer>
                
    )
}

export async function getServerSideProps(params) {
    console.log(params)
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    let user = await response.json()
   
    return {
      props: {user}, // will be passed to the page component as props
    }
  }