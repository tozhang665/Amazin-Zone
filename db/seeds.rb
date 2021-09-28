# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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



product1 = Product.create({title:"Apple Watch Case",description:"This sleek and sturdy design is guaranteed to keep your watch secure",price:10.99})
file1 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/apple-watch-case.jpg')
product1.photo.attach(io:file1, filename:'watch_case.jpg')

product2 = Product.create({title:"Amazon Astro", description:"This new robot helps keep your home secure by allowing you to have your very own security guard!",price:999.99})
file2 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/amazon-astro.jpg')
product2.photo.attach(io:file2, filename:'amazon_astro.jpg')


product3 = Product.create({title:"Porch Light",description:"This porch light is guaranteed to scare all of the animals away!",price:14.99})
file3 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/light.jpg')
product3.photo.attach(io:file3, filename:"")


product4 = Product.create({title:"",description:"",price:})
file4 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/mens-gift.jpg')
product4.photo.attach(io:file4, filename:"")


product5 = Product.create({title:"",description:"",price:})
file5 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/phone-stand.jpg')
product5.photo.attach(io:file5, filename:"")


product6 = Product.create({title:"",description:"",price:})
file6 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/picture-screen.jpg')
product6.photo.attach(io:file6, filename:"")


product7 = Product.create({title:"",description:"",price:})
file7 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/sound-bar.jpg')
product7.photo.attach(io:file7, filename:"")


product8 = Product.create({title:"",description:"",price:})
file8 = open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/video-doorbell.jpg')
product8.photo.attach(io:file8, filename:"")