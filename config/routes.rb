Rails.application.routes.draw do
  resources :bidders
  resources :dealers
  resources :auctions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
