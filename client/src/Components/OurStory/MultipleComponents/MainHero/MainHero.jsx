import React, { useState } from 'react'
import HeroImgOne from '../images/hero-img.webp';
import HeroImgTwo from '../images/hero-img-2.webp';
import "../style.css"
import { TiMediaPlay } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';

const MainHero = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className={window.innerWidth <= 997 ? "main-hero" : "main-hero row"}>
                <div className="left-img">
                    <img src={HeroImgOne} alt="" />
                </div>
                <div className={window.innerWidth <= 997 ? "hero-content" : "hero-content col-md-12"}>
                    <div className="content">
                        <h1 className='main-heading'>it's olly</h1>
                        <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ipsam impedit quaerat accusamus, neque maxime aliquam optio ratione. Impedit ab soluta accusamus maiores aut exercitationem libero eius nobis nihil ullam? Reprehenderit, laudantium!</p>
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
                            <iframe src="https://www.youtube.com/embed/wGcxuVSIMX4?si=X-sQoMLLfsMD1Yew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Modal.Body>
                        </Modal>
                        <span className='embed-text'onClick={() => setModalShow(true)}><span className='media-icon'><TiMediaPlay /></span> Click To View</span>

                    </div>
                </div>
                <div className="right-img">
                    <img src={HeroImgTwo} alt="" />
                </div>


            </div>

        </>
    )
}

export default MainHero