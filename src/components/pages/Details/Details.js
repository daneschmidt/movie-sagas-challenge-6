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
            return <tr key={index}>
            <td>
                <td>
                    <h2>{item.title}</h2>
                    {item.description}
                </td>
                <h4>{item.name}</h4>
                <h2>DANE TEST</h2>
                <p>{JSON.stringify(this.props.reduxState)}</p>
            </td>
        </tr>
        })

        return (
            <table className="App">
                <tbody>{movieDetailArray}</tbody>
            </table>
        )
    }
}

export default connect(mapStoreToProps)(Details);