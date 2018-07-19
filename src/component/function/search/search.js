import React, { Component } from 'react';
import search_icon from './搜索.png'
require('./search.css')
class search extends Component{
	render(){
		return(
			<div className="search">
				<div className="search_box">
					<input className="search_input" type="text"/>
					<div className="search_btn"><img src={search_icon} alt=""/></div>
				</div>
			</div>
		)
	}
}
export default search