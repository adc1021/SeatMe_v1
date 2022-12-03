
class User < ApplicationRecord
    before_validation :ensure_session_token
    validates :first_name,
        :last_name, :email, :session_token, :phone_number, presence: true
    validates :first_name, length: { in: 2..30, message: 'First name is required.' }
    validates :last_name, length: { in: 2..30, message: 'Last name is required.' }
    validates :email,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Email is required.' },
        uniqueness: true
    validates :phone_number, :session_token, uniqueness: true
    validates :phone_number,
    format: { with: /\A\d{3}-\d{3}-\d{4}\z/, on: :create, message: 'Phone number is required' } # added a regexp I found on stack overflow for phone number validation


    # has_many: :reservations

    # has_many: :reviews

    # has_many: :saved_restaurants

    def self.find_by_credentials(email)
        user = User.find_by(email: email)
        # has_secure_password gives us the authenticate method
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
