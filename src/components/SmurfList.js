import React, { useEffect } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux'
import { smurfFetch } from '../actions/index'

 const SmurfList = (props)=> {
    useEffect(() => {
        props.smurfFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((smurf) => 
            <Smurf smurf={smurf}/>       
        )}
    </div>);
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {smurfFetch})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.