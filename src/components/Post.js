import React, {Component} from 'react';
import Axios from 'axios';

class Post extends Component{
    // state={
    //     id:null
    // }

    state={
        data:null
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>{
            this.setState({
                data:res.data
            });
        });
    }
    render(){

        const {data}=this.state;
        const dataRender=data!==null?(
            <div className="s12">
                <h4 className="center red-text">{data.title}</h4>
                <img src="https://picsum.photos/id/45/800/300" alt={data.title} />
                <p>
                    {data.body}
                </p>
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

export default Post;
