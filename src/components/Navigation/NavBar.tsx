import { Link } from 'react-router-dom'
import '../Styles/Navigation.css';

function NavBar()





{
    return (
        <header className='bar'>
            <Link to='/location'>Location</Link>
            <Link to='/defenses'>Defenses</Link>
            <Link to='/inhabitants'>Inhabitants</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/history'>History</Link>
        </header>
    )
}
export default NavBar;