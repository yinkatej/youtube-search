import React from "react";
import "./SearchBar.css";


class SearchBar extends React.Component{
    state = {input: ''}

    onInputChange= (e)=>{
        this.setState({input:e.target.value})
            }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.input)
    }
    render(){
        return(
            <div className="ui segment search-bar">
            <form className="ui form icon" onSubmit={this.onSubmit}>
                <div className="field">
                    <label> Search Videos</label>
                    <input type="text" placeholder="Search" 
                    onChange={this.onInputChange} value ={this.state.input} />
                </div>
            </form>
            </div>
        );
    }
} 
export default SearchBar;