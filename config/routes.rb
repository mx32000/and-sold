Rails.application.routes.draw do
  resources :auctions do
    resources :bidders
    resources :dealers
    resources :lots
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
