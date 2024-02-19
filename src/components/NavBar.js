import './styles/NavBar.css';
import logo from './images/Logo.png';
import fb from './images/fb-icon.svg';
import ig from './images/ig-icon.svg';


function NavBar() {
  return (
    <div className="navBar">
        <div className="topNavBar">
            <img src={logo} className="logo" alt="logo" />
            <div className='navButtons'>
                <div className='socialMediaContainer'>
                    <img src={fb} className="socialIcon" alt="fb" />
                    <img src={ig} className="socialIcon" alt="ig" />
                </div>
                <div className='authContainer'>
                    <button className='loginButton'>Login</button>
                    <button className='signupButton'>Sign Up</button>
                </div>
                <div className='accountContainer'>
                    {/* This will conditionally show the users initials */}
                    <p className='accountInitials'>AB</p>
                    <p>Account</p>
                </div>
            </div>
        </div>
        <div className="bottomNavBar">
            <div className='navLinks'>
                <a className='navLinksItem'>Home</a>
                <a className='navLinksItem'>Services</a>
                <a className='navLinksItem'>About</a>
                <a className='navLinksItem'>Contact</a>
                <a className='navLinksItem'>Schedule</a>
                <a className='navLinksItem'>Gallery</a>
            </div>
        </div>
    </div>
  );
}

export default NavBar;
