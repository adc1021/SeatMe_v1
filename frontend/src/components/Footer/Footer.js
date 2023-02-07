import './footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return(
    <>
      <div className="footer">
        <div id="footer-wrapper-1">
          <div id='footer-wrapper-2'>
          <div className='flex-box-row'>
            <div className='footer-column-1'>
              <div className='footer-headers'>
                Discover
              </div>
              <ul className='footer-ul'>
                <li className='footer-li'>Food Wishes</li>
                <li className='footer-li'>Hungry Hungry Blogger</li>
                <li className='footer-li'>Jackson's Shoe</li>
                <li className='footer-li'>Restaurants worth your time</li>
                <li className='footer-li'>Piazza's Pizza Parlor</li>
              </ul>
            </div>
            <div className='footer-column-1'>
              <div className='footer-headers'>
                OpenTable
              </div>
              <ul className='footer-ul'>
                <li className='footer-li'>About Me</li>
                <li className='footer-li'>Blog</li>
                <li className='footer-li'>Careers</li>
                <li className='footer-li'>Press</li>
              </ul>
            </div>
            <div className='footer-column-1'>
              <div className='footer-headers'>
                More
              </div>
              <ul className='footer-ul'>
                <li className='footer-li'>OpenTable for iOS</li>
                <li className='footer-li'>OpenTable for Android</li>
                <li className='footer-li'>Affiliate Program</li>
                <li className='footer-li'>Contact Us</li>
              </ul>
            </div>
            <div className='footer-column-1'>
              <div className='footer-headers'>
                My Sites
              </div>
              <ul className='footer-ul'>
                <li className='footer-li'>OpentTable.jp</li>
                <li className='footer-li'>OpentTable.de</li>
                <li className='footer-li'>OpentTable.es</li>
                <li className='footer-li'>OpentTable.ca</li>
                <li className='footer-li'>OpentTable.hk</li>
                <li className='footer-li'>OpentTable.ie</li>
                <li className='footer-li'>OpentTable.sg</li>
                <li className='footer-li'>OpentTable.nl</li>
                <li className='footer-li'>OpentTable.com.mx</li>
                <li className='footer-li'>OpentTable.co.uk</li>
                <li className='footer-li'>OpentTable.com.au</li>
                <li className='footer-li'>OpentTable.ae</li>
                <li className='footer-li'>OpentTable.co.th</li>
                <li className='footer-li'>OpentTable.it</li>
                <li className='footer-li'>OpentTable.com.tw</li>
              </ul>
            </div>
            <div className='footer-column-1'>
              <div className='footer-headers'>
                Businesses
              </div>
              <div className='flex-box-column'>
                <NavLink to={"#"} className='business-link'>
                  Delight More Diners
                  <span>
                    <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg"
                    focusable="false">
                      <g fill='none' fillRule='evenodd'>
                        <path d='M8.65685425,9.65685425 L8.65685425,15.1568542
                        C8.65685425,15.4329966 8.43299662,15.6568542
                        .15685425,15.6568542 L7.15685425,15.6568542
                        C6.88071187,15.6568542 6.65685425,15.4329966
                        6.65685425,15.1568542 L6.65685425,9.15685425
                        L6.65685425,8.15685425 C6.65685425,7.88071187
                        6.88071187,7.65685425 7.15685425,7.65685425
                        L14.1568542,7.65685425 C14.4329966,7.65685425
                        14.6568542,7.88071187 14.6568542,8.15685425
                        L14.6568542,9.15685425 C14.6568542,9.43299662
                        14.4329966,9.65685425 14.1568542,9.65685425
                        L8.65685425,9.65685425 Z'
                        transform='translate(10.656854, 11.656854) scale(-1, 1)
                        rotate(-45.000000) translate(-10.656854, -11.656854)'
                        fill='#fff'>

                        </path>
                      </g>
                    </svg>
                  </span>
                </NavLink>
                <NavLink to={"#"} className='business-link'>
                  Open for Business Blog
                  <span>
                    <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg"
                    focusable="false">
                      <g fill='none' fillRule='evenodd'>
                        <path d='M8.65685425,9.65685425 L8.65685425,15.1568542
                        C8.65685425,15.4329966 8.43299662,15.6568542
                        .15685425,15.6568542 L7.15685425,15.6568542
                        C6.88071187,15.6568542 6.65685425,15.4329966
                        6.65685425,15.1568542 L6.65685425,9.15685425
                        L6.65685425,8.15685425 C6.65685425,7.88071187
                        6.88071187,7.65685425 7.15685425,7.65685425
                        L14.1568542,7.65685425 C14.4329966,7.65685425
                        14.6568542,7.88071187 14.6568542,8.15685425
                        L14.6568542,9.15685425 C14.6568542,9.43299662
                        14.4329966,9.65685425 14.1568542,9.65685425
                        L8.65685425,9.65685425 Z'
                        transform='translate(10.656854, 11.656854) scale(-1, 1)
                        rotate(-45.000000) translate(-10.656854, -11.656854)'
                        fill='#fff'>

                        </path>
                      </g>
                    </svg>
                  </span>
                </NavLink>
              </div>
            <div className='footer-headers'>
              Check Me Out On
            </div>
            <div className='social-button-wrapper'></div>
              <a className='social-button' target='blank' href="https://www.linkedin.com/in/anthony-chiodi-b5a8a9167">
                <img src="//cdn.otstatic.com/cfe/11/images/linkedin-b5ed36.svg"></img>
              </a>
            </div>
          </div>
          </div>
          <div className='ownership-div'>
            <span className='ownership-span'>
            SeatMe is NOT part of Booking Holdings, the world leader in online travel and related services.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
