Rails.application.routes.draw do
  scope '/api/getty' do
    get :records, to: 'getty_objects#index'
    get :search, to: 'getty_objects#search'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
