import React, { Component, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import CustomDate from './customdate';
import { format, compareAsc } from 'date-fns'

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
const date1='Start';
const date2='End';
const startDate=new Date();
class Employment extends Component{
    constructor(){
        super()
        this.state = {
            date_start: startDate,
            
          }
    }
     sendDataToParent = (value) => { // the callback. Use a better name
      console.log(value);
      let formated= format(value,'dd/MM/yyyy')
      let start=JSON.stringify(formated);
      this.props.onChange('date_start', start);
      
    };
    sendDataToParent2 = (value) => { // the callback. Use a better name
      console.log(value);
      let formated= format(value,'dd/MM/yyyy')
      let start=JSON.stringify(formated);
      this.props.onChange('date_end', start); 
      
    };
    Change=(ev)=>{
        const fieldName = ev.target.name;
        const fieldValue = ev.target.value;
        this.props.onChange(fieldName, fieldValue); 
       }
    onSubmit=()=>{
      this.props.onSubmit(true);
    }
    render(){
       const {date_start}=this.state;
       
        
        return <div style={styles.app}>
                    <label className='inpt-title'>Company name</label>
                    <input onChange={this.Change.bind(this)}  name='company' placeholder='Company'></input>
                    <label className='inpt-title'>Position</label>
                    <input onChange={this.Change.bind(this)}  name='position' placeholder='Position'></input>
                    <label className='inpt-title'>Start of Employment </label>
                    <CustomDate name='date_start'  date={date1} onSelect={this.sendDataToParent.bind(this)}/>
                 
                    <label className='inpt-title'>End of Employment </label>
                    <CustomDate name='date_end'  date={date2} onSelect={this.sendDataToParent2.bind(this)}/>
                    < button className='submit-btn'onClick={this.onSubmit}>+</button>

              </div>
    }
}
export default Employment;