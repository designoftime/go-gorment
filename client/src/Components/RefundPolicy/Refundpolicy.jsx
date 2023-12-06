import React from 'react'
import { useSelector } from 'react-redux';

const Refundpolicy = () => {
  const refundPolicyData = useSelector(store => store?.storeSettings?.refund_policy);
  console.log(refundPolicyData)
  return (
    <div className='Container'>
        {
          refundPolicyData?.status ?
          <>
          <h1 className='m-5 p-5'>{refundPolicyData?.title?.en} </h1>
          <div dangerouslySetInnerHTML={{__html: refundPolicyData?.description?.en}}></div>
          </> :
          <h1> Data Not Available </h1>
        }
    </div>
  )
}

export default Refundpolicy;
