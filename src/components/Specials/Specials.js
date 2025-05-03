import './Specials.styles.css';
import Card from '../Card/Card';

const Specials = () => {
  return (
    <section id="menu" className="specials-section">
      <div className="specials-header">
        <h2 className="specials-title">This Week's Specials</h2>
        <button className="menu-button">View Online Menu</button>
      </div>
      <Card />
    </section>
  );
};

export default Specials;