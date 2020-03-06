import React, { Suspense } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import { getData } from '../store/actions/GetDataAction/GetDataAction';

class TestRedux extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>I am a redux test page</h1>
                <button onClick={() => {this.props.onGetData()}}>Render</button>
            </div>
        );
    }
}

const state = (state, ownProps = {}) => {
    return {
        getDataReducer: state.getDataReducer,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateTo: (location) => {
            dispatch(push(location));
        },
        onGetData: () => dispatch(getData()),
    }
};

export default connect(state, mapDispatchToProps)(TestRedux)
