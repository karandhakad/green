import { createSlice } from "@reduxjs/toolkit";
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import card4 from '../../assets/images/card4.png'

const initialState = {
    cardsList: [
        {title:'Lorem Ipsum 1', price:120, img:card1, id:1, category:'1', initialRating: 0},
        {title:'Lorem Ipsum 2', price:235, img:card2, id:2, category:'2', initialRating: 0},
        {title:'Lorem Ipsum 3', price:315, img:card3, id:3, category:'1', initialRating: 0},
        {title:'Lorem Ipsum 4', price:411, img:card4, id:4, category:'2', initialRating: 0},
        {title:'Lorem Ipsum 5', price:422, img:card2, id:5, category:'1', initialRating: 0},
        {title:'Lorem Ipsum 6', price:343, img:card1, id:6, category:'2', initialRating: 0},
        {title:'Lorem Ipsum 7', price:223, img:card4, id:7, category:'1', initialRating: 0},
        {title:'Lorem Ipsum 8', price:133, img:card3, id:8, category:'2', initialRating: 0},
      ],
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        setData:(state,action) => {
            state.cardsList = action.payload;
        },
        updateCardRating: (state, action) => {
            const { id, rating } = action.payload;
            const card = state.cardsList.find(card => card.id === id);
            if (card) {
                card.initialRating = rating;
            }
        },
    }
})

export const {setData,updateCardRating} = dataSlice.actions;

export default dataSlice.reducer;