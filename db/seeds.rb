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

  30.times do
    User.create!(
      first_name: Faker::Name.unique.first_name,
      last_name: Faker::Name.unique.last_name,
      email: Faker::Internet.unique.email,
      phone_number: rand(1000000000..9999999999)
    )
  end


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
      rest1.photos.attach(io: image1, filename: "Quality_meats_card.jpeg")
      rest1.save!
      image101 = URI.open("https://seatme-dev.s3.amazonaws.com/Quality_Meats_show.jpeg")
      rest1.photos.attach(io: image101, filename: "Quality_Meats_show.jpeg")
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
      rest2.photos.attach(io: image2, filename: "nice_matin_card.jpeg")
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
        rest3.photos.attach(io: image3, filename: "Cote_card.jpeg")
        rest3.save!

        image3_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Cote_show.jpeg")
        rest3.photos.attach(io: image3_1, filename: "Cote_show.jpeg")
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
      rest4.photos.attach(io: image4, filename: "seawolf_card.jpeg")
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
      rest5.photos.attach(io: image5, filename: "Meadowsweet_card.jpeg")
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
      rest6.photos.attach(io: image6, filename: "double_zero_card.jpeg")
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
      rest7.photos.attach(io: image7, filename: "bar_primi_card.jpeg")
      rest7.save!

      rest8 = Restaurant.create(
        name: "Oceana",
        description: "Oceana has a 70 seat Cafe with a 18 seat marble bar.
        Great for lunch, after work cocktails & snacks, pre-theater dinner
        and post-theater desserts. Spring and Summer bring a 50 seat outdoor
        dining area and our new West Park Beer Garden 200 person capacity,
         private dining options include our Chefs Table with seating for up
          to 6, our new Chefs Counter for 6, Wine Room for 18, and our Grand
          Salon for 80. Full buyouts are also available.",
        cuisine: "American",
        address: "120 West 49th Street, New York, NY 10020",
        tables: 60,
        menu: "Shigoku $3.00, Rocky Reef $3.00, Kumamoto $3.00,
        Blue Island $3.00, Kusshi $3.00, Barnstable $3.00,
        Our Signature Baked Oysters $18.00",
        average_rating: 4.6,
        price_point: 41,
        phone_number: "212-759-5941",
        neighborhood: "Midtown West"
      )

      image8 = URI.open("https://seatme-dev.s3.amazonaws.com/Oceana_Restaurant_card.jpeg")
      image8_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Oceana_Restaurant_show.jpeg")
      rest8.photos.attach(io: image8, filename: "Oceana_Restaurant_card.jpeg")
      rest8.photos.attach(io: image8_1, filename: "Oceana_Restaurant_show.jpeg")
      # debugger
      rest8.save!

      rest9 = Restaurant.create(
        name: "Estiatorio Milos – Hudson Yards",
        description: "Milos at Hudson Yards features an open kitchen,
        private dining rooms, walls of glass overlooking the Hudson River,
        and a spectacular outdoor terrace. Milos' signature fish market
        showcases the daily catch, where guests can choose the fish they will
        dine on. There is also an international wine collection featuring
        wines from Greece and around the world.",
        cuisine: "Greek",
        address: "20 Hudson Yards, Fifth Floor, New York, NY 10001",
        tables: 60,
        menu: "RAW FISH
        MAGIATIKO, Mediterranean Hunter Fish
        Sashimi or Tartare

        TUNA, Bigeye AAA quality
        Selected for Milos by our fishmonger at Hawaii's auctions, Sashimi or Tartare

        SALMON, Faroe Islands, Organic
        Sashimi or Tartare

        LOUP DE MER, Ionian Sea, Greece
        Sashimi or Ceviche

        TSIPOURA, Ionian Sea, Greece
        Sashimi

        LETHRINI, Nazare, Portugal
        Sashimi

        FAGRI, Kythira, Greece
        Sashimi",
        average_rating: 4.8,
        price_point: 51,
        phone_number: "(646) 907-1970
        ",
        neighborhood: "Garment District"
      )

      image9 = URI.open("https://seatme-dev.s3.amazonaws.com/Estiatorio_Milos_card+.jpeg")
      image9_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Estiatorio_Milos_show+.jpeg")
      rest9.photos.attach(io: image9, filename: "Estiatorio_Milos_card+.jpeg")
      rest9.photos.attach(io: image9_1, filename: "Estiatorio_Milos_show+.jpeg")
      rest9.save!

      rest10 = Restaurant.create(
        name: "Passatempo",
        description: "Italian cafe and restaurant. Our bar is characterized
        by artisanal Italian beer and well curated Italian wine list.
        All of our pastas are fresh and homemade. We have a large selection
        of risottos that you will have you coming back for more.
        Great food and beverage options for breakfast, lunch and dinner.
        (All menus available all day)",
        cuisine: "Italian",
        address: "20 Hudson Yards, Fifth Floor, New York, NY 10001",
        tables: 60,
        menu: "Antipasti
        Burrata & Veggie
        $16.00
        Burrata Imported from Italy, Roasted and Marinated Zucchini & Eggplant Slices

        Insalata Primavera
        $14.00
        Shaved Fennel, Orange Wedges, Avocado

        Fancy Caprese
        $16.00
        Mozzarella di Bufala DOP, Heirloom Tomatoes, Field Greens

        Shrimp & Mango Salad
        $22.00
        Mango Slices, King Prawns, Arugula, Lemon Dressing

        Bresaola
        $18.00
        Sliced Cured Beef, Shaved Parmesan, Arugula, Lemon Juice",
        average_rating: 4.4,
        price_point: 29,
        phone_number: "(646) 907-1970
        ",
        neighborhood: "Williamsburg"
      )

      image10 = URI.open("https://seatme-dev.s3.amazonaws.com/Pasatempo_card.jpeg")
      image10_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Pasatempo_show.jpeg")
      rest10.photos.attach(io: image10, filename: "Pasatempo_card.jpeg")
      rest10.photos.attach(io: image10_1, filename: "Pasatempo_show.jpeg")
      rest10.save!

      rest11 = Restaurant.create(
        name: "Guantanamera - Forest Hills",
        description: "Guantanamera is an instant escape to chic Old Havana.
        Guantanamera is a friendly, fun, vibrant Cuban restaurant featuring
        traditional Cuban fare, magnificent mojitos, complimentary hand-rolled
        cigars, & Live Cuban music. As indelibly Cuban as the classic
        love song that bestowed its name, Guantanamera, captures the essence
        of Old Havana with its exotic décor featuring exposed brick,
        candle-lit tables, rattan-covered ceiling fans, and hand-painted
        folkloric murals.",
        cuisine: "Cuban",
        address: "110-80 Queens Blvd, Queens, NY 11375

        ",
        tables: 60,
        menu: "Platos Fuertes | Entrées
        Sandwich Cubano
        Classic pressed Cuban sandwich of roast pork, ham, swiss cheese, pickles, mustard

        Bocadito de Pollo
        Grilled marinated chicken breast sandwich with mayo, tomatoes, lettuce

        Sandwich de Pernil
        Roasted pork, lettuce, tomatoe, mayonnaise

        Masitas de Puerco
        Crispy golden pork chunks, cumin scented marinade, congri

        Tilapia al Limon
        White wine, garlic, lemon sauce

        Arroz con Pollo Criollo
        Yellow rice, chunks of chicken, mixed vegetables",
        average_rating: 4.7,
        price_point: 28,
        phone_number: "(646) 907-1970
        ",
        neighborhood: "Forest Hills"
      )

      image11 = URI.open("https://seatme-dev.s3.amazonaws.com/Guantanamera_card.jpeg")
      image11_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Guantanamera_show.jpeg")
      rest11.photos.attach(io: image11, filename: "Guantanamera_card.jpeg")
      rest11.photos.attach(io: image11_1, filename: "Guantanamera_show.jpeg")
      rest11.save!

      rest12 = Restaurant.create(
        name: "Serafina Ludlow",
        description: "Situated on a popular corner in the Lower East Side,
      in one of Manhattan’s trendiest neighborhoods. Our cozy bar provides
        a great space to enjoy unique cocktails. The beautiful mosaic
        pizza oven produces over 20 Serafina pizza varieties, or choose
        from signature dishes like our Focaccia di Sofia, Tartufo Nero, and
        other delicious dishes like our homemade pastas, grilled fish and
        meat, and fresh salads.",
        cuisine: "Cuban",
        address: "98 Rivington St, New York, NY 10002",
        tables: 60,
        menu: "Antipasti
        Seasonal Antipasti
        Ask your server

        MP
        Meatballs
        $17.00
        Homemade meatballs topped with Parmigiano Reggiano, served with tomato sauce, basil & toasted bread

        Calamari
        $17.00
        Fried calamari served with our homemade spicy tomato dip

        Bruschetta
        $13.00
        Toasted bread with fresh tomatoes, basil, extra virgin olive oil & a touch of garlic",
        average_rating: 4.5,
        price_point: 28,
        phone_number: "(212) 358-9800",
        neighborhood: "Lower East Side"
      )

      image12 = URI.open("https://seatme-dev.s3.amazonaws.com/Serafina_card.jpeg")
      image12_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Serafine_show.jpeg")
      rest12.photos.attach(io: image12, filename: "Serafina_card.jpeg")
      rest12.photos.attach(io: image12_1, filename: "Serafine_show.jpeg")
      rest12.save!

      rest13 = Restaurant.create(
        name: "Extra Virgin Restaurant",
        description: "Extra Virgin is a neighborhood spot that attracts diners
        from all across the city open for almost 16 years loved by the
        neighborhood. Located in New York City’s West Village, Extra Virgin
        is “a little gem of a restaurant… with cooking consistently good and
        the young staff, attractive and efficient” (The New York Times).
        In addition to deliciously inventive Mediterranean food and a
        comfortable but energetic dining room, Extra Virgin offers different
        varieties of extra virgin oils from around the world each night",
        cuisine: "Mediterranean",
        address: "259 W 4th St, New York, NY 10014",
        tables: 60,
        menu: "Classics
        Monday - Baked Lasagna
        $25.00
        meat sauce, ricotta, mozzarella, fontina, parmesan, spinach

        Tuesday - Buttermilk Fried Baby Chicken
        $26.00
        stuffed with spinach and queso fresco, spiced Cole slaw, bread & butter pickles, mango

        Wednesday - Lemon Sole Almondine
        $28.00
        cauliflower gratin, haricot verts, lemon butter

        Thursday - 7 Hour Braised Barbecue Lamb Shank
        $33.00
        sweet corn risotto, spinach, corn salsa, crispy onions, rosemary jus",
        average_rating: 4.4,
        price_point: 25,
        phone_number: "(212) 358-9800",
        neighborhood: "West Village"
      )

      image13 = URI.open("https://seatme-dev.s3.amazonaws.com/Extra_Virgin_card.jpeg")
      image13_1 = URI.open("https://seatme-dev.s3.amazonaws.com/Extra_virgin_show.jpeg")
      rest13.photos.attach(io: image13, filename: "Extra_Virgin_card.jpeg")
      rest13.photos.attach(io: image13_1, filename: "Extra_virgin_show.jpeg")
      rest13.save!

      rest14 = Restaurant.create(
        name: "The Little Owl",
        description: "Little Owl offers bold-flavored Seasonal Mediterranean
        cuisine with friendly and professional service. Currently, they
        offer both indoor and outdoor dining for parties up to 6 guests,
        against the backdrop of their treasured and storied West Village.
        Both their tented area on Bedford Street and their sidewalk seating
        along Grove Street are equipped with heaters for guests' warmth.",
        cuisine: "Mediterranean",
        address: "90 Bedford Street, New York, NY 10014",
        tables: 25,
        menu: "entrées
        Tender Lamb Shank
        $38.00
        warm potato salad, giardiniera, natural jus

        Skate Milanese Sandwich
        $26.00
        seeded bun, chinoise slaw, lemon, french fries

        Faroe Island Salmon*
        $33.00
        lemon pepper broccoli, avocado crema, roasted tomato

        Grilled & Filleted Daily Fish*
        $39.00
        toasted lobster paella

        8 oz. Bacon Cheeseburger*
        $21.00
        American cheese, pickle, french fries

        Petit Filet Mignon*
        $39.00
        crunchy montrachet potatoes, spinach, red wine

        Crispy Bell & Evans Chicken
        $32.00
        brussels sprout home fries, lemon, dijon, garlic, sherry

        Broiled Nova Scotia Halibut
        $39.00
        chive mashed potatoes, lemon crème fraiche

        Pork Chop & Butter Beans*
        $38.00
        parmesan, wild dandelion",
        average_rating: 4.8,
        price_point: 35,
        phone_number: "(212) 358-9800",
        neighborhood: "West Village"
      )

      image14 = URI.open("https://seatme-dev.s3.amazonaws.com/the_Little_Owl_card.jpeg")
      image14_1 = URI.open("https://seatme-dev.s3.amazonaws.com/The_Little_Owl_show.jpeg")
      rest14.photos.attach(io: image14, filename: "the_Little_Owl_card.jpeg")
      rest14.photos.attach(io: image14_1, filename: "the_Little_Owl_show.jpeg")
      rest14.save!

      rest15 = Restaurant.create(
        name: "Cecconi's Dumbo",
        description: "Cecconi’s Dumbo is a modern day classic Italian restaurant
        near Brooklyn Bridge park, specializing in hand-made pasta, wood-fired
        pizza and other Italian staples. Originating in Venice and with outposts
      in London and West Hollywood, Cecconi’s has become a critically acclaimed
        dining destination featuring simply prepared Venetian inspired food.",
        cuisine: "Italian",
        address: "55 Water St, Brooklyn, NY 11201",
        tables: 60,
        menu: "Wood & Charcoal
        Whole Cauliflower, Salmoriglio, Lemon Aioli**
        $23.00
        Eggplant Parmigiana
        $26.00
        Chicken Paillard, Cherry Tomatoes, Arugula
        $36.00
        Salmon, Broccolini, Castelvetrano, Pesto
        $40.00
        Branzino, Spinach, Tomato, Peppers, Olives
        $49.00
        Filet Mignon, Potatoes, Mushroom Sauce
        $66.00
        Veal Chop Milanese, Lemon, Sage
        $72.00
        Dover Sole, Lemon Butter, Sauteed Spinach
        $81.00",
        average_rating: 4.5,
        price_point: 29,
        phone_number: "(212) 358-9800",
        neighborhood: "Dumbo"
      )

      image15 = URI.open("https://seatme-dev.s3.amazonaws.com/the_Little_Owl_card.jpeg")
      image15_1 = URI.open("https://seatme-dev.s3.amazonaws.com/The_Little_Owl_show.jpeg")
      rest15.photos.attach(io: image14, filename: "the_Little_Owl_card.jpeg")
      rest15.photos.attach(io: image14_1, filename: "the_Little_Owl_show.jpeg")
      rest15.save!

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


      reviews = [
        'I wish I had known about this place sooner. What a treat!',
        "Cozy, relaxing, homey. I felt like an old friend every time I was greeted by the staff.",
        "The food was cold. The only thing that was colder was the waitresses icy personality. Not a pleasant experience",
        "I came to this particular location for it's close proximity to my home. Even still, I couldn't beat the swarm of people jockeying to get a table",
        'The table was still filthy when we sat down. I was appalled to see dropping of the previous diners meal. Just disgraceful',
        "The coffee was scolding hot. I burned my tongue the instant it came into contact. A bit of warming would have been nice.",
        "The staff was almost as cold and distant as my wife!",
        "The aroma in the place was just delightful. It reminded me of my grandmothers kitchen",
        "The food was so spicy! The menu didn't express that at all. I was so dissappointed.",
        "Great location for families with small children. They were so accomodating to my little ones.",
        "The drinks came out faster than we could sit down. Service was stupendous all  night.",
        "I can't imagine going anywhere else. They just really make you feel like you're at home.",
        "The shrimp was excellent. The eggplant was suspect. And the waiter was a charm.",
        "The hostess was as rude a hostess as I've ever had. When I asked her why our table wasn't ready, she replied it was our fault for being so early.
        the only problem with that was it was 40 minutes past the intended time of our reservation.",
        "Not a bad spot to grab a quick drink with friends. The food is also solid.",
        "How do I simultaneously praise a location, while also deterring diners from
          overcrowding my favorite lunch spot?",
        "I found a hair in my food, but was just happy to know that my food was at least made by a mammal.",
        "Don't eat here unless you have a desire for painful bowel movements.",
        "The people next to us were so loud the entire night, and not a thing was done by the staff.",
        "Everything I've ever eaten here has been twice as good as advertised",
        "I've never loved a person half as much as I love this restaurant",
        "Don't go to this location. I mean the food and service are great, but I don't
        want to have to start fighting people for a seat."
      ]

      user_ids = User.all.map {|user| user.id}
      rest_ids = Restaurant.all.map {|rest| rest.id}

      150.times do
        Review.create!(
          comment: reviews.sample,
          user_id: user_ids.sample,
          restaurant_id: rest_ids.sample,
          food_rating: rand(2..5),
          service_rating: rand(2..5),
          ambience_rating: rand(2..5),
          overall_rating: 5,
          commentor_first_name: Faker::Name.unique.first_name,
          commentor_last_name: Faker::Name.unique.last_name
        )
      end

      SavedRestaurant.create(user_id: 1, restaurant_id: 1)
      SavedRestaurant.create(user_id: 1, restaurant_id: 3)
      SavedRestaurant.create(user_id: 1, restaurant_id: 5)
      SavedRestaurant.create(user_id: 1, restaurant_id: 7)

  puts "Done!"
# end
