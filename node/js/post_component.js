import React from 'react';

export default class PostComponent extends React.Component {
	render() {
		return (
			<div>
				{this.props.posts.map((post) => {
					return (
						<div key={post.id}>
							<p>{post.title}</p>
							<span>{post.body}</span>
						</div>
					)
				})}
			</div>
		)
	}
}