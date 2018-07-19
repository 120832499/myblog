import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Page from '../page/page.js'

require('./articleList.css')
class articleList extends Component{
	constructor(props){
		super(props)
		this.state = {
			indexList: [],
			totalNum:'',//总记录数
            current: 1, //当前页码
            pageSize:10, //每页显示的条数5条
            goValue:'',
            totalPage:'',//总页数
		}
	}
	componentDidMount(){
		this.myAjax()
	}
	myAjax(num=1){
		axios({
			url:"/api/articlelist?page="+num,
			method:"get"
		}).then((res)=>{
			if(res.status===200){
        		this.setState({
        			indexList: res.data.article,
        			totalNum:res.data.count,
        			totalPage:Math.ceil(res.data.count/this.state.pageSize)
        		})
        	}
		})
	}
	 //点击翻页
    pageClick(pageNum){
        let _this = this;
        if(pageNum !== _this.state.current){
            _this.state.current = pageNum
        }
        _this.state.indexList=[];//清空之前的数据
        _this.myAjax(pageNum)
    }
    //上一步
    goPrevClick(){
        var _this = this;
        let cur = this.state.current;
        if(cur > 1){
            _this.pageClick( cur - 1);
        }
    }
    //下一步
    goNext(){
        var _this = this;
        let cur = _this.state.current;
        if(cur < _this.state.totalPage){
        	console.log(cur)
            _this.pageClick(cur + 1);
        }
    }
    //跳转到指定页
    goSwitchChange(e){
        var _this= this;
        _this.setState({goValue : e.target.value})
       
    }
    goPage(){
    	var value = this.state.goValue;
    	if(!/^[1-9]\d*$/.test(value)){
            alert('页码只能输入大于1的正整数');
        }else if(parseInt(value) > parseInt(this.state.totalPage)){
            alert('没有这么多页');
        }else{
            this.pageClick(value);
        }
    }
	render(){
		return(
			<div className="articleList">
				<ul>
					{
			          this.state.indexList.map(function(item) {
			            return <li>
			            			<Link to={{pathname:'/content',query:{id:item.article_id}}}>
			            				<div className="title"><h1>{item.article_name}</h1></div>
			            			</Link>
			            			
									<div className="contents" dangerouslySetInnerHTML={{ __html:item.article_content}}></div>
								</li>
			          })
			        }
				</ul>
				<Page 
                    totalNum={this.state.totalNum}
          			current={this.state.current}
          			pageSize={this.state.pageSize}                     
                    goValue={this.state.goValue}                     
                    pageClick={this.pageClick.bind(this)}                  
                    goPrev={this.goPrevClick.bind(this)}                
                    goNext={this.goNext.bind(this)} 
                    goPage={this.goPage.bind(this)}                 
                    switchChange={this.goSwitchChange.bind(this)}></Page>	
			</div>
		)
	}
}
export default articleList