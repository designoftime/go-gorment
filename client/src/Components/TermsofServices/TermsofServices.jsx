import React from 'react'
import { useSelector } from 'react-redux';

const TermsofServices = () => {
  const TermAndConditionData = useSelector(store => store?.storeSettings?.term_and_condition);

  return (
    <div className='Container'>
      {
        TermAndConditionData?.status ?
        <>
        <h1 className='m-5 p-5'>{TermAndConditionData?.title?.en} </h1>
        <div dangerouslySetInnerHTML={{__html: TermAndConditionData?.description?.en}}></div>
        </> :
        <h1> Data Not Available </h1>
      }
    </div>
  )
}

export default TermsofServices;
