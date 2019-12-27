import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Home extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES',
        });
    }

    render() {

        return (
            <div>WHAT UP FROM HOME</div>
        )
    }
}

export default connect(mapStoreToProps)(Home);




