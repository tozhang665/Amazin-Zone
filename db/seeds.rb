# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





user = User.new({password:"demopassword",email:"demo.io"})
user1 = User.new({password:"passwordd",email:"TheManHimself@gmail.com"})
user2 = User.new({password:"passwordd",email:"JeffBezos@amazon.com"})
user3 = User.new({password:"passwordd",email:"ElonMusk@tesla.com"})
user4 = User.new({password:"passwordd",email:"Jesus@heaven.com"})
user5 = User.new({password:"passwordd",email:"Cthulhu@myths.com"})
user6 = User.new({password:"passwordd",email:"Dormammu@marvel.com"})
user7 = User.new({password:"passwordd",email:"ChuckNoris@TexasRanger.com"})

user.save!
user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!

require 'open-uri'

product2 = Product.create!({title:"Amazon Astro", description:"This new robot helps keep your home secure by allowing you to have your very own security guard!",price:999.99})

file2 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/amazon-astro.jpg')
product2.photo.attach(io:file2, filename:'amazon_astro.jpg')


product1 = Product.create({title:"Apple Watch Case",description:"This sleek and sturdy design is guaranteed to keep your watch secure",price:10.99})
file1 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/apple-watch-case.jpg')
product1.photo.attach(io:file1, filename:'watch_case.jpg')

product3 = Product.create({title:"Porch Light",description:"This porch light is guaranteed to scare all of the animals away!",price:14.99})
file3 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/light.jpg')
product3.photo.attach(io:file3, filename:"porch_light.jpg")


product4 = Product.create({title:"Mens Gift Kit",description:"This collection of items is the perfect set of items for any event",price:39.99})
file4 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/mens-gift.jpg')
product4.photo.attach(io:file4, filename:"mens_gift.jpg")


product5 = Product.create({title:"Amazon Glow",description:"This amazing new technology will revolutionize the way humans have video calls",price:249.99})
file5 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/phone-stand.jpg')
product5.photo.attach(io:file5, filename:"amazon_glow.jpg")


product6 = Product.create({title:"Echo Show 15",description:"This smart display for family organization will help your family stay organized",price:249.99})
file6 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/picture-screen.jpg')
product6.photo.attach(io:file6, filename:"echo_show_15.jpg")


product7 = Product.create({title:"TV Sound Bar",description:"This ultra slim TV sound bar will be great for any home. Even those without a home",price:199.99})
file7 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/sound-bar.jpg')
product7.photo.attach(io:file7, filename:"sound_bar.jpg")


product8 = Product.create({title:"Home DoorBell",description:"This electronic home doorbell will help you stay safe by allowing to see exactly who is at the door!",price:49.99})
file8 = URI.open('https://amazin-zone-seeds.s3.us-west-1.amazonaws.com/video-doorbell.jpg')
product8.photo.attach(io:file8, filename:"video_doorbell.jpg")






review1 = Review.new({
  user_id:2, 
  product_id:1,
  title:"This device saved my life!", 
  body:"When i first looked at this invention i was so weirded out but now its great",
  rating:4
  })

review2 = Review.new({
  user_id:3, 
  product_id:1,
  title:"Our greatest product yet!", 
  body:"I must praise one of my Engineers for thinking this idea up. Why have security built only in key areas when you can have the security follow you? It's like your own personal security guard!",
  rating:5
  })


review3 = Review.new({
  user_id:4, 
  product_id:1,
  title:"Its meh.", 
  body:"I mean it could be better but hear me out. Imagine if it wasnt a small robot, we had a full car follow you around the house? *mind-blown*",
  rating:2
})

review4 = Review.new({
  user_id:6, 
  product_id:1,
  title:"GRAAGGHHHH.", 
  body:"GRRRAAAHGGHRAHGHG GGGHRARRAAAAGGHHHHH GGRAHHAAGGGAAHHHHHGGGAHHH",
  rating:5
})



review5 = Review.new({
  user_id:7, 
  product_id:2,
  title:"Not needed", 
  body:"Why would I need a case when no one dares touches me.",
  rating:3
})



review6 = Review.new({
  user_id:5, 
  product_id:2,
  title:"Believe in your savior", 
  body:"As your Lord and Savior, I believe that my words have weight when I say that this case has helped me prevent many scratches and I would recommend this to anyone I come across. Except for Judas. ",
  rating:5
})




review7 = Review.new({
  user_id:5, 
  product_id:3,
  title:"Really lights up the way", 
  body:"Really lights things up. Almost as good as I do.",
  rating:5
})

review8 = Review.new({
  user_id:1, 
  product_id:3,
  title:"Great product", 
  body:"A little too bright for me but it gets the job done",
  rating:4
})

review9 = Review.new({
  user_id:1, 
  product_id:3,
  title:"Not even that bright", 
  body:"Barely lit up my backyard. It could've been way brighter",
  rating:2
})

review10 = Review.new({
  user_id:1, 
  product_id:4,
  title:"Great for any occasion", 
  body:"Has a little bit of everything so I knew exactly who to give it to",
  rating:4
})


review11 = Review.new({
  user_id:3, 
  product_id:8,
  title:"Helped protect my house", 
  body:"By putting this on my house, it helped me keep my house more modern",
  rating:5
})




review1.save!
review2.save!
review3.save!
review4.save!
review5.save!
review6.save!
review7.save!
review8.save!
review9.save!
review10.save!
review11.save!