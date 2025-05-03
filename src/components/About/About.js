import './About.styles.css';
import MarioAdrianA from '../../assets/about/MarioAdrianA.jpg';
import MarioAdrianB from '../../assets/about/MarioAdrianB.jpg';

const About = () => {
  return (
    <section id='about' className='about-section'>
      <div className='about-content'>
        <h2 className='about-heading'>Little Lemon</h2>
        <h3 className='about-location'>Chicago</h3>
        <p className='about-description'>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          <br /><br />
          Mario brings authentic Italian flavors using family recipes and years of experience as a chef in Italy. Adrian leads the restaurant’s marketing efforts and expanded the menu to include a variety of Mediterranean dishes.
        </p>
      </div>

      <div className='about-images'>
        <img src={MarioAdrianA} alt='Mario and Adrian' className='about-img top-img' />
        <img src={MarioAdrianB} alt='Mario and Adrian' className='about-img bottom-img' />
      </div>
    </section>
  );
};

export default About;