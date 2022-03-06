import React, { Component, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

// import DatePicker from 'react-date-picker';

// const CustomDate=()=>{
//     const [startDate, onChange] = useState(new Date());
//     return <DatePicker onChange={onChange} value={startDate} />
        
// }
const startDate=new Date();
class CustomDate extends Component{
    constructor(){
        super()
        this.state={
            date:startDate,
        }
    }
    handleChange=(value)=>{
        this.setState({
            date:value,
          });
          this.props.onSelect(value)
    }
    render(){
        return <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label={this.props.date}
                    value={this.state.date}
                    onChange={(val)=>{
                        this.handleChange(val)
                        
                    }}
                    renderInput={(params) => <TextField {...params}/> }                
                />
         </LocalizationProvider>
    }
    
}
export default CustomDate