import React, { useState } from "react";
import "../assets/style/card-list.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCardRating } from "../store/slices/cardSlice";
import { updateAddToCart } from "../store/slices/cardSlice";

function CardList() {
  const cardsList = useSelector((state) => state.data.cardsList);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const dispatch = useDispatch();

  const handleRatingChange = (id, newValue) => {
    dispatch(updateCardRating({ id, rating: newValue }));
  };

  const handleAddToCart = (id, value) => {
    dispatch(updateAddToCart({ id, addToCart: value }));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    console.log(e.target.value);
  };

  let filteredCards = selectedCategory
    ? cardsList.filter((card) => card.category === selectedCategory)
    : cardsList;

  filteredCards = selectedPrice
    ? filteredCards.filter((card) => {
        if (selectedPrice === "1") {
          return card.price <= 300;
        } else if (selectedPrice === "2") {
          return card.price >= 300 && card.price <= 500;
        }
        return filteredCards;
      })
    : filteredCards;

  return (
    <>
      <div className="card-list-container">
        <div className="filters">
          <div className="filter1">
            <select className="select1" onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
            <select className="select2" onChange={handlePriceChange}>
              <option value="">Select Price</option>
              <option value="1">Price 100-300</option>
              <option value="2">Price 300-500</option>
            </select>
          </div>
        </div>
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
                  {value.addToCart ?
                    ""
                   : 
                    <i
                      className="cartIcon fa-solid fa-cart-plus"
                      onClick={(e) => handleAddToCart(value.id, true)}
                    >
                      <span className="cart-toolpit">Add To Cart</span>
                    </i>
                    
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardList;
