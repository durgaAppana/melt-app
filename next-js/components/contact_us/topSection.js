import React from 'react'
import styleContact from '../../styles/contact.module.scss'
import ContactUs from './contactUs'
import SubscribeMail from '../common/subscribeMail'

export default function TopSection() {
    return (
        <div className='row'>
            <div className={'col-md-8 col-sm-12'}>
                <address>
                    <h4>Mumbai Main Office</h4>
                    <p>2-5, 2nd Flr, Kohinoor Estate,<br />
                        165 Tulsi Pipe Road,<br />
                        Lower Parel,<br />
                        Mumbai 400013.</p>
                    <p className={styleContact.mobile}>
                        Tel: +91.22.42363600<br />
                        Fax: +91.22.42363636
                    </p>
                    <p>For Editorial or Advertising, write to <a href="mailto:animesh@kyoorius.com">animesh@kyoorius.com</a></p>
                </address>
                <ContactUs />
            </div>

            <div className={'col-md-4 col-sm-12'}>
                <SubscribeMail />
            </div>
        </div>
    )
}
