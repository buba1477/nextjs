import Link from "next/link"
import { useEffect, useState } from "react"


const Users = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Petrovich' },
        { id: 2, name: 'Vasilych' }
    ])


    
    return (

        <div >
            <h1>Пользователи</h1>
            <Link legacyBehavior href="/">
                <a>На главную</a>
            </Link>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>
                            <Link legacyBehavior href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>

                        </li>


                    )

                }

            </ul>

        </div>
    )
}

export default Users