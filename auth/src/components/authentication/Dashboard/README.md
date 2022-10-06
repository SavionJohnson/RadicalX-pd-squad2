Hello squad!!!

if the UI of dashboard does not look good from your side follow these simple steps;

# step1
`npm i -D taiwindcss autoprefixer postcss`

# step 2
`npx tailwindcss init -p` -> after this completes, you will see two files named `postcss.config.js` & `tailwind.config.css`

# step 3
In `tailwind.config.css`
Paste the below code in the `content:` array.

content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]

# THEN YOU ARE GOOD TO GO, THANK YOU.