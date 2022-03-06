import React, { Component } from 'react';
const styles={
    app:{
      
      justifyItems:'center',
      alignItems:'center',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:'25vh',
     
      color:'rgba(0,0,100,1)',
      
      fontSize:20


    }
}
class Radio extends Component{
    constructor(){
        super()
    }
    onValueChange=(ev)=>{
        const fieldName = ev.target.name;
        const fieldValue = ev.target.value;
        this.props.onChange(fieldName, fieldValue);
    }
    render(){
  
        return  <div style={styles.app}>
                    <div className="radio">
               
                        <input type="radio" value="cv1.png" name='style' onChange={this.onValueChange.bind(this)}/> Style 1
        
                    </div>
                    <div className="radio">
           
                        <input type="radio" value="cv2.png" name='style' onChange={this.onValueChange.bind(this)}/>Style 2
        
                    </div>
                    <div className="radio">
        
                            <input  type="radio"  value="cv3.jpg"  name='style'onChange={this.onValueChange.bind(this)}/>Style 3
        
                    </div>
                    <div className="radio">
        
                        <input  type="radio"  value="cv4.png"  name='style' onChange={this.onValueChange.bind(this)}/>Style 4
      
                    </div>
                    </div>
     
    }
}
export default Radio;