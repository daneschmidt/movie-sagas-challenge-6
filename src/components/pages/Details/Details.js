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

        const movies = this.props.store.movies.map((item, index) => {

            return <div key={index}>
                <img src={item.poster} />
                <h3>{item.title}</h3>
                {item.description}
                <h4>{item.name}</h4>
            </div>
        })

        return (
            <div>
                <h2>YO WE GOT DEM DEETS</h2>
                <table className='App'>
                    <tbody>{movies}</tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Details);