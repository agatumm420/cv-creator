import React, { Component, useState } from 'react';
const styles={
    div:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',

    },
    heading:{
        right:'5px',
        font:'bold',
    },
    margin:{
        
    }
}
class PrevEdu extends Component{
    constructor(){
        super()
    }
    // Submit=()=>{
    //     this.props.Submit(this.props.level, this.props.institiution, this.props.inroll, this.props.major);
    //   }
    render(){
        return <div className='div-item'>
                        <h2  className='div-heading'>{this.props.level}</h2>    
                        <h2 name='institiution'>{this.props.institiution}</h2>                        
                        <h2 name='major'>{this.props.major}</h2>
                        <h2  className='date'>{this.props.inroll} - {this.props.year}</h2>
                        

              </div>
    }
}
export default PrevEdu;