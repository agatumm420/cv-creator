import Select from 'react-select';
import React from 'react';
const CustomSelect=()=>{
    const options = [
        { value: 'Highschool Graduate', label: 'Highschool ' },
        { value: 'BA', label: 'BA' },
        { value: 'BEng', label: 'BEng' },
        { value: 'MA', label:'MA'},
        {value:'student ', label:'student'}
        
      ]
      return <Select  options={options} />
}
export default CustomSelect;