import React from "react";
import "./Video.css";

const Video = ({id,})=>{
    
    return(
        <div className="main">
            <iframe   allow="autoplay" className="video" title= 'youtube-search' src =
            {`https://www.youtube.com/embed/${id}?  frameborder="0" allowfullscreen ng-show="showvideo`} />
            <h3>Video {}</h3>
            <p className="meta">Published: {}</p>
            <p className="meta">Date:{}</p>
        </div>

    )
}
export default Video