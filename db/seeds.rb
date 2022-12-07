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


    puts "Done!"
  end
