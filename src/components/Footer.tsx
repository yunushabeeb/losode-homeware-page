import { gateways, socials } from '../lib/data';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="text-md lg:text-lg text-white">
      <div className="bg-black py-10">
        <Container>
          <div className="mx-auto flex gap-10 flex-wrap justify-between">
            {/* Column 1 */}
            <div className="min-w-[220px]">
              <img
                src="/assets/images/logo-white-no-tag.svg"
                alt="Losode Logo"
                className="w-32 lg:w-36 mb-5 -ms-4 -mt-4"
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
                <div className="font-semibold mb-2 text-white mt-5 text-lg">
                  We accept:
                </div>
                <div className="flex gap-3 flex-wrap">
                  {gateways.map((gateway, index) => (
                    <img
                      key={index}
                      src={gateway}
                      alt={`Payment Gateway ${index + 1}`}
                      className="w-8 h-6"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="min-w-[220px]">
              <div className="font-bold text-lg lg:text-xl text-center mb-5">
                Useful Information
              </div>
              <div className="flex gap-12 text-[#B5B5B5]">
                <ul className="list-none p-0 m-0 space-y-4">
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
                <ul className="list-none p-0 m-0 space-y-4">
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
            <div className="min-w-[220px]">
              <div className="font-bold text-lg lg:text-xl mb-5">
                Stay in touch
              </div>
              <form action="#" className="h-12 flex flex-wrap mb-12">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-white py-2 px-4"
                />
                <button type="submit" className="bg-white text-black py-2 px-4">
                  Subscribe
                </button>
              </form>
              <div className="mb-4 text-[#B5B5B5]">
                Keep in touch with news, promotions and offers from us
              </div>
              <div className="font-semibold text-lg my-3">Follow us on:</div>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-white no-underline hover:underline"
                  >
                    <img
                      src={social.icon}
                      alt={social.platform}
                      className="w-4 h-4"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="text-black flex flex-row items-center text-base justify-between py-4">
          <p>
            &copy; 2025, Losode Inc.{' '}
            <span className="text-[#B5B5B5] font-bold">
              Always Beyond Borders
            </span>
          </p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
