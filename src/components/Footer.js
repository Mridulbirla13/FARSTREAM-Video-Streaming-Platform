import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="social-links">
            <a className='social-link' href="/"><img src='./assets/facebook.svg'></img></a>
            <a className='social-link' href="/"><img src='./assets/instagram.svg'></img></a>
            <a className='social-link' href="/"><img src='./assets/twitter.svg'></img></a>
            <a className='social-link' href="/"><img src='./assets/youtube.svg'></img></a>
            
        </div>
        <div className="foot-links">
            <ul className='member-footer-links'>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Home</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>TV Shows</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Movies</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>New & Popular</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Browse by Languages</a></li>
            </ul>
            <ul className='member-footer-links'>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Terms of Use</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Legal Notices</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Privacy</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Cookie Preferences</a></li>
                <li className='member-footer-link-wrapper'><a className='member-footer-link' href="" target='self'>Contact Us</a></li>
            </ul>
        </div>
        <div className="member-footer-copyright">
            <span>© 1997-2024 Farsight, Inc.</span>
        </div>
    </div>
  )
}

export default Footer
