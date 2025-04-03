import Promo from '../../assets/Promo.png';
import Button from '../../components/common/Button/Button';

function MainPromo() {
  return (
    <section>
      <img src={Promo} alt="promo" />
      <div>
        <h1>Big Summer Sale</h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Button size="medium" color="mediumWhite">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default MainPromo;
