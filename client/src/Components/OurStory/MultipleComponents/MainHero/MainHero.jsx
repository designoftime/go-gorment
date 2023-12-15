import React, { useState } from 'react'
import HeroImgOne from '../images/hero-img.webp';
import HeroImgTwo from '../images/hero-img-2.webp';
import "../style.css"
import { TiMediaPlay } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';

const MainHero = ({ourStoryData, val, styles}) => {
    const [modalShow, setModalShow] = useState(false);

    if(!ourStoryData[`section_${val}_status`]){
        return;
    }

    return (
        <>
            <div className={window.innerWidth <= 997 ? "main-hero" : "main-hero row w-100 "} style={styles.fullBg}>
                <div className="left-img col-md-4">
                    <img src={ourStoryData[`section_${val}_left_img`]} className='w-100' alt="" />
                </div>
                <div className={window.innerWidth <= 997 ? "hero-content" : "hero-content col-md-4 w-full"}>
                    <div className="content">
                        <h1 className='main-heading' style={styles.color}> {ourStoryData[`section_${val}_title`].en} </h1>
                        <p className='desc' style={styles.color}>{ourStoryData[`section_${val}_description`].en}</p>
                        <Modal
                            show={modalShow}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={() => setModalShow(false)}
                            className='modal-box'
                        >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body className='embed-frame' >
                            <iframe src={ourStoryData[`section_${val}_button_link`].en} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </Modal.Body>
                        </Modal>
                        <span style={styles.color} className='embed-text'onClick={() => setModalShow(true)}><span className='media-icon'><TiMediaPlay /></span>{ourStoryData[`section_${val}_button_name`].en}</span>

                    </div>
                </div>
                <div className="right-img col-md-4">
                    <img src={ourStoryData[`section_${val}_right_img`]} className='w-100' alt="" />
                </div>
            </div>
        </>
    )
}

export default MainHero;