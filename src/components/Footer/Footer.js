import './Footer.styles.css';
import logo from '../../assets/restaurant.jpg'; // Replace with your brand image
import { links, contacts, socials } from '../../data';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>

        <div className='footer-brand'>
          <img src={logo} alt='Little Lemon Restaurant' className='footer-logo' />
          <h2 className='footer-brand-name'>Little Lemon</h2>
        </div>

        <div className='footer-section'>
          <h3 className='footer-title'>Navigation</h3>
          <ul className='footer-list'>
            {links.map(({ id, link }) => (
              <li key={id}>
                <ScrollLink to={link} smooth duration={500} className='footer-link'>
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-title'>Contact</h3>
          <address className='footer-address'>
            Little Lemon<br />
            331 E Chicago<br />
            LaSalle Street, Chicago, IL 60602<br />
            USA
          </address>
          <ul className='footer-list'>
            {contacts.map(({ id, link, title }) => (
              <li key={id}>
                <a href={link} className='footer-link' target='_blank' rel='noreferrer'>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-title'>Follow Us</h3>
          <ul className='footer-list footer-socials'>
            {socials.map(({ id, child, link }) => (
              <li key={id}>
                <a href={link} target='_blank' rel='noreferrer' className='footer-link'>
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className='footer-bottom'>
        &copy; {new Date().getFullYear()} Little Lemon. Built by
        <a
          href='https://www.linkedin.com/in/marventures/'
          target='_blank'
          rel='noreferrer'
          className='footer-author'
        >
          Marvin M. Pacis
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;