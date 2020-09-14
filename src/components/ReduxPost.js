import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReduxPost extends Component{
    deletePost=()=>{
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/redux');
    }
    render(){
        console.log(this.props.posts)
        const data=this.props.posts;
        const dataRender=data!==null && data!==undefined?(
            <div className="s12">
                <h4 className="center red-text">{data.title}</h4>
                <img src="https://picsum.photos/id/45/800/300" alt={data.title} />
                <p>
                    {data.body}
                </p>
                <div className="center">
                    <button className="btn grey" onClick={this.deletePost}>
                        Delete Post
                    </button>
                </div>
            </div>
        ):(
            <div className="center">No Post Found!</div>
        );

        return(
            <div className="container">
                <div className="row">
                    {dataRender}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state, ownProps)=>{
    let id= parseInt(ownProps.match.params.id);
    // console.log(typeof id);
    // state.posts.find((post)=>{
    //     console.log(post.id===id);
    // })
    // console.log('post',state.posts.find((post)=>{
    //     return post.id===id
    // }));
    return {
        posts:state.posts.find((post)=>{
                return post.id===id
            })
    };
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deletePost:(id)=>{dispatch({
            type:'DELETE_POST',
            id:id
        })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPost);
