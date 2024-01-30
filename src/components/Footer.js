import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      
    </footer>
  )
}
export default Footer
