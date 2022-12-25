import Link from "next/link"
import A from "../components/A"

const Index = () =>{
    return(

        <div>
         <div className="navbar">
            
            <A href={"/"} text="Главная" />
            <A href={"/users"} text="Пользователи"/>
            {/* <Link 
            legacyBehavior href="/">
            <a className="link">Главная</a>
            </Link>

            <Link 
            legacyBehavior href="/users">
            <a className="link">Пользователи</a>
            </Link> */}
            
         </div>


         <h1>Главная страница</h1>

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
            
        </div>
    )
}

export default Index