import aboutImg from '../images/rohith.jpg';
import coffeeImg from '../images/coffee.png';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='ROHITH' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Iam more than just a Software Developer</h3>
          <p>
          Greetings! As a software developer, I weave digital solutions. In dropshipping, I guide ventures and run my own. Off-screen, I chase personal bests in powerlifting. Dive into my world of code, entrepreneurship, and strength!
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p>
           <h2> LETS HAVE A COFFE TOGETHER</h2>
            <img style={{ width: 100, height: 120 }} src={coffeeImg} alt='awesome' />
          </p>
          <a href='https://www.calendly.com/rohithchatrathi' className='btn'>

           WHEN?
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
