import React, { useEffect, useState } from "react";
import "../assets/style/show-card.css";
import { useNavigate, useParams } from "react-router-dom";
import cartLogo from "../assets/images/cart-logo.png";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";

function ShowCard() {
  const { cardId } = useParams();

  const [card, setCard] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  const cardList = useSelector((state) => state.data.cardsList);

  useEffect(() => {
    const newCard = cardList.filter((val, ind) => {
      return cardId == val.id;
    });
    setCard(newCard);
  }, []);

  const bannerData = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];

  const navigate = useNavigate();

  const handleBuyCountDecrease = () => {
    if (cardCount >= 1) {
      setCardCount(cardCount - 1);
    } else {
      setCardCount(0);
    }
  };
  const handleBuyCountIncrease = () => {
    setCardCount(cardCount + 1);
  };

  return (
    <>
      <div className="showCard-full-container">
        <div className="banner">
          {bannerData.map((val, ind) => {
            return <p key={ind}>{val}</p>;
          })}
        </div>
      </div>
      <div className="showCard-short-container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <p>&#129092;</p> Back
        </div>

        {card.map((val, ind) => {
          return (
            <div className="showCard-details" key={ind}>
              <div className="card-img">
                <img src={val.img} alt="" />
              </div>
              <div className="card-detail">
                <h1 className="title">{val.title}</h1>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    size="small"
                    readOnly
                    value={val.initialRating}
                  />
                  <p className="rating-count">4 reviews</p>
                </div>
                <div className="prices">
                  <p className="old-price">₹400.00</p>
                  <p className="new-price">₹{val.price}.00</p>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur. Maecenas commodo
                  accumsan maecenas condimentum massa pretium risus eu
                  vulputate. Fringilla venenatis elementum elementum neque morbi
                  non in. Nunc sagittis gravida scelerisque neque integer amet.
                  Gravida et risus dignissim elit sed eu rutrum ullamcorper
                  venenatis.
                </p>
                <div className="share">
                  <p className="share-text">Share item:</p>
                  <i className="fa-brands fa-facebook share-icon"></i>
                  <i className="fa-brands fa-twitter share-icon"></i>
                  <i className="fa-brands fa-pinterest-p share-icon"></i>
                  <i className="fa-brands fa-instagram share-icon"></i>
                </div>
                <div className="cardBtns">
                  <div className="cardBtn1">
                    <p className="buyCountBtn" onClick={handleBuyCountDecrease}>
                      -
                    </p>
                    <p className="buyCount">{cardCount}</p>
                    <p className="buyCountBtn" onClick={handleBuyCountIncrease}>
                      +
                    </p>
                  </div>
                  <div className="cardBtn2">
                    Buy Now <i class="fa-solid fa-cart-arrow-down"></i>
                  </div>
                </div>
                <div className="card-catTag">
                  <p className="catTag-title">
                    Category: <span>Lorem Ipsum</span>
                  </p>
                  <p className="catTag-title">
                    Tag:<span> Lorem Ipsum Lorem Ipsum Lorem Ipsum </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowCard;
