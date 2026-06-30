import React, { Fragment } from 'react'
import GetInTouch from '../sections/get-in-touch'
import googlemap from '../sections/google-map'
import GoogleMap from '../sections/google-map'

const ContactPageView = () => {
  return (
    <Fragment>
       <div className='px-4'>
         <GetInTouch />
         <GoogleMap/>
       </div>
    </Fragment>
  )
}

export default ContactPageView