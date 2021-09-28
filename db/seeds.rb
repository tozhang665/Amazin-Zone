# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new({password:"demopassword",email:"demo.io"})
user1 = User.new({password:"alpha",email:"alpha.io"})
user2 = User.new({password:"bravo",email:"bravo.io"})
user3 = User.new({password:"charlie",email:"charlie.io"})
user4 = User.new({password:"delta",email:"delta.io"})
user5 = User.new({password:"echo",email:"echo.io"})
user6 = User.new({password:"foxtrot",email:"foxtrot.io"})

user.save!
user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!


product1 = Product.new({title:"soap",description:"nice smelling soap",price:10.99})

product1.save!