import React from 'react'
import { useSelector } from 'react-redux';
import FeaturePromo from '../Home/FeaturePromo/Featurepromo';

const ContactUs = () => {

    const homeData = useSelector(store => store?.storeSettings?.home);

    if(!homeData){
        return;
    }

    const handleMap = (e) => {
        console.log(e);
    }

    // console.log(homeData);

  return (
    <div className=''>
        <div  style={{
            width: "100%",
            height: "100%",
            margin: "15rem 2rem"
        }}> 
            <h1> STORE LOCATOR </h1>
            <p>In need of some immediate snack-tisfaction? Simply search your postcode or location below and we'll show you the closest places to you that have our snacks on their shelves!</p>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0105128685427!2d75.88653107476269!3d22.764991125892525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039593db4da5%3A0x2a2d1d2c5a78962c!2sDesign%20of%20time%20co.!5e0!3m2!1sen!2sin!4v1702883009621!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" onClick={handleMap} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {homeData && <FeaturePromo featurePromoData={homeData} />}
    </div>
  )
}

export default ContactUs;