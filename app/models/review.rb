# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

  validates :rating, :inclusion => 1..5

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User


  belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product


end


# user = User.new({password:"demopassword",email:"demo.io"})
# user1 = User.new({password:"passwordd",email:"TheManHimself@gmail.com"})
# user2 = User.new({password:"passwordd",email:"JeffBezos@amazon.com"})
# user3 = User.new({password:"passwordd",email:"ElonMusk@tesla.com"})
# user4 = User.new({password:"passwordd",email:"Jesus@heaven.com"})
# user5 = User.new({password:"passwordd",email:"Cthulhu@myths.com"})
# user6 = User.new({password:"passwordd",email:"Dormammu@marvel.com"})
# user7 = User.new({password:"passwordd",email:"ChuckNoris@TexasRanger.com"})