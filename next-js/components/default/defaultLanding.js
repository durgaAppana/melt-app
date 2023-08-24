import React from 'react'
import listingStyle from "../../styles/default.module.scss";

export default function DefaultLanding() {
    return (
        <section>
            <div className={'row ' + listingStyle['loading-text']}>
                <div className={"col-md-9 col-sm-12 "+listingStyle['load-col']}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={'row ' + listingStyle['row-col']}>
                            <div className={'col-md-7 ' + listingStyle['right-col']}>
                                    <div className={listingStyle.right}></div>
                                </div>
                                <div className={'col-md-5 ' + listingStyle['left-col']}>
                                    <div className={listingStyle.left}></div>
                                    <div className={listingStyle.left}></div>
                                    <div className={listingStyle.left}></div>
                                    <div className={listingStyle.left}></div>
                                    <div className={listingStyle.para}>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'row ' + listingStyle['content-list']}>
                        <div className='col-md-4'>
                            <div className={listingStyle.list}></div>
                            <h4></h4>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className='col-md-4'>
                            <div className={listingStyle.list}></div>
                            <h4></h4>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className='col-md-4'>
                            <div className={listingStyle.list}></div>
                            <h4></h4>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={listingStyle.right}></div>
                    <div className={listingStyle.right}></div>
                </div>
            </div>
        </section>
    )
}
