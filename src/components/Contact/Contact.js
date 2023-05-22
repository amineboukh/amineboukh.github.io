import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email && !contact.telegram) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='section__body'>
        <div className='contact__body'>
          <a href={`mailto:${contact.email}`}>
            <span type='button' className='btn btn--outline'>
              Email me
            </span>
          </a>
        </div>
        <a href={contact.telegram}>
          <span type='button' className='btn btn--outline'>
            Telegram
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
