import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import WhatsApp from '../assets/WhatsApp.png';
import '../Footer.css'

export default function footer() {

    return (
<footer class="footer">
          <div class="footer1">
            <h2 class="footer-h2">Title Here</h2>
            <p class="footer-p">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at dignissim nunc,
                id maximus ex. Etiam nec dignissim elit, at
                dignissim enim.
            </p>
            <div>
                <img class="footer-img" src={Instagram} alt="Instagram-Logo" />
                <img class="footer-img" src={Facebook} alt="Facebook-Logo" />
                <img class="footer-img" src={Twitter} alt="Twitter-Logo" />
                <img class="footer-img" src={WhatsApp} alt="WhatsApp-Logo" />
            </div>
          </div>
              <div class="footer2">
                  <h2 class="footer-h2">About</h2>
                  <ul class="footer-ul">
                      <li class="footer-li">
                          <a href="" class="footer-a">History</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Our Team</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Brand Guidelines</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Terms & Condition</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Privacy Policy</a>
                      </li>
                  </ul>
                  </div>
              <div class="footer3">
                  <h2 class="footer-h2">Services</h2>
                  <ul class="footer-ul">
                      <li class="footer-li">
                          <a href="" class="footer-a">How to Order</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Our Product</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Order Status</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Promo</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Payment Method</a>
                      </li>
                  </ul>
              </div>
              <div class="footer4">
                  <h2 class="footer-h2">Other</h2>
                  <ul class="footer-ul">
                      <li class="footer-li">
                          <a href="" class="footer-a">Contact Us</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Help</a>
                      </li>
                      <li class="footer-li">
                          <a href="" class="footer-a">Privacy</a>
                      </li>
                  </ul>
              </div>
</footer>
      );
}