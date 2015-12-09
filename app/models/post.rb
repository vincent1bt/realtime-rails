class Post < ActiveRecord::Base
	after_create :send_data

	def send_data
      data = {
        id: self.id,
        title: self.title,
        body: self.body 
      }
	  $redis.publish "chanel-posts", data.to_json
	end
end
