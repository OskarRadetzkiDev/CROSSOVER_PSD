import iconDog from "../assets/icon-dog.svg";
const component6 = () => {
  return (
    <section className="section section-4">
      <div className="section-4-container">
        <div className="title-section text-center">
          <h3>Pricing</h3>
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odi vitae verstibulum vistibulum
          </p>
        </div>
        <div className="section-4-row section-4-row-card-wrapper">
          <div className="section-4-row-card">
            <h3>Premium</h3>
            <div className="icon-wrapper">
              <img src={iconDog} alt="icon" />
            </div>
            <p className="price">$19.00</p>
            <p className="card-text">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button">Order Now</button>
          </div>
          <div className="section-4-row-card">
            <h3>Premium</h3>
            <div className="icon-wrapper">
              <img src={iconDog} alt="icon" />
            </div>
            <p className="price">$19.00</p>
            <p className="card-text">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button">Order Now</button>
          </div>
          <div className="section-4-row-card">
            <h3>Premium</h3>
            <div className="icon-wrapper">
              <img src={iconDog} alt="icon" />
            </div>
            <p className="price">$19.00</p>
            <p className="card-text">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default component6;
