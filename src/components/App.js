import React  from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import youTube from "./youTube";
import Video from "./Video";
import VideoList from "./VideoList";


class App extends React.Component{
    
     state = {videoList: [],
                selected: ''}           

    onFormSubmit= async (term)=>{
        const result = await youTube.get('/search', {
            params: {
                q: term
            }
        });

        const response = result.data.items
        
       this.setState({ videoList: response })
    }
    onSelected = (selected) => {
        this.setState({selected: selected})
        
    }
    
    render(){
            return(
            <div className="container app">
                <div className=" ">
                    <SearchBar onFormSubmit={this.onFormSubmit} />
                </div>

                <div className="video">
                    <div className="video-scren">
                        <Video  id = {this.state.selected} />
                    </div> 
                    <div className="video-list" >
                    helo <VideoList  result={this.state.videoList}  selected={this.onSelected} />
                    </div>
                       
                    
                </div>
                
            
            </div>
    );}
    
}
export default App;