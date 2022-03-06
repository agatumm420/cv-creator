import React, { Component, useState } from 'react'
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
const styles={
  logo: {
    width: 50,
    height: 200,
  },
}
const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

const Upload=()=>{
  return     <Uploady
                destination={{ url: "my-server.com/upload" }}
                fileFilter={filterBySize}
                accept="image/*"
                  >
                <UploadButton />
                <UploadPreview styles={styles.logo}/>   
              </Uploady>
  

}
export default Upload;