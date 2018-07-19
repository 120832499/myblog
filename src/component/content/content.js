import React, { Component } from 'react';
import axios from 'axios'
require("./content.css")
class home extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	id:this.props.location.query.id,
        	article:{}
        }
    }
    componentDidMount(){
    	this.myAjax()
    }
    myAjax(){
		axios({
			url:"/api/article?id="+this.state.id,
			method:"get"
		}).then((res)=>{
			if(res.status===200){
        		console.log(res)
        		this.setState({
        				article:res.data[0]
        		})
        	}
		})
	}
	render(){
		return(
			<div className="articleone">
				<div className="article_title">{this.state.article.article_name}</div>
				<div className="article_contents" dangerouslySetInnerHTML={{ __html:this.state.article.article_content}}></div>
			</div>
		)
	}
}
export default home