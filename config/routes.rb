Rails.application.routes.draw do
  resources :polls do
    member do
    put "like", to: "polls#upvote"
    #put "dislike", to: "links#downvote"
  end
  end
  resources :reports
  devise_for :users, :controllers => { registrations: 'registrations' }

  resources :locations
  resources :problematics do
    resources :solutions
  end




  # resources :articles , except: [:delete] o , only: [:create] // en este cas este comando genera todas las rutas para CRUD del modelo Articles
  #Y es este caso se epecifica que se crearan todas las rutas excepto la de borrar

  get 'welcome/index'
  #get "especial", to: "welcome#index"// este comando genera que la ruta /especial sea igual que
  # escribir welcome#index

  root 'welcome#index'
  # direcciona a esta ruta la raiz de la url
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
