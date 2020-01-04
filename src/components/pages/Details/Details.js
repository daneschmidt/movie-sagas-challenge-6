import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Details extends Component {

    componentDidMount(title, description, name) {

        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: {
                title,
                description,
                name,
            }
        });
    }

    render() {

        const movieDetailArray = this.props.store.movies.map((item, index) => {
            return <div key={index}>
                <h2>{item.title}</h2>
                <h5>{item.description}</h5>
                <h4>{item.name}</h4>
                <h2>DANE TEST</h2>
                <p>{JSON.stringify(this.props.reduxState)}</p>
                <h5>{item.id}</h5>
            </div>
        });

        return (
            <table className="App">
                <tbody>{movieDetailArray}</tbody>
            </table>
        )
    }
}

export default connect(mapStoreToProps)(Details);