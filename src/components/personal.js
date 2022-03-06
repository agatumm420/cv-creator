import React, { Component } from 'react';
const styles={
    app:{
     
      justifyItems:'center',
      alignItems:'center',
      display:'grid',
      height:'50vh',
      
      color:'rgba(0,0,100,1)',
      gridTemplateColums:'1fr',
      fontSize:20,
      marginBottom:50,

    }
}
class Personal extends Component{
    constructor(){
        super()
    }
    onFieldChange=(ev)=>{
        const fieldName = ev.target.name;
        const fieldValue = ev.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    render(){
        return <div style={styles.app}>
                     <label className='inpt-title'>Name</label>
                    <input placeholder='Name' name='name' onChange={this.onFieldChange.bind(this)}></input>
                    <label className='inpt-title'>Surname</label>
                    <input placeholder='Surname'name='surname' onChange={this.onFieldChange.bind(this)}></input>
                    <label className='inpt-title'>Email</label>
                    <input placeholder='examplemail@mail.com'name='email'onChange={this.onFieldChange.bind(this)}></input>
                    <label className='inpt-title'>Phone number</label>
                    <input placeholder='+48 000 000 000'name='number' onChange={this.onFieldChange.bind(this)}></input>
                    <label className='inpt-title'>City</label>
                    <input placeholder='Cracow' name='city'onChange={this.onFieldChange.bind(this)}></input>
              </div>
    }
}
export default Personal;