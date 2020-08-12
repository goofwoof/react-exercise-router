import React from 'react';

export default  class About extends React.Component{

    render(){
        return <div>
            <p>Product Detail</p>
            <p>Name:{this.props.location.state.name}</p>
            <p>id:{this.props.location.state.id}</p>
            <p>Price:{this.props.location.state.price}</p>
            <p>Quantity:{this.props.location.state.quantity}</p>
            <p>Desc:{this.props.location.state.desc}</p>
            <p>URL:{this.props.location.pathname}</p>
        </div>
    }
}