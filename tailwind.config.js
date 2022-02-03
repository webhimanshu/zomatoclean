module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      height:
      {
       '180':'45rem',  
      },
      colors:
      {
        'zomato-rgba':'rgb(255, 126, 139)',
        'logo-color':'rgb(130, 130, 130)',
        'search-border':'rgb(232, 232, 232)',
        'border-shadow':'rgb(28 28 28 / 8%) 0px 2px 8px',
        'line-color':"rgb(207, 207, 207)",
        'font-color':'rgb(105, 105, 105)',
        'bike-color':'#FCEEC0',
        'bg-color':'#F8F8F8',
        'text-color':'#696969',
        'nav-font':"#9C9C9C",
        'footer-bg-color':"rgb(248, 248, 248);",
        'border-color':'rgb(181, 181, 181)',
        "card-font":"rgb(28, 28, 28)",
        "text-meal":"rgb(54, 54, 54)",
      },
    },
  },
  plugins: [],
}
