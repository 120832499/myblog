import React, { Component } from 'react';
require('./page.css')
class PageComponent extends  Component{
    render(){
        let _this = this;
        //当前页码
        let cur = this.props.current;
        //显示分页按钮
        let pageNum = [];
        let begin;
        let len;
        let totalPage =Math.ceil(_this.props.totalNum/_this.props.pageSize) 
        if(totalPage > 5){
            len = 5;
            if(cur >= (totalPage-2)){
                begin = totalPage - 4;
            }else if(cur <= 3){
                begin = 1;
            }else{
                begin = cur - 2;
            }
        }else{
            len = totalPage;
            begin = 1;
        }
        //根据返回的总记录数计算当前页显示的数据
        for(let i = 0; i < len; i ++){
            let cur = this.props.current;
            let showI = begin + i;
            if(cur === showI){
                pageNum.push({num : showI, cur : true});
            }else{
                pageNum.push({num : showI, cur : false});
            }
         }
           
        return(
          <div>
              <div className="paginationDiv">
                  
                    <span className='num_page'>
                      <a className={this.props.current === 1? 'prev disable' : 'prev'} onClick={this.props.goPrev.bind(this)}>上一页</a>
                        {
                             pageNum.map(function(curPageNum){
                                return(
                                    <a onClick = {_this.props.pageClick.bind(_this,curPageNum.num)} className={curPageNum.cur ? 'num current' : 'num'}>{curPageNum.num}</a>
                                )
                            })
                        }
                      <a className={this.props.current === totalPage? 'next disable' : 'next'} onClick={this.props.goNext.bind(this)}>下一页</a>
                    </span>
                  
                  <div className="rightDiv">
                      总共<span className="num-total">{_this.props.totalNum}</span>条，
                      共
                      <span className="num-total">{totalPage}</span>
                      页，
                      当前页码<span className="num-total">{this.props.current}</span>，到第
                      <input type="text" value={_this.props.goValue} onChange={this.props.switchChange.bind(this)} />
                      页
                      <span className='gobtn' onClick={this.props.goPage.bind(this)}>go</span>
                  </div>
              </div>
          </div>
        )
    }
}
export default PageComponent