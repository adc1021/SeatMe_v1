# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do
  require "open-uri"
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Review.destroy_all
  SavedRestaurant.destroy_all
  Reservation.destroy_all
  Restaurant.destroy_all
  User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('reservations')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      first_name: 'Demo',
      last_name: '-lition',
      email: 'demo@user.io',
      phone_number: '222-333-4444'
    )
    User.create!(
      first_name: 'Hulk',
      last_name: 'Hogan',
      email: 'hulkster@gmail.com',
      phone_number: '123-456-7890'
    )
    User.create!(
      first_name: 'Kelly',
      last_name: 'Jones',
      email: 'kj@gmail.com',
      phone_number: '123-456-7555'
    )
    User.create!(
      first_name: 'Alfred',
      last_name: 'Hitchcock',
      email: 'broMan@gmail.io',
      phone_number: '123-456-2321'
    )


        rest1 = Restaurant.create(
          name: "Quality Meats",
          description: "Quality Meats is the best steakhouse in New York City.
          Located in Midtown Manhattan near Central Park, MOMA,
           Carnegie Hall, Rockefeller Center, Radio City Music Hall,
           and Times Square, Quality Meats features modern interpretations of
            familiar dishes and flavor combinations, resulting in unique tastes,
            innovative presentations, and a distinctive Quality Meats style.
             The warm, industrial décor by award-winning designers AvroKO draws
             on cues from traditional New York City family-owned butcher shops,
            in the use of warm wood, stainless steel, and white marble.",
          cuisine: "American",
          address: "57 West 58th Street, New York, NY 10019",
          tables: 50,
          menu: "Shigoku $3.00, Rocky Reef $3.00, Kumamoto $3.00,
          Blue Island $3.00, Kusshi $3.00, Barnstable $3.00,
          Our Signature Baked Oysters $18.00",
          average_rating: 4.1,
          price_point: 50,
          phone_number: "212-371-7777",
          neighborhood: "Midtown West"
        )
        #       puts rest1
        image1 = URI.open("https://seatme-dev.s3.amazonaws.com/Quality_meats_card.jpeg")
        # puts image1
        rest1.photo.attach(io: image1, filename: "Quality_meats_card.jpeg")
        rest1.save!
        # puts rest1

        image101 = URI.open("https://seatme-dev.s3.amazonaws.com/Quality_Meats_show.jpeg")
        rest1.photo.attach(io: image101, filename: "Quality_Meats_show.jpeg")
        rest1.save!

        rest2 = Restaurant.create(
          name: "Nice Matin",
          description: "For nearly two decades, Nice Matin has been
            the Upper West Sides most elegant, beautifully designed and
            sophisticated dining destination. Featuring a Wine Spectator
            Grand Award-winning Wine List and an extraordinary, inventive,
            French Provençal-inspired menu created by Chef Andy D’Amico,
            who was named “Best Chef” by New York Magazine
            food editor Gillian Duffy, Nice Matin is the
            essential French Brasserie and Wine Destination of the Upper West Side.",
          cuisine: "French",
          address: "201 West 79th St, New York, NY 10024",
          tables: 35,
          menu: "PANISSE
          $10.00
          chickpea fries, smoked paprika aioli

          SOUPE AU PISTOU
          $12.00
          Nicoise vegetable soup, elbow pasta, basil pesto

          FAVA BEAN HUMMUS
          $14.00
          lemon, chili, crudités, flat bread

          ESCARGOTS A LA PROVENCALE
          $16.00
          provençale tomato sauce, escargot butter, garlic breadcrumbs

          HONEYNUT SQUASH RISOTTO
          $18.00
          shiitakes, crispy pancetta, pecorino, sage

          CRISPY FRIED ARTICHOKES
          $18.00
          eggplant purée, chickpea salad, extra virgin olive oil, espelette

          BURRATA
          $18.00
          roasted gold beets, arugula, pistachios, micro basil, white balsamic vinaigrette

          SALAD VERTE
          $16.00
          avocado, radishes, lime, garlic, honey

          SALADE MEDITERRANEENE
          $18.00
          flat beans, chickpeas, cucumbers, tomatoes, peppers, red onions, feta, cilantro, mint, lemon vinaigrette

          TUNA CARPACCIO NICOISE
          $20.00
          a deconstructed version of tuna Niçoise salad over a raw tuna carpaccio

          GRILLED OCTOPUS
          $22.00
          marinated gigante beans, persillade sauce",
          average_rating: 4.5,
          price_point: 30,
          phone_number: "212-873-6423",
          neighborhood: "Upper West Side"
        )

        image2 = URI.open("https://seatme-dev.s3.amazonaws.com/nice_matin_card.jpeg")
        rest2.photo.attach(io: image2, filename: "nice_matin_card.jpeg")
        rest2.save!

        rest3 = Restaurant.create(
          name: "Cote NYC",
          description: "COTE, the carnivorous vision of proprietor Simon Kim,
          blends the dining experience of Korean barbeque together with the
          hallmarks of a classic American steakhouse. The result is a unique,
          convivial and interactive atmosphere, accompanied by
          the highest quality USDA Prime beef, an impeccable 1200+ label
          wine list, and a suite of classic-but-creative cocktails.",
          cuisine: "Korean",
          address: "16 West 22nd St, New York, NY 10010",
          tables: 30,
          menu: "Ribeye
          $88.00,
          NY Strip
          $44.00,
          Cote Steak
          $29.00,
          The Flatiron
          $49.00",
          average_rating: 4.9,
          price_point: 50,
          phone_number: "212-401-7986",
          neighborhood: "Chelsea"
          )

          image3 = URI.open("https://seatme-dev.s3.amazonaws.com/Cote_card.jpeg")
          rest3.photo.attach(io: image3, filename: "Cote_card.jpeg")
          rest3.save!

          image3_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Cote_show.jpeg")
          rest3.photo.attach(io: image3_1, filename: "Cote_show.jpeg")
          rest3.save!



          rest4 = Restaurant.create(
            name: "Sea Wolf - Bushwick",
          description: "Sea Wolf is Bushwick's own little surf shack
          for herbivores and omnivores alike. With daily oyster specials,
          a full bar featuring a selection of rotating frozen cocktails,
          Sea Wolf is your island oasis in the heart of industrial Brooklyn.",
          cuisine: "Seafood",
          address: "19 Wyckoff Ave, Brooklyn, Ny 11237",
          tables: 40,
          menu: "Soup/Salad
          Chowder
          Cup
          $8.00
          Bowl
          $12.00
          Chilled Corn Soup
          Sweet Corn, Cream

          Cup
          $8.00
          Bowl
          $12.00
          Sandwiches
          Cold Lobster Roll
          $26.00
          Shrimp Roll
          $16.00
          Chives, Scallion, Dill, Parsley, Lemon Brown Butter Herb Mayo

          Brunch Sides
          Grilled Half Avocado
          $5.00
          Fingerlings Brunch
          $4.00
          Brunch Small Plates
          Deviled Eggs
          $7.00
          Sriracha Powder

          Fried Clam Strips
          $12.00
          Local clams and house-made tartar sauce

          Brunch
          11am-3:30pm

          Chia Pudding
          $13.00
          Avocado Toast Brunch
          $14.00",
          average_rating: 5.0,
          price_point: 18,
          phone_number: "718-366-3272",
          neighborhood: "Bushwick"
        )

        image4 = URI.open("https://seatme-dev.s3.amazonaws.com/seawolf_card.jpeg")
        rest4.photo.attach(io: image4, filename: "seawolf_card.jpeg")
        rest4.save!

        rest5 = Restaurant.create(
          name: "Meadowsweet",
          description: "Polo and Stephanie opened Meadowsweet together in 2014
          and they see it as an extension of their home. They both enjoy good
          food, friendly service and a comfortable atmosphere to dine in
          and that is exactly what they want their guests to experience
         when visiting Meadowsweet. When they are not at Meadowsweet you will
          find them upstate at Meadowsweet Farm with their daughter and son
         where they grow some amazing vegetables with Polo’s Dad to serve at
         Meadowsweet. They look forward to seeing you at Meadowsweet soon",
          cuisine: "American",
          address: "149 Broadway, Brooklyn, NY 11211",
          tables: 15,
          menu: "olive oil rolls
          honey butter
          $19
          crispy baby artichokes
          shaved parmesan, baby arugula, parsley & lemon
          $18
          burrata & figs
          black mission & tiger figs, pistachio-basil pesto, pickled kumquats, pistachio-sesame dukkah & sourdough crisp
          $18
          heirloom tomato salad
          kalamata olive, cantabrian white anchovy, feta & fresh herbs
          $17
          fried green tomatoes
          buttermilk ranch, fine herbs & parmesan
          $18
          shishito peppers & corn
          poblano romesco, tahini, labneh & chile-lime dressing
          $24
          crispy duck confit
          marinated mango, endive, labneh, lime & honey
          $24
          spanish octopus & chorizo
          farro, olives, pickled peppers, pimenton aioli & mollica
          $26
          tajarin, chanterelles & truffle
          summer truffle, butter & parmesan
          $24
          cavatelli & fennel sausage
          shishito pepper, pecorino romano & parmesan
          $24
          cocoa pappardelle & braised wagyu beef ragu
          fresh ricotta",
          average_rating: 4.3,
          price_point: 31,
          phone_number: "212-401-7986",
          neighborhood: "Williamsburg",
        )

        image5 = URI.open("https://seatme-dev.s3.amazonaws.com/Meadowsweet_card.jpeg")
        rest5.photo.attach(io: image5, filename: "Meadowsweet_card.jpeg")
        rest5.save!

        rest6 = Restaurant.create(
          name: "Double Zero",
          description: "Double Zero is a plant-based pizza concept from
          Matthew Kenney in New York City’s East Village. Serving small plates,
          organic pizza prepared in a wood burning oven,
          vegan ice cream and organic wines, Double Zero showcases
          Matthew Kenney’s delicious, beautiful, vibrant, and nutritious
          cuisine in one of New York’s favorite neighborhoods.",
          cuisine: "Italian",
          address: "65 2nd Ave, New York, NY 10003",
          tables: 10,
          menu: "Brunch
          All brunch items are served with homemade roasted potatoes

          Pancakes*
          $16.00
          Seasonal fruit, maple syrup, ricotta cheese

          BLT*
          $15.00
          Eggplant, lettuce, tomatoes, avocado, pesto

          Egg Sandwish*
          $15.00
          Egg tofu, avocado, tomatoes, onions, arrabbiata sauce

          Avocado Toast*
          $15.00
          Avocado, onions, raddish, zaatar, cilantro

          Mushrooms Toast
          $15.00
          Wild mushrooms, truffle cashew, herbs

          Egg Pizza
          $19.00
          Egg tofu scramble, tomatoes, roasted homemade potatoe, peppers, cashew cheese",
          average_rating: 4.0,
          price_point: 29,
          phone_number: "212-777-1608",
          neighborhood: "East Village",
        )

        image6 = URI.open("https://seatme-dev.s3.amazonaws.com/double_zero_card.jpeg")
        rest6.photo.attach(io: image6, filename: "double_zero_card.jpeg")
        rest6.save!


        rest7 = Restaurant.create(
          name: "Bar Primi",
          description: "Bar Primi is a corner pasta shop devoted to
          ‘primi piatti,’ the pasta course. What began as an idea for a
           small space in New York's East Village has since become an
            essential in chef and co-owner Andrew Carmellini's range:
             fresh pasta traditionally prepared and cooked to order",
          cuisine: "Italian",
          address: "325 Bowery, New York, NY 10003",
          tables: 25,
          menu: "View menu on restaurant's website",
          average_rating: 4.6,
          price_point: 28,
          phone_number: "212-777-1608",
          neighborhood: "Lower East Side",
        )

        image7 = URI.open("https://seatme-dev.s3.amazonaws.com/bar_primi_card.jpeg")
        rest7.photo.attach(io: image7, filename: "bar_primi_card.jpeg")
        rest7.save!

        Reservation.create(date: DateTime.new(2024,2,3,4,5,6), time: DateTime.new(2024,2,3,4,5,6),
        party_size: 5, user_id: 1, restaurant_id: 1 )
        Reservation.create(date: DateTime.new(2024,4,7, 7,30,6), time: DateTime.new(2024,4,7, 7,30,6), party_size: 4,
        user_id: 1, restaurant_id: 2 )
        Reservation.create(date: DateTime.new(2024,2,11, 7,45,6), time: DateTime.new(2024,2,11, 7,45,6), party_size: 1,
         user_id: 1, restaurant_id: 3)

        Review.create(user_id: 1, restaurant_id: 1, comment: "Excellent experience,
        would munch again.", overall_rating: 5, food_rating: 5, service_rating: 5,
        ambience_rating: 5, commentor_first_name: "Demo", commentor_last_name: "-lition")

        Review.create(user_id: 2, restaurant_id: 1, comment: "Their has been
        nary a meal that compares to the one I had at this establishment",
        overall_rating: 5, food_rating: 5, service_rating: 5, ambience_rating: 5,
        commentor_first_name: "Hulk", commentor_last_name: "Hogan")

        Review.create(user_id: 3, restaurant_id: 1, comment: "Best steak of my life.
        Richard was an excellent waiter",
        overall_rating: 5, food_rating: 5, service_rating: 5, ambience_rating: 4,
        commentor_first_name: "Kelly", commentor_last_name: "Jones")

        Review.create(user_id: 4, restaurant_id: 1, comment: "The meal was solid.
        Just wished the food had come out quicker and the music was a bit too loud
        for my taste",
        overall_rating: 3, food_rating: 4, service_rating: 3, ambience_rating: 3,
        commentor_first_name: "Alfred", commentor_last_name: "Hitchcock")


        SavedRestaurant.create(user_id: 1, restaurant_id: 1)
        SavedRestaurant.create(user_id: 1, restaurant_id: 3)
        SavedRestaurant.create(user_id: 1, restaurant_id: 5)
        SavedRestaurant.create(user_id: 1, restaurant_id: 7)

    puts "Done!"
  # end
