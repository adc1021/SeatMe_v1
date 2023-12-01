# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  email         :string           not null
#  first_name    :string
#  last_name     :string
#  phone_number  :string           not null
#  session_token :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class User < ApplicationRecord
    before_validation :ensure_session_token
    validates :first_name,
        :last_name, :email, :session_token, :phone_number, presence: true
    validates :first_name, length: { in: 2..30, maximum: 1, message: 'is required.' }
    validates :last_name, length: { in: 2..30, maximum: 1, message: 'is required.' }
    validates :email,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP, message: 'is invalid' },
        uniqueness: true
    validates :phone_number, :session_token, uniqueness: true
    validates :phone_number,
    format: { with: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    on: :create, message: 'is invalid' } # added a regexp I found on stack overflow for phone number validation


    has_many :reservations
    has_many :reviews
    has_many :saved_restaurants


    has_many :rest_reservations,
        through: :reservations,
        source: :restaurant,
        dependent: :destroy

    def self.find_by_credentials(credential)

        if credential.split("@").length > 1
            user = User.find_by(email: credential)
        else
            user = User.find_by(phone_number: credential)
        end
        # user = User.find_by(email: credential)
        if user
            return user
        else
            nil
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while
            token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
        end
    end
end
