import React from 'react'
import styles from '../../styles/contact.module.css'
import SubscribeMail from '../common/subscribeMail'
export default function TopSection() {
    return (
        <div className={styles.main}>
            <div>
                <h1>Contact Us</h1>
                <h2>Mumbai Main Office</h2>
                <p>2-5, 2nd Flr, Kohinoor Estate,
                    165 Tulsi Pipe Road,
                    Lower Parel,
                    Mumbai 400013.</p>
                <div className={styles.mobile}>
                    Tel: +91.22.42363600
                    Fax: +91.22.42363636
                </div>
                <h3>For Editorial or Advertising, write to animesh@kyoorius.com</h3>
            </div>
            <div>
                <SubscribeMail />
            </div>
        </div>
    )
}
