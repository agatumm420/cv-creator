import ImageUploading from 'react-images-uploading';
import React,{Component, useState} from 'react';
const styles={
  btn:{
     position:'relative',
     bottom:'25px',
  },
  row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',

  },
  column:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',

  },
  img:{
    position:'relative',
    bottom:'40px',
    left:'20px',
  },
  btns:{
    position:'relative',
    bottom:'40px'
  },
  div:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'center',
     gap:'5px'

  }

}
const Upload1 =()=>{
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;



  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  
    return <div >
              <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
              >
              {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                // write your building UI
              <div className="upload__image-wrapper" style={styles.column}>
                
                  <button
                      style={styles.btn}
                      onClick={onImageUpload}
                      {...dragProps}
                      className='submit-btn'
                    >
                      Click or Drop here
                  </button>
                  
                
                
                  &nbsp;
                  
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img style={styles.img} src={image['data_url']} alt="" width="100" />
                                  <div className="image-item__btn-wrapper">
                                    <div style={styles.div}>
                                      <button className='submit-btn' style={styles.btns} onClick={() => onImageUpdate(index)}>Update</button>
                                      <button className='submit-btn' id='remove' style={styles.btns} onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                   
                                  </div>
                            </div>
                ))}
              </div>
            
           )}
          </ImageUploading>
       </div>
  
}
export default Upload1;