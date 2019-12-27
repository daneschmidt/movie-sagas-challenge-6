import React, { Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

 class Details extends Component {

     render(){

         return(
             <div>YO WE GOT DEM DEETS</div>
         )
     }
 }

 export default connect(mapStoreToProps)(Details);