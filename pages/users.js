import Link from "next/link"
import { useEffect, useState } from "react"
import MainContainer from "../components/MainContainer"


const Users = ({ users }) => {


    return (

        <MainContainer keywords = {'main users'}>
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

        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {

    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()
    return {
        props: { users }, // will be passed to the page component as props
    }
}