import React from 'react'
import './mainContentHeader.css'
import MySearchSec from '../mySearchSec/MySearchSec'
export default function MainContentHeader() {
    return (
        <div className='mainContentHeader__handler'>
            <div className="content__header d-flex justify-content-between align-items-center">
                <h1>
                    Hello Saeed 👋🏼,
                </h1>
                <>
                    <MySearchSec />
                </>
            </div>
        </div>
    )
}
