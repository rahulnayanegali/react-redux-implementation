import { BUY_MILK } from './milkType';

// const { BUY_MILK } = require("./milkType")

const initialState = {
    numOfMilkPacks: 10
}


const milkReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_MILK: return {
            ...state,
            numOfMilkPacks: state.numOfMilkPacks - 1
        }
        default: return state
    }
}

export default milkReducer