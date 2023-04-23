
import {useLocation} from 'react-router';


export function Error404(){
    let locaation = useLocation()
    return(
        <div>
            <h1>Error404</h1>
            <p>Reource not found at {locaation.pathname}</p>
        </div>
    )
}