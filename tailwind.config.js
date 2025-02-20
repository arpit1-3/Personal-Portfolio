tailwind.config={
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            FontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "sans-serif"]
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        }
           
    },
     darkMode: 'selector'
}