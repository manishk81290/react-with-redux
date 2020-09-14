import React, {Component} from 'react';
//import Axios from 'axios';
import {Link} from 'react-router-dom';
import InstaImage from '../img/instagram.png';
import {connect} from 'react-redux';

class ReduxData extends Component{
    // state={
    //     posts:[]
    // };

    // componentDidMount=()=>{
    //     Axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //         this.setState({
    //             posts:res.data.slice(0,10)
    //         })
    //     })
    // }

    render(){
        const {posts}=this.props;
        const postList=posts.length?(
            posts.map(post=>{
                post.imgUrl='https://picsum.photos/id/'+Math.floor(Math.random() * 100)+'/200/300';
                return(
                    <div className="col s6" key={post.id}>
                        <div className="card">
                            <img src={InstaImage} alt="an instagram logo" className="img-copyright"/>
                            <div className="card-image">
                                <img src={post.imgUrl} alt={post.title} />
                                <span className="card-title">{post.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{post.body}</p>
                            </div>
                            <div className="card-action">
                                <Link to={'/reduxpost/'+post.id} >View</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="message">No post found!</div>
        );
        return (
            <div className="container">
                <div className="row">
                    {postList}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    };
};

export default connect(mapStateToProps)(ReduxData);