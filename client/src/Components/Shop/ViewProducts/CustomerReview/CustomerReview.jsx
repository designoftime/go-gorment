import React, { useEffect, useState } from "react";
import "./CustomerReview.css";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import Accordian from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "react-bootstrap/Pagination";
import requests from "../../../../Services/httpService";
import { toast } from "react-toastify";

export const CustomerReview = ({ productId }) => {
  const reviewSliderVal = [
    {
      id: 1,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 2,
      customername: "Richard ",
      verifyc: `Verified by shop`,
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 3,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 4,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 5,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 6,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 7,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 8,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 9,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 10,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 11,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 12,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
    {
      id: 13,
      customername: "Lozzy",
      verifyc: "verified",
      reviewtitle: "Delightful",
      review:
        "My favourite treat in the whole world. Absolutely delicious, sort of wished they came in a smaller bag to stop the snaccidents but we move ya know they’re just too yummy",
      reviewstar: "5",
    },
    {
      id: 14,
      customername: "Richard ",
      verifyc: "Verified by shop",
      reviewtitle: "Great",
      review:
        "Amazing product, everyone in my house loves these, even my 15 year old girls who are very difficult to please!",
      reviewstar: "4",
    },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [responeData, setRespnesData] = useState(1);
  const itemPerPage = 5;
  const [ratingChange, setRatingChange] = useState({
    star1: true,
    star2: true,
    star3: true,
    star4: true,
    star5: true,
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  const clickRatingChange = (clickedStar) => {
    clickedStar.preventDefault();
    setRatingChange(() => {
      const newRating = {};
      for (let i = 1; i <= 5; i++) {
        newRating[`star${i}`] = i <= clickedStar;
      }
      return newRating;
    });
  };
  const handleStarHover = (star) => {
    setHoveredStar(star);
  };
  const handleReviewAccordian = () => {
    setIsCollapsed(!isCollapsed);
  };
  const renderReviewSlide = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = currentPage + itemPerPage;
    console.log(responeData.data);

    const paginatedReviews = responeData?.data?.slice(startIndex, endIndex);
    let slides = [];
    for (let i = 0; i < paginatedReviews.length; i += 5) {
      slides.push(
        <div className="review-main-container container">
          {responeData?.data?.slice(i, i + 5).map((items, id) => {
            return (
              <div key={id}>
                <hr
                  style={{ color: "#412f59", height: "10px", width: "100%" }}
                />
                <div className=" my-1 review-header-container d-flex justify-content-between">
                  <div className="reviewTitle">
                    {items.emailStatus == true ? (
                      <span>
                        <span className="activeVerified fw-bolder">
                          Verified
                        </span>{" "}
                        <span className="fw-bolder">{items.name}</span>
                      </span>
                    ) : (
                      <span>
                        <span className="fw-bolder">{items.email}</span>{" "}
                        <span className="shopVerified fw-bolder">
                          {items.name}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="customerReviewStar">
                    {[1, 2, 3, 4, 5].map((index) => {
                      let starArray = [];
                      // let remainArray = [];
                      if (items.reviewstar == index) {
                        starArray.push(
                          [1, 2, 3, 4, 5].slice(
                            index[0],
                            index[items.reviewstar - 1]
                          )
                        );
                        // remainArray.push([1, 2, 3, 4, 5]).slice(index[starArray.length], index[starArray.length+([1,2,3,4,5].length-starArray.length)])
                        starArray.map((index) => {
                          return (
                            <span className="reviewcstar" key={index}>
                              <IoIosStar />
                            </span>
                          );
                        });
                      }

                      {
                        // if (starArray.length >= 0) {
                        //     starArray.map((index) => {
                        //         return <span className="reviewcstar" key={index}><IoIosSta className='reviewedStarfilled' /></span>
                        //     })
                        // }
                        // else if (remainArray.length != 0) {
                        //     remainArray.map((index) => {
                        //         return <span className="reviewcstar" key={index}><IoIosStarOutline className='reviewedStarBlank' /></span>
                        //     })
                        // }
                      }
                    })}
                  </div>
                </div>
                <div className="reviewContent">
                  <p>{items.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return slides;
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const isValidData = (data) => {
    for (let objData in data) {
      if (
        (typeof data[objData] == "string" && data[objData].length == 0) ||
        (typeof data[objData] == "number" && data[objData] == null)
      ) {
        return false;
      }
    }
    return true;
  };
  const totalReviewPages = Math.ceil(reviewSliderVal.length / itemPerPage);
  const handleProductReview = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.fullname.value,
      email: e.target.email.value,
      rating: e.target.rating.value,
      reviewTitle: e.target.review_title.value,
      review: e.target.review_descriptions.value,
      productId: productId,
      emailStatus: user?.email ? true : false,
      user: user?._id,
    };
    if (isValidData(data)) {
      const postReviews = async () => {
        await requests.post("/reviews/add", data);
        toast("Review Created Successfully !! ");
        setIsCollapsed(false);
      };
      postReviews();
    } else {
      toast.error("Please Fill All Fields");
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const respones = async () => {
      const res = await requests.get(`/reviews/by-product/${productId}`);
      setRespnesData(res);
    };
    respones();
  }, [setRespnesData]);
  console.log(responeData)
  return (
    <>
      <div className="CustomerReview-section">
        <div className="container">
          <h1 className="CR-header text-uppercase text-center my-5">
            Customer Review
          </h1>
          <div className="ReviewInfo">
            <div className="totalReview">
              <div className="totalReviewStar">
                <span>
                  <IoIosStar />
                </span>{" "}
                <span />
                <span>
                  <IoIosStar />
                </span>{" "}
                <span />
                <span>
                  <IoIosStar />
                </span>{" "}
                <span />
                <span>
                  <IoIosStar />
                </span>{" "}
                <span />
                <span>
                  <IoIosStarHalf />
                </span>{" "}
                <span />
              </div>
              <p className="totalReviewText fw-bold">Based on 40 reviews</p>
            </div>
            <div className="reviewCategory">
              <div className="reviewSubCategory">
                <div className="RSC-stars">
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                </div>
                <div className="reviewBar">
                  <ProgressBar now={88} className="reviewbar" />
                </div>
                <div className="RSC-calculate">
                  <span>88%</span> <span />
                  <span>(35)</span>
                </div>
              </div>
              <div className="reviewSubCategory">
                <div className="RSC-stars">
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                </div>
                <div className="reviewBar">
                  <ProgressBar now={3} className="reviewbar" />
                </div>
                <div className="RSC-calculate">
                  <span>3%</span> <span />
                  <span>(1)</span>
                </div>
              </div>
              <div className="reviewSubCategory">
                <div className="RSC-stars">
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                </div>
                <div className="reviewBar">
                  <ProgressBar now={5} className="reviewbar" />
                </div>
                <div className="RSC-calculate">
                  <span>5%</span> <span />
                  <span>(2)</span>
                </div>
              </div>
              <div className="reviewSubCategory">
                <div className="RSC-stars">
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                </div>
                <div className="reviewBar">
                  <ProgressBar now={0} className="reviewbar" />
                </div>
                <div className="RSC-calculate">
                  <span>0%</span> <span />
                  <span>(0)</span>
                </div>
              </div>
              <div className="reviewSubCategory">
                <div className="RSC-stars">
                  <span>
                    <IoIosStar />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                  <span>
                    <IoIosStarOutline />
                  </span>{" "}
                  <span />
                </div>
                <div className="reviewBar">
                  <ProgressBar now={5} className="reviewbar" />
                </div>
                <div className="RSC-calculate">
                  <span>5%</span> <span />
                  <span>(2)</span>
                </div>
              </div>
            </div>
            <div className="writeReview">
              {/* <div> */}
              <button
                className="reviewaccordionbtn"
                onClick={handleReviewAccordian}
              >
                {isCollapsed ? "Cancel review" : "Write review"}
              </button>
              {/* </div> */}
            </div>
          </div>
          <div className="my-5 reviewAccordian">
            <Collapse isOpened={isCollapsed}>
              <form onSubmit={handleProductReview}>
                <div className="reviewForm">
                  <div className="reviewInputs">
                    <label htmlFor="name" className="reviewlable fw-bolder">
                      Name{" "}
                      <span>
                        (displayed publicly like
                        <select name="namedisplayed" id="namedisplayed">
                          <option value="John Smith">John Smith</option>
                          <option value="John S.">John S.</option>
                          <option value="J.S.">J.S.</option>
                          <option value="Anonymous">Anonymous</option>
                        </select>
                        )
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2 reviewInput"
                      placeholder="Enter Your Name (public)"
                      name="fullname"
                      value={user ? user?.name : ""}
                    />
                  </div>
                  <div className="reviewInputs">
                    <label htmlFor="email" className="reviewlable fw-bolder">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2 reviewInput"
                      placeholder="Enter Your Email (private)"
                      name="email"
                      value={user ? user?.email : ""}
                    />
                  </div>
                  <div className="reviewInputs">
                    <label htmlFor="rating" className="reviewlable fw-bolder">
                      Rating
                    </label>
                    <br />
                    <input
                      type="number"
                      placeholder="rate us"
                      name="rating"
                      min={1}
                      max={5}
                    />
                  </div>
                  <div className="reviewInputs">
                    <label
                      htmlFor="reviewtitle"
                      className="reviewlable fw-bolder"
                    >
                      Review Title
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2 reviewInput"
                      placeholder="Give Your Review Title"
                      name="review_title"
                    />
                  </div>
                  <div className="reviewInputs">
                    <label htmlFor="review" className="reviewlable fw-bolder">
                      Review
                    </label>
                    <textarea
                      rows={3}
                      type="text"
                      className="form-control mt-2 reviewInput"
                      placeholder="Write Your Comments here..."
                      name="review_descriptions"
                    />
                  </div>
                  {/* <div className='reviewInputs'>
                                        <label htmlFor="media" className='reviewlable fw-bolder'>Photo/Video(Optional)</label><br />
                                        <input type="file" accept='video/*,image/*' className='reviewMediaInput'/>
                                    </div> */}
                  <p className="my-3 fs-5 fw-bold">
                    How we use your data: We’ll only contact you about the
                    review you left, and only if necessary. By submitting your
                    review, you agree to Judge.me’s{" "}
                    <Link
                      style={{ color: "#412f59" }}
                      to="/policies/terms-of-service"
                    >
                      {" "}
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/polices/privacy-policy"
                      style={{ color: "#412f59" }}
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="reviewsubmitbtn">Submit review</button>
                  </div>
                </div>
              </form>
            </Collapse>
          </div>
        </div>
        {renderReviewSlide()}
        <Pagination size="sm" className="justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          {Array.from({ length: totalReviewPages }, (_, index) => {
            return (
              <Pagination.Item
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            );
          })}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
};
