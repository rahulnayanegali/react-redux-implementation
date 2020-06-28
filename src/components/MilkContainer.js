import React from 'react'
import { buyMilk } from '../redux'
import { connect } from 'react-redux';

function MilkContainer(props) {
    return (
        <div>
            <h2>Number of milk packs {props.numOfMilkPacks}</h2>
            <button onClick={props.buyMilk}>Buy Milk</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfMilkPacks: state.numOfMilkPacks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMilk: () => {
            dispatch(buyMilk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer)
