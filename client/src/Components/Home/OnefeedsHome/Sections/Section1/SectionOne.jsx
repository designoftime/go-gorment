const SectionOne = ({oneFeedsTwoData, val, styles}) => {
    if(!oneFeedsTwoData[`section_${val}_status`]){
        return;
    }

    return <div className="HerO-section py-5" style={styles.fullBg}>
        <div className="container ">
            {oneFeedsTwoData[`offer_section_${val}_title`]?.en && <h1 className='HerO-Heading wow animate__animated animate__fadeInUp text-center fw-bolder'>{oneFeedsTwoData[`offer_section_${val}_title`].en}</h1>}
            {oneFeedsTwoData[`section_${val}_left_side_img`] && <img className='HerOimage1 d-block mx-auto wow animate__animated animate__fadeInUp' src={oneFeedsTwoData[`section_${val}_left_side_img`]} alt="Image" />}
            {oneFeedsTwoData[`section_${val}_right_side_img`] && <img className='HerOimage2 wow animate__animated animate__fadeInUp' src={oneFeedsTwoData[`section_${val}_right_side_img`]} alt="Image" />}
            {oneFeedsTwoData[`offer_section_${val}_description`]?.en && <p className='text-center mx-auto my-2 fs-5 pb-5 wow animate__animated animate__fadeInUp'>{oneFeedsTwoData[`offer_section_${val}_description`].en}</p>}
        </div>
    </div>
}

export default SectionOne;