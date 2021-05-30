import React from 'react';
import data from '../../components/fakeData/fakeData.json';



const initialState = {
    homePageData: data,
    detailPageData : []
}

const dataReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action.payload);

        switch (action.type) {
            case "Show_Detail" : {
                const newState = {
                    ...state,
                    detailPageData: state.detailPageData.length === 0 ? [...state.detailPageData, action.payload]: state.detailPageData = [action.payload]
                };
                return newState;
            }
            default : {
                return state;
            }
        }
    
};

export default dataReducer;