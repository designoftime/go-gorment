import React from 'react'
import { useSelector } from 'react-redux'
export const Privacypolicy = () => {

  const privacyPolicyData = useSelector(store => store?.storeSettings?.privacy_policy);

  console.log(privacyPolicyData);

  return (
    <div className='Container'>
        <h1 className='m-5 p-5'> Privacy Policy </h1>
        {privacyPolicyData?.description?.en}
    </div>
  )
}
