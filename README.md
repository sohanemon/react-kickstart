## Initial setup
![structure](https://www.xenonstack.com/hubfs/xenonstack-react-directory-structure.png)

```sh
cd src
rm App.css
mkdir assets components context hooks pages layouts features routes utils lib
touch .env
cd components
mkdir form ui
cd ..
cd pages
touch home.jsx login.jsx
cd..
cd layouts
touch main.jsx header.jsx footer.jsx
cd ..
cd routes
touch router.jsx privateRoute.jsx
cd ..
```
> utils are functions that implemented by me

> lib are function with third party libraries

## Initial setup v2

```sh
touch .env
echo '.env' >> .gitignore
cd src
rm App.css
mkdir assets components context hooks pages layouts features routes utils lib
cd components
mkdir form ui
cd ..
cd pages
echo 'const Home = () => {
  return <></>;
};

export default Home;' > home.jsx
echo 'const Login = () => {
  return <></>;
};

export default Login;' > login.jsx
cd ..
cd layouts
echo 'const Main = () => {
  return <></>;
};

export default Main;' > main.jsx
echo 'const Header = () => {
  return <></>;
};

export default Header;' > header.jsx
echo 'const Footer = () => {
  return <></>;
};

export default Footer;' > footer.jsx
cd ..
cd routes
echo 'const router=[]

export default router;' > router.jsx
echo 'const PrivateRoute = () => {
  return <></>;
};

export default PrivateRoute;' > private-route.jsx
cd ..
```

## Start with tailwind css CRA
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
echo '/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}' > tailwind.config.js
echo '@tailwind base;
@tailwind components;
@tailwind utilities;' > src/index.css
```
