Hello squad!!!

if the UI of dashboard does not look good from your side; follow these simple steps;
# step1

`npm install -D tailwindcss postcss autoprefixer`
# step 2

`npx tailwindcss init -p` -> after this completes, you will see two files named `postcss.config.js` & `tailwind.config.js`
# step 3

Paste the below string in the `content[],` array, which you will see in `tailwind.config.js`.

`"./src/**/*.{js,jsx,ts,tsx}"`

# step 4

In `src/index.css` paste the below lines of code

`@tailwind base;` `@tailwind components;` `@tailwind utilities;`
# THEN YOU ARE GOOD TO GO, THANK YOU.
