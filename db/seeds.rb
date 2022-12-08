# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
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
      first_name: 'Brogan',
      last_name: 'Manfredi',
      email: 'broMan@gmail.io',
      phone_number: '123-456-2321'
    )

    User.create!(
      first_name: 'Demo',
      last_name: '-lition',
      email: 'demo@user.io',
      phone_number: '222-333-4444'
    )

        Restaurant.create!(
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
          average_rating: 4.7,
          price_point: 50
        )

        Restaurant.create!(
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
          price_point: 30
        )

        Restaurant.create!(
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
          average_rating: 4.6,
          price_point: 50
        )


    puts "Done!"
  end
