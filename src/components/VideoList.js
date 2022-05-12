import React from "react";
import './VideoList.css';

const VideoList = (props) =>{
    const {result, selected} = props
   

    
   
   

 const List = result.map(result=>{
        
        const {id, snippet} = result
        const img = snippet.thumbnails.default.url;
        return (
        <div key={id.videoId} onClick = {()=>{selected(id.videoId)}} className="image">
            <img src={img}  alt={img} />
            
            <div className="text"><p> {snippet.title } </p></div>
            
        </div>

        
    )})
     return List 
    
}
export default VideoList;