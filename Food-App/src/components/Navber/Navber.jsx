import {Link} from 'react-router-dom'
function Navber() {
  return (
    <>
      <div>
        <Link to ="/Home">Home</Link>
        <Link to ="/OurMenu">Menu</Link>
        <Link to ="/Contact">Contact</Link>
        <Link to ="/About">About</Link>
        <Link to ="/Login">Login</Link>
      </div>
    </>
  );
}
export default Navber;