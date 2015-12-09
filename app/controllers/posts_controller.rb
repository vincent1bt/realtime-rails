class PostsController < ApplicationController
  def index
  	@posts = Post.all
  	respond_to do |f|
  		f.html
  		f.json { render json: @posts }
  	end
  end

  def new
  	@post = Post.new
  end

  def create
  	@post = Post.new(post_params)
  	if @post.save
  		redirect_to posts_path
  	else
  		render :new
  	end
  end

  private
    def post_params
    	params.require(:post).permit(:title, :body)
    end
end
