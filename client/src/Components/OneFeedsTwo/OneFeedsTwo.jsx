import "./OneFeedsTwo.css"
import SectionOne from '../Home/OnefeedsHome/Sections/Section1/SectionOne'
import SectionTwo from '../Home/OnefeedsHome/Sections/Section2/SectionTwo'
import SectionThree from '../Home/OnefeedsHome/Sections/Section3/SectionThree'
import { Productoverview } from '../Home/ProductOverview/Productoverview'
import { getStyles, sliderVal } from '../../utils/Constants'
import { useSelector } from 'react-redux';
import { useEffect } from "react"


export const OneFeedsTwo = () => {

    const dynamicStoreData = useSelector(store => store?.storeSettings);
    const oneFeedsTwoData = dynamicStoreData?.offers;

    if(!oneFeedsTwoData){
        return;
    }

    const oneFeedsTwoComponent = (oneFeedsTwoData,val) => {
        const styles = {
            fullBg: {
                background: `${oneFeedsTwoData[`offer_section_${val}_background_color`]?.en}`,
                color: `${oneFeedsTwoData[`offer_section_${val}_text_color`]?.en}`
            },
            color: {
                color: `${oneFeedsTwoData[`offer_section_${val}_text_color`]?.en}`
            },
            bg: {
                background: `${oneFeedsTwoData[`offer_section_${val}_background_color`]?.en}`
            }
        }

        return {
            "first": <SectionOne oneFeedsTwoData={oneFeedsTwoData} val={val} styles={styles} />,
            "second": <SectionTwo oneFeedsTwoData={oneFeedsTwoData} val={val} styles={styles} />,
            "third": <SectionThree oneFeedsTwoData={oneFeedsTwoData} val={val} styles={styles} />
        }
    }

    return (
        <>
        <div className='sec'>
            <div className="container-fluid g-0">
                {
                    sliderVal.map((val) => {

                        if(!oneFeedsTwoData[`section_${val}_status`]){
                            return;
                        }

                        return <div key={val}> { oneFeedsTwoComponent(oneFeedsTwoData,val)[val] } </div>
                    })
                }
            </div>

            <Productoverview testimonialData={{
                testimonial_status: oneFeedsTwoData?.section_four_status,
                testimonial_title_header: oneFeedsTwoData?.offer_testimonial_title_header,
                testimonial_subtitle: oneFeedsTwoData?.offer_testimonial_subtitle,
                testimonial_banner_img_one: oneFeedsTwoData?.section_four_img_one,
                testimonial_banner_img_two: oneFeedsTwoData?.section_four_img_two,
                testimonial_banner_img_three: oneFeedsTwoData?.section_four_img_three,
                testimonial_title_one: oneFeedsTwoData?.offer_testimonial_title_one,
                testimonial_title_two: oneFeedsTwoData?.offer_testimonial_title_two,
                testimonial_title_three: oneFeedsTwoData?.offer_testimonial_title_three,
                testimonial_description_one: oneFeedsTwoData?.offer_testimonial_description_one,
                testimonial_description_two: oneFeedsTwoData?.offer_testimonial_description_two,
                testimonial_description_three: oneFeedsTwoData?.offer_testimonial_description_three,
            }} styles={getStyles(oneFeedsTwoComponent, 'offer_testimonial_background_color', 'offer_testimonial_text_color')} />
        </div>
        </>
    )
}

