import React,{Component} from 'react'
import {Link} from 'react-router-dom'
require("./nav.css")
class nav extends Component{
	render(){
		return (
			<div className="Nav">
				<ul className="clear">
					<Link to='/'>
						<li>首页</li>
					</Link>
					<Link to='/my'>
						<li>关于我</li>
					</Link>
					<Link to='/technique'>
						<li>技术栈</li>
					</Link>
					<Link to='/experience'>
						<li>点滴历程</li>
					</Link>
					<Link to='/leaveWord'>
						<li>留言</li>
					</Link>
				</ul>
			</div>
		)
	}
}
export default nav