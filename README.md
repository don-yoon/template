## CREATE APP
```bash
rails new don-portfolio-app -d postgresql -T
cd capstone-app
rails db:create
```

## ADDING RSpec
```bash
bundle add rspec-rails
rails generate rspec:install
```

## ADDING React
```bash
bundle add webpacker
bundle add react-rails
rails webpacker:install
rails webpacker:install:react
yarn add @babel/preset-react
yarn add @rails/activestorage
yarn add @rails/ujs
rails generate react:install
rails generate react:component App
```

## ADDING DEVISE
```bash
bundle add devise
rails generate devise:install
rails generate devise User
rails db:migrate
```

### config/environments/development.rb
```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

### config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

## Rails Routing
```bash
rails generate controller Home
```
- Add a file in app/views/home called index.html.erb
- Add the following:

### app/views/home/index.html.erb
```ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```
### Home Controller and Routes
- Add this empty method to the Home controller
```ruby
    def index
    
    end
```
- Add this to routes.rb to let all views go to the react front end
```ruby
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
```


### Add the following:

app/views/layouts/application.html.erb
```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```
----------
> https://tailwindcss.com/docs/guides/ruby-on-rails

### Adding Tailwind CSS
```bash
gem install tailwindcss-rails
bundle add tailwindcss-rails
rails tailwindcss:install
yarn add tailwindcss
```
----------

### app/assets/stylesheets/application.css
UNLIKE PREVIOUS REACT-RAILS monolithic app, leave as css and do not change to scss.
All other necessary files should be generated from previous terminal commands
- Configure your template paths
```css
 @import "tailwindcss/base";
 @import "tailwindcss/components";
 @import "tailwindcss/utilties";
```
- Add the paths to all of your template files to your ./config/tailwind.config.js file.
- Add this to the content
```javascript
'./app/javascript/**/**/*.js',
```

```javascript
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
```



## Start server with 
```bash
./bin/dev
```

# ML5 DEMO

We start with adding new dependencies
```bash
$yarn add react-p5
$yarn add ml5
```

- Add this to our application.html.erb. This script will let us use ML5 syntax within our application and access the pre trained models.
```html
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>
```

----------

----CURRENTLY NOT YET IMPLEMENTED----
### Resources
```bash
rails g scaffold ModelName name:string image:string ingredients:text directions:text user:references --api
```
Go to modelname migration and add the following to the ingredients and directions row;
```ruby
      t.text :ingredients, array: true, default:[]
      t.text :directions, array: true, default:[]
```
### Adding seeds
- please refer to seeds.rb

### Jest testing
```bash
yarn add jest
yarn add jest-enzyme
yarn add enzyme
yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
```

### New Driver Starting Commands
```bash
yarn
bundle
yarn add reactstrap
rails db:setup
```