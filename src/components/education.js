import React, { Component, useEffect, useState } from 'react';
import Select from 'react-select';
import CustomSelect from './select';
const styles={
      app:{
        
        justifyItems:'center',
        alignItems:'center',
        display:'grid',
        height:'50vh',
       
        color:'rgba(0,0,100,1)',
        gridTemplateColums:'1fr',
        fontSize:20,
        marginBottom:100,


      }
}
const options = [
  { value: 'Highschool Graduate', label: 'Highschool ' },
  { value: 'BA', label: 'BA' },
  { value: 'BEng', label: 'BEng' },
  { value: 'MA', label:'MA'},
  {value:'student ', label:'student'}
  
]
class Education extends Component{
  constructor() {
      super();
      this.state = {
        selectedOption: null,
      }
    
    }

    Change=(ev)=>{
      const fieldName = ev.target.name;
      const fieldValue = ev.target.value;
      this.props.onChange(fieldName, fieldValue); 
     }
     handleChange = (selectedOption) => {
      this.setState({ selectedOption }, () =>{
        console.log(`Option selected:`, this.state.selectedOption);
        this.props.onChange('level', this.state.selectedOption.value);
      }
       
      );
      
    };
    Submit=()=>{
      console.log('submited from edu');
      this.props.onSubmit(true);
    }

 render(){
  const { selectedOption } = this.state;
    
    
        return <div style={styles.app}>
                    <label> Choose your level of education..</label>
                    <Select options={options} value={selectedOption} onChange={this.handleChange}/>
                    <label className='inpt-title'>Name of the Institiution</label>
                    <input onChange={this.Change.bind(this)}  name='institiution' placeholder='Institiution'></input>
                    <label className='inpt-title'>Inrollment year</label>
                    <input onChange={this.Change.bind(this)} type='number' name='inroll'placeholder='2022' id='major'></input>
                    <label className='inpt-title'>Graduation Year</label>
                    <input onChange={this.Change.bind(this)} type='number' name='year'placeholder='2022' id='major'></input>
                    <label className='inpt-title'>Major</label>
                    <input onChange={this.Change.bind(this)} name='major'placeholder='Major' id='major'></input>
                    <button className='submit-btn' onClick={this.Submit}> + </button>

              </div>
      }
}
export default Education;