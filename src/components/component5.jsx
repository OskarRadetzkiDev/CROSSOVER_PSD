import dogImg from "../assets/dog-img.jpg";

const component5 = () => {
  return (
    <section className="section section-4 section-5">
      <div className="section-4-container">
        <div className="section-4-row section-4-row-reverse">
          <div className="section-4-left-section section-4-text-section">
            <div className="text-content">
              <h3>Title Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum{" "}
              </p>
              <button type="button">Order Now</button>
            </div>
          </div>
          <div className="section-4-right-section section-4-img-section">
            <div className="img-wrapper">
              <img src={dogImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default component5;
