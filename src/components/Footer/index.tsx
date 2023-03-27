import React from "react";
import Logo from "../UI/Logo";
import styles from "./styles.module.css";


import iconFb from "./icons/networks/fb.svg";
import iconInst from "./icons/networks/inst.svg";
import iconTw from "./icons/networks/twitter.svg";

import iconAddress from "./icons/contacts/address.svg";
import iconPhone from "./icons/contacts/phone.svg";
import iconEmail from "./icons/contacts/email.svg";




const Footer: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
                  <div className={styles.logo}> 
                     <Logo />
                     <p>Сеть премиальных квартир с арендой посуточно. Только лучшее качество обслуживания.</p>
                  </div>
                  <div className={styles.contacts}>
                     <h3>Свяжитесь с нами:</h3>
                     <ul className={styles.contactsList}>
                        <li className={styles.contact}>
                           <img src={iconAddress} alt="/" />
                           <p>Россия, Москва, ул. Металлургов, офис</p>
                        </li>
                        <li className={styles.contact}>
                           <img src={iconPhone} alt="/" />
                           <a href="tel:89003001001">8 (900) 300 18-13</a>
                        </li>
                        <li className={styles.contact}>
                           <img src={iconEmail} alt="/" />
                           <a href="mailto: mail@mail.com">mail@rich-aparts.com</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.networks}>
                     <h3>Присоединяйтесь:</h3>
                     <ul className={styles.links}>
                        <li className={styles.link}>
                           <a href="/"><img src={iconFb} alt="/" /></a>
                        </li>
                        <li className={styles.link}>
                           <a href="/"><img src={iconInst} alt="/" /></a>
                        </li>
                        <li className={styles.link}>
                           <a href="/"><img src={iconTw} alt="/" /></a>
                        </li>
                     </ul>
                  </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;