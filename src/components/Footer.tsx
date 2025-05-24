// losode
// Email us:
// hello@losode.com

import Container from './Container';

// Contact us:
// +2342013306011

// We accept:
// mastercardjcbpaypalvisapaystack
// Useful Information
// About Us
// Terms and conditions
// Privacy Policy
// Contact Us
// Delivery Information
// Returns Policy
// Sell on Losode
// FAQs
// Stay in touch
// Keep in touch with news, promotions and offers from us

// Follow us on:
// instagram
// facebook
// youtube
// twitter
// linkedin

const Footer = () => {
  return (
    <footer className="bg-black text-sm text-white py-10">
      <Container>
        <div className="max-w-screen-xl mx-auto flex gap-10 flex-wrap">
          {/* Column 1 */}
          <div className="flex-1 min-w-[220px]">
            <img
              src="/src/assets/images/logo-white-no-tag.svg"
              alt="Losode Logo"
              className="w-32 mb-4"
            />
            <div className="my-6 mb-2">
              <div className="font-semibold text-[#B5B5B5]">Email us:</div>
              <a
                href="mailto:hello@losode.com"
                className="text-white underline"
              >
                hello@losode.com
              </a>
            </div>
            <div className="my-2 mb-6">
              <div className="font-semibold text-[#B5B5B5]">Contact us:</div>
              <a href="tel:+2342013306011" className="text-white underline">
                +2342013306011
              </a>
            </div>
            <div>
              <div className="font-semibold mb-2 text-[#B5B5B5]">
                We accept:
              </div>
              <div className="flex gap-2 flex-wrap">
                <span>mastercard</span>
                <span>jcb</span>
                <span>paypal</span>
                <span>visa</span>
                <span>paystack</span>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex-1 min-w-[220px]">
            <div className="font-bold text-lg mb-4">Useful Information</div>
            <div className="flex gap-8 text-[#B5B5B5]">
              <ul className="list-none p-0 m-0 space-y-3">
                <li>
                  <a href="#" className="no-underline hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="list-none p-0 m-0 space-y-3">
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    Sell on Losode
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex-1 min-w-[220px]">
            <div className="font-bold text-lg mb-4">Stay in touch</div>
            <div className="mb-4 text-[#B5B5B5]">
              Keep in touch with news, <br /> promotions and offers from us
            </div>
            <div className="font-semibold mb-2">Follow us on:</div>
            <div className="flex gap-4">
              <a href="#" className="text-white no-underline hover:underline">
                instagram
              </a>
              <a href="#" className="text-white no-underline hover:underline">
                facebook
              </a>
              <a href="#" className="text-white no-underline hover:underline">
                youtube
              </a>
              <a href="#" className="text-white no-underline hover:underline">
                twitter
              </a>
              <a href="#" className="text-white no-underline hover:underline">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
