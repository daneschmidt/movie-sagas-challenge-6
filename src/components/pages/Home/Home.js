import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Home extends Component {

    componentDidMount() {

        this.props.dispatch({
            type: 'GET_MOVIES',
        });
    }

    clickEvent = (event, id) => {
  
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: id,
        })
        this.props.history.push('/details');
    }
   
    render() {

        const movieArray = this.props.store.movies.map((item, index) => {
            return (
                <tr key={index}>
                    <td onClick={(event) => this.clickEvent(event, item.name)}>
                        <img src={item.poster}></img>
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
            <table>
                <tbody>{movieArray}</tbody>
            </table>
            <p>{JSON.stringify(this.props.reduxState)}</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Home);




