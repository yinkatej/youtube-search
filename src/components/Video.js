import React from "react";
import "./Video.css";

const Video = ({id})=>{
    console.log(id)
    return(
        <div className="main">
            <iframe className="video" src ={`https://www.youtube.com/embed/${id} 
            frameborder="0" allowfullscreen ng-show="showvideo`} />
            <h3>videoName</h3>
            <p className="meta">Published: {}</p>
            <p className="meta">Date:{}</p>
        </div>

    )
}
export default Video