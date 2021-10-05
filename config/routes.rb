Rails.application.routes.draw do
  resources :auctions do
    resources :bidders
    resources :dealers
    resources :lots
  end

  post '/users', to: 'users#create'
  post '/auth/login', to: 'authentication#login'
  post '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
