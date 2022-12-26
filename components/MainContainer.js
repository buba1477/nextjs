import Head from "next/head"
import Link from "next/link"
import A from "../components/A"

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"amirchek" + keywords}></meta>
                <title>Главная</title>
            </Head>

            <div className="navbar">

                <A href={"/"} text="Главная" />
                <A href={"/users"} text="Пользователи" />


            </div>
            <div>
                {children}
            </div>


            <style jsx>
            {
               `
               .navbar {
                background: green;
                padding: 15px;
               }

               .link {
                text-decoration: none;
                color: white;
                margin: 10px;
                font-weight: bold;

               }
               `
            }
         </style>
        </>
    )
}

export default MainContainer;