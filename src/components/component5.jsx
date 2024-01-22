import dogImg from "../assets/dog-img.jpg";
import triangleImg1 from "../assets/triangle.svg";
const component5 = () => {
  return (
    <section className="section section-4 section-5">
      <div className="triangle-wrapper triangle-wrapper-2">
        <img className="triangle-icon" src={triangleImg1} alt="" />
      </div>
      <div className="triangle-wrapper triangle-wrapper-4">
        <img className="triangle-icon" src={triangleImg1} alt="" />
      </div>
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
