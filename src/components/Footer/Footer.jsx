import styles from "./Footer.module.css";
import "../../ui_reuse/width_limiter.css"

import logo from "../../assets/svg/Th.svg";
import van from "../../assets/svg/van.svg";
import phone from "../../assets/svg/phone.svg";
import instagram from "../../assets/svg/instagram.svg";
import telegram from "../../assets/svg/telegram.svg";
import facebook from "../../assets/svg/facebook.svg";

function Footer() {

   return (
      <div className={styles.footer}>
         <div className={`${styles.container} width_limiter`} >
            <div className={styles.social_networks}>
               <img src={logo} alt="Logo" />
               <img src={instagram} alt="instagram" />
               <img src={telegram} alt="telegram" />
               <img src={facebook} alt="facebook" />
            </div>
            <div className={styles.call_center}>
               <img src={phone} alt="phone" />
               <div className={styles.number}>
                  <span>Call-центр</span><br />
                  <span>0-800-80-80-80</span>
               </div>
               <div className={styles.days_work}>
                  <span>ПН-ПТ</span><br />
                  <span>8:00 - 22:00</span>
               </div>
            </div>
            <div className={styles.mail}>
               <span>E-mail:</span><br />
               <span>techhaven@gmail.com</span>
            </div>
            <div className={styles.delivery}>
               <img src={van} alt="van" />
               <span>Доставка: Укр. Пошта, Нова Пошта</span>
            </div>
         </div>
      </div>
   )
}

export default Footer;

