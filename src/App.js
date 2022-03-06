
import React, { Component } from 'react';
import Preview from './components/preview';
import Personal from './components/personal';
import Radio from './components/radio';
import Education from './components/education';
import Employment from './components/employment';
import './App.css'
import CustomDate from './components/customdate';
import Languages from './components/language';
import Upload from './components/costumupload';
import { ReactDOM } from 'react';
const styles={

     
     form:{
      backgroundColor:'rgba(0,0,0,0.1)',
      color:'rgba(0,0,100,1)',
      width:'100%',
      display:'flex',
      justifyContent:'center'
     }
}
const submit=new Event('submit');

class App extends Component{
  constructor() {
    super();
    this.state = {
       logo: "cv.1png",
 
       
    };
  }
 
  Submit=(val)=>{
   ; 
   this.setState({submitted: val});
   console.log(this.state)
   console.log('state set in app');
  }
  Submit2=(val)=>{
    this.setState({submitted2:val});
    
  }
  Submit3=(val)=>{
    this.setState({submitted3:val});
  }
   Change=(field, value)=>{
    this.setState({[field]: value});

   }
  render(){
    
    return <div className='big-box'>
            
                <Preview  style={this.state.style} name={this.state.name} surname={this.state.surname} email={ this.state.email} number={this.state.number} city={this.state.city} 
                    level={this.state.level} institiution={this.state.institiution} year={this.state.year} major={this.state.major} inroll={this.state.inroll}
                    company={this.state.company} position={this.state.position} date_start={this.state.date_start} date_end={this.state.date_end}
                    language={this.state.language} lang_level={this.state.lang_level} submitted={this.state.submitted} whenSubmitted={this.Submit.bind(this)}
                    submitted2={this.state.submitted2} whenSubmitted2={this.Submit2.bind(false)} submitted3={this.state.submitted3} whenSubmitted3={this.Submit3.bind(false)}
                    
                />
                
         
 
           <div className='scroll-me'>
              <div className='form' style={styles.form}>
                  <h1 className='form-heading'>Fill out this form to generate CV!</h1>
                  <h2 className='form-h2' style={styles.h2}> Choose logo style</h2>
                    <div>
                        
                        <Radio className='form-item'onChange={this.Change.bind(this)}/>
                    </div>
                  <h2 className='form-h2' style={styles.h2}> Personal  information...</h2>
                  <Personal className='form-item' onChange={this.Change.bind(this)}/>
                  <h2 className='form-h2'style={styles.h2}> Education </h2>
                  <Education className='form-item'onChange={this.Change.bind(this)} onSubmit={this.Submit.bind(this)}/>
                  <h2 className='form-h2'style={styles.h2}> Employment </h2>
                  <Employment className='form-item'onChange={this.Change.bind(this)} onSubmit={this.Submit2.bind(this)}/>
                  <h2 className='form-h2'style={styles.h2}> Language </h2>
                  <Languages className='form-item'onChange={this.Change.bind(this)} onSubmit={this.Submit3.bind(this)}/>
              
 
                </div>
           </div>
        </div>
  }
 
}




export default App;




