import React, { Component, useState } from 'react';
const styles={
    app:{
      
      justifyItems:'center',
      alignItems:'center',
      display:'grid',
      height:'20vh',
      
      color:'rgba(0,0,100,1)',
      gridTemplateColums:'1fr',
      fontSize:20,
      marginBottom:50,


    }
}
class Languages extends Component{
    constructor(){
        super()
    }
    Change=(ev)=>{
        const fieldName = ev.target.name;
        const fieldValue = ev.target.value;
        this.props.onChange(fieldName, fieldValue); 
       }
    Submit=()=>{
        this.props.onSubmit(true);
    }
    render(){
        return <div style={styles.app}>

                    <label className='inpt-title'>Language</label>
                    <input onChange={this.Change.bind(this)}  name='language' placeholder='Language'></input>
                    <label className='inpt-title'>Level</label>
                    <input onChange={this.Change.bind(this)}  name='lang_level' placeholder='B2'></input>
                    <button className='submit-btn' onClick={this.Submit.bind(this)}>+</button>
                  
                    


                </div>
    }
}
export default Languages;