import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

 export const Layot = ({children}) => {
    return(
        <div>
            <div className="container"><Navbar/></div>
            <div className="layout">{children}</div>
            <div className="container"><Footer/></div>
         </div>
    )


}