import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import socketio from 'socket.io-client'
import PostComponent from 'post_component'

var socket = socketio("http://localhost:4000")

class PostsComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	loadPosts(){
	  Promise.resolve(request("/posts.json"))
			    .then((data) => {
			    	this.setState({data: data.body})
			    })
	}

	componentDidMount(){
		this.loadPosts()
		socket.on('new-post', (msg) => {
			var newData = this.state.data
			newData.unshift(msg)
			this.setState({ data: newData })
		})
	}
	render() {
		return(
			<div>
				<PostComponent posts={this.state.data} />
			</div>
		)
	}
}

ReactDOM.render(
	<PostsComponent/>,
	document.querySelector("#render")
)