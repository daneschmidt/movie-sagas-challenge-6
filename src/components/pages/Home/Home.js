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

        const movies = this.props.store.movies.map((item, index) => {
            return (
                <tr key={index}>
                    <td onClick={(event) => this.clickEvent(event, item.name)}>
                        <img alt="movie poster" src={item.poster}></img>
                    </td>
                    <td>
                        <h2>{item.title}</h2>
                        {item.description}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h2>WHAT UP FROM HOME</h2>
                <table className="App">
                    <tbody>{movies}</tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Home);




