Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # namespace :api do
  #   # ...
  #   resources :users, only: [:create]
  #   resource :session, only: [:create, :show, :destroy]
  #   resources :restaurants, only: [:show, :index, :create]
  # end
  namespace :api, defaults: {format: :json} do
    # ...
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:show, :index, :create]

    resources :reservations, only: [:show, :destroy, :update, :create, :index]
  end

  # get '/restaurants/:id', to: 'restaurants#show'
  post 'api/test', to: 'application#test'
  get '*path', to: "static_pages#frontend_index"

end
