import { Link } from "react-router-dom";

function CabecalhoLink({url, children}){
    return(
        <Link to={url}>
            {children}
        </Link>

    )
}

export default CabecalhoLink;