import { Link } from 'react-router-dom'
import '../Styles/Navigation.css';
import { useContext } from 'react';
import {LINKS} from '../../Links'
import dataContext from '../../ContextData';



function NavBar()
{

    const context = useContext(dataContext)


    return (
        <header className='bar'>
            {LINKS.map(link => (<Link key={link.path} to={link.path}>{link.name}</Link>))}
            {/* <Link to='/location'>Location</Link>
            <Link to='/defenses'>Defenses</Link>
            <Link to='/inhabitants'>Inhabitants</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/history'>History</Link> */}
        </header>
    )
}
export default NavBar;