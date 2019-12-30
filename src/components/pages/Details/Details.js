import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Details extends Component {

    render() {

        const movieDetailArray = this.props.store.movies.map((item, index) => {
            return <div key={index}>

                <h2>{item.title}</h2>
                {item.description}
                <h4>Genre: {item.name}</h4>
                <h4>DB ID: {item.id}</h4>

            </div>
        })

        return (
            <table className="App">
                <tbody>{movieDetailArray}</tbody>
            </table>
        )
    }
}

export default connect(mapStoreToProps)(Details);