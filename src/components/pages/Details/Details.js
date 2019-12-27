import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Details extends Component {



    render() {

        const movies = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                    <td>
                        <h2>{item.title}</h2>
                        {item.description}
                    </td>
                    <h4>Genre: {item.name}</h4>
                </td>
            </tr>
        })

        return (
            <table className="App">
            <tbody>{movies}</tbody>
            </table>
        )
    }
}


export default connect(mapStoreToProps)(Details);