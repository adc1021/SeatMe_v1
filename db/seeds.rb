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

    # 10.times do
    #   User.create!({
    #     first_name: Faker::Name.first_name,
    #     last_name: Faker::Name.last_name,
    #     email: Faker::Internet.email,
    #     phone_number: "111-222-3333"
    #   })
    # end



    puts "Done!"
  end
