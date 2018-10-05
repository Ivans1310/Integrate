Rails.application.routes.draw do
  resources :problematics
  devise_for :users
  # resources :articles , except: [:delete] o , only: [:create] // en este cas este comando genera todas las rutas para CRUD del modelo Articles
  #Y es este caso se epecifica que se crearan todas las rutas excepto la de borrar

  get 'welcome/index'
  #get "especial", to: "welcome#index"// este comando genera que la ruta /especial sea igual que
  # escribir welcome#index

  root 'welcome#index'
  # direcciona a esta ruta la raiz de la url
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
