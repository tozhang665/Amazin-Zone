Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  # resources :users, only: [:new, :create]
  # resource :session, only: [:new, :create, :destroy]

   namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only:[:create,:show]
  end

end
