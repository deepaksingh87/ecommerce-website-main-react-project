import axios from 'axios';
import React, { Component } from 'react';
import './Movie.css';
import Movie from '../data/movie';
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            search:null
        }
    }
    searchMovie(event){
         let keywords=event.target.value;
         this.setState({search:keywords})
    }
    componentWillMount() {
        // axios.get('https://raw.githubusercontent.com/meilisearch/MeiliSearch/main/datasets/movies/movies.json')
        //     .then(res => {
        //         const person = res.data;
        //         console.log(person);
        //         this.setState({ person })
        //     })
        this.setState({person:Movie})
    }

        

    render() {
        const items=this.state.person.filter((data)=>{
            if(this.state.search==null)
            return data
            else if(data.title.toLowerCase().includes(this.state.search.toLowerCase()) || data.title.toUpperCase().includes(this.state.search.toUpperCase())){
                return data
            }
        }).map((data,index) => {
            return (
                <div key={index} style={{display:"inline-block",cursor:"pointer"}}>
                <img src={data.poster} alt={data.title} style={{width:"300px",height:"300px"}} key={index} className="movie-image"/>
                </div>
            )
        })

        return (
            <div style={{textAlign:"center"}} className="space-from-top">
                <input type="text" style={{textAlign:"center",width:"100%"}} placeholder="search movie which you want" onChange={(e)=>this.searchMovie(e)}/><br/><br/>
                {items}
            </div>
            )
    }
}

