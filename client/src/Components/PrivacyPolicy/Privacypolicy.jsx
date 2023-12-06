import React from 'react'
import { useSelector } from 'react-redux'
export const Privacypolicy = () => {

  const privacyPolicyData = useSelector(store => store?.storeSettings?.privacy_policy);

  return (
    <div className='Container'>
        {
          privacyPolicyData?.status ? 
          <>
            <h1 className='m-5 p-5'> {privacyPolicyData?.title?.en} </h1>
            <div dangerouslySetInnerHTML={{__html: privacyPolicyData?.description?.en}}></div>
          </> :
          <h1> Data Not Available </h1>
        }
    </div>
  )
}
