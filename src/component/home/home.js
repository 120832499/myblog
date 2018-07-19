import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import ArticleList from '../function/articleList/articleList.js'
import Search from '../function/search/search.js'
require("./home.css")
class home extends Component{
	render(){
		return(
			<div className="home clear">
				<ArticleList></ArticleList>
				<div className="funcPart">
					<Search></Search>
				</div>
			</div>
		)
	}
}
export default home