import React, { useState } from 'react'


function FileUpload(){
   const[file,setFile]=useState()

   function handleFile(event){
      setFile(event.target.files[0])
      // console.log(event.target.files[0])
   }

   function handleUpload(){
     const formData= new FormData()
     formData.append('file',file)
     fetch(
       'url',
       {
        method:"POST",
        body:formData
       }
       )
       .then((response)=>response.json())
       .then((result)=>{
         console.log("success",result)
       })
       .catch(error=>{
         console.error("Error:",error)
       })
   }
  return(
    <div>
      <h2> File upload in React Js</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile}/>
        <button>Upload</button>
      </form>
    </div>
  )
}

export default FileUpload