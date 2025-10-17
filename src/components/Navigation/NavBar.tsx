import { Link } from 'react-router-dom'
import '../Styles/Navigation.css';
import { useContext } from 'react';
import dataContext from '../../ContextData';
import LINKS from '../../Links'



function NavBar()
{

    const context = useContext(dataContext)
    console.log(context.data)


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