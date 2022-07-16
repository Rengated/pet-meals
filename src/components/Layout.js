import { Navbar } from "./Navbar"
 
 export const Layot = ({children}) => {
    return(
        <>
            <div className="container"><Navbar/></div>
                <div className="layout">
                <div className="container"> {children} </div>
            </div>      
        </>
    )


}