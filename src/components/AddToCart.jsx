import React from "react";
import "../assets/style/add-to-cart.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { updateCardRating } from '../store/slices/cardSlice';
import { updateAddToCart } from "../store/slices/cardSlice";

function AddToCart() {
  const cardsList = useSelector((state) => state.data.cardsList);
  const dispatch = useDispatch();

  let filteredCards = cardsList.filter((value, ind) => {
    return value.addToCart == true;
  });

  const handleRatingChange = (id, newValue) => {
    dispatch(updateCardRating({ id, rating: newValue }));
  };

  const handleAddToCart = (id, value) => {
    dispatch(updateAddToCart({ id, addToCart: value }));
  };
  return (
    <>
      <div className="card-list-container">
        <div className="card-list">
          {filteredCards.map((value, index) => {
            return (
              <div className="card" key={value.id}>
                <Link to={`/show-card/${value.id}`}>
                  <img className="card-img" src={value.img} alt="" />
                </Link>
                <div className="card-details">
                  <div className="card-detail">
                    <p className="card-title">{value.title}</p>
                    <p className="card-price">₹{value.price}.00</p>
                    <p className="card-rating">
                      <Rating
                        value={value.initialRating}
                        onChange={(e, newValue) =>
                          handleRatingChange(value.id, newValue)
                        }
                      />
                    </p>
                  </div>
                      <i className="fa-solid fa-cart-shopping"
                        onClick={(e) => handleAddToCart(value.id, false)}>
                        <span className="cart-toolpit">Remove Cart</span>
                      </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AddToCart;
