json.user do
    json.extract! @user, :id, :first_name, :last_name, :email, :phone_number, :created_at
end
