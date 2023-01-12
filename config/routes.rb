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
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:show, :index, :create]
    resources :reviews, only: [:show, :destroy, :update, :create, :index]
    resources :reservations, only: [:show, :destroy, :update, :create, :index]
    resources :saved_restaurant, only: [:create, :show, :destroy, :index]

    resources :restaurants, only: [:show] do
      resources :reviews, only: [:index]
    end
  end


  # get '/restaurants/:id', to: 'restaurants#show'
  post 'api/test', to: 'application#test'
  get '*path', to: "static_pages#frontend_index"

end
