document.addEventListener('DOMContentLoaded', function() {
    const heritageSites = [
        {
            id: 1,
            name: "George Town, Penang",
            description: "Historic city with colonial architecture and multicultural heritage.",
            image: "https://www.gpsmycity.com/img/gd_cover/6810.jpg",
            location: "penang",
            category: "unesco",
            rating: 4.8
        },
        {
            id: 2,
            name: "Melaka Historic City",
            description: "Former colonial port with Dutch and Portuguese influences.",
            image: "https://i.pinimg.com/originals/4e/80/05/4e8005b30cd30fd6bd024882446036f6.jpg",
            location: "malacca",
            category: "unesco",
            rating: 4.7
        },
        {
            id: 3,
            name: "Kellie's Castle",
            description: "Unfinished Moorish-style mansion with a mysterious history.",
            image: "https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/bltcf387505c25932ca/6178c3303ce65615842b41f2/00-the-mystery-of-kellie_s-castle-a-haunting-ode-to-love-getty-cropped.jpg",
            location: "perak",
            category: "architecture",
            rating: 4.5
        },
        {
            id: 4,
            name: "Kinabalu Park",
            description: "Malaysia's first UNESCO World Heritage Site, home to Mount Kinabalu.",
            image: "https://www.mountkinabalu.com/image/mt-k.jpg",
            location: "sabah",
            category: "nature",
            rating: 4.9
        },
        {
            id: 5,
            name: "Sarawak Cultural Village",
            description: "Living museum showcasing the diverse cultures of Sarawak.",
            image: "https://th.bing.com/th/id/R.b74ed283d0124615c052b35f28208523?rik=axKisSzmwzG%2fhA&riu=http%3a%2f%2fcdn.borneoartifact.com%2fwp-content%2fuploads%2f2019%2f07%2fsarawak-cultural-village.jpg&ehk=rGlQV2EBY%2btiGUF8ok59GUk9KaE9OnPv%2byvcMsvRKUI%3d&risl=&pid=ImgRaw&r=0",
            location: "sarawak",
            category: "architecture",
            rating: 4.6
        },
         {
        id: 6,
        name: "Istana Besar Johor",
        description: "Grand palace of Johor with a mix of Malay and Western architecture.",
        image: "https://www.molon.de/galleries/Malaysia/EastCoast/JB/Palace/images01/01%20Istana%20Besar%20palace.jpg",
        location: "johor",
        category: "architecture",
        rating: 4.3
    },
    {
        id: 7,
        name: "Bujang Valley",
        description: "Ancient archaeological site with Hindu-Buddhist temple ruins.",
        image: "https://thumbs.dreamstime.com/b/lembah-bujang-bujang-valley-popular-archeological-museum-merbok-kedah-malaysia-hindu-buddhism-influence-lembah-259904828.jpg",
        location: "kedah",
        category: "historical",
        rating: 4.1
    },
    {
        id: 8,
        name: "Istana Jahar",
        description: "Traditional Malay wooden palace showcasing Kelantanese culture.",
        image: "https://img.freepik.com/premium-photo/istana-jahar-royal-museum-kota-bharu-malaysia_723123-3211.jpg",
        location: "kelantan",
        category: "cultural",
        rating: 4.0
    },
    {
        id: 9,
        name: "Taman Negara",
        description: "One of the world's oldest rainforests, rich in biodiversity.",
        image: "https://th.bing.com/th/id/OIP.tEEIgy7m29KSbBt25q3qVwHaEu?r=0&w=1000&h=639&rs=1&pid=ImgDetMain",
        location: "pahang",
        category: "nature",
        rating: 4.7
    },
    {
        id: 10,
        name: "Rumah Terbalik (Upside Down House)",
        description: "Quirky attraction featuring an inverted house.",
        image: "https://thesmartlocal.com/wp-content/uploads/2013/06/images_easyblog_images_632_IMG_0742.JPG",
        location: "sabah",
        category: "unique",
        rating: 4.4
    },
    {
        id: 11,
        name: "Kuala Selangor Historical Town",
        description: "Coastal town with Dutch-era ruins (Altingsburg Lighthouse), firefly colonies, and royal heritage.",
        image: "https://www.tropicalsojourn.com/wp-content/uploads/2024/09/kuala-selangor.webp",
        location: "selangor",
        category: "historical",
        rating: 4.2
    },
    {
        id: 12,
        name: "Sri Subramaniar Temple (Batu Caves)",
        description: "Hindu temple in a limestone cave, famous for its towering golden statue and Thaipusam festival.",
        image: "https://th.bing.com/th/id/OIP.MwbxlVNB7UGmI6G09Xy5BQHaE8?r=0&rs=1&pid=ImgDetMain",
        location: "selangor",
        category: "cultural",
        rating: 4.8
    },
    {
        id: 13,
        name: "Sultan Abdul Samad Building",
        description: "Iconic 19th-century Moorish-style government building, a landmark of KL's colonial history.",
        image: "https://img.freepik.com/premium-photo/sultan-abdul-samad-building-kuala-lumpur_261932-11041.jpg",
        location: "kuala lumpur",
        category: "architecture",
        rating: 4.7
    },
    {
        id: 14,
        name: "Merdeka Square (Dataran Merdeka)",
        description: "Historic square where Malaysia declared independence in 1957, surrounded by colonial-era buildings.",
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474431-Merdeka-Square.jpg",
        location: "kuala lumpur",
        category: "historical",
        rating: 4.5
    },

];

    
    
    const CulturalEvents = [
        {
            id: 1,
            name: "New Year's Day",
            description: "Celebration of the new Gregoriannn calendar year.",
            date: "2025-01-01",
            location: "Nationwide",
            image: "https://www.pamper.my/news/wp-content/uploads/2017/12/pamper.my_klcc-1.jpg",
            category: "national"
        },
        {
            id: 2,
            name: "Thaipusam",
            description: "Hindu festival celebrated by the Tamil community, featuring processions and piercings.",
            date: "2025-01-25",
            location: "Nationwide (major celebrations at Batu Caves)",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "indian"
        },

        {
            id: 3,
            name: "Chinese New Year",
            description: "Celebration of the new year according to the Chinese lunar calendar.",
            date: "2025-02-10",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "chinese"
        },
        {
            id: 4,
            name: "Chap Goh Mei",
            description: "Fifteenth day of Chinese New Year, marking its conclusion.",
            date: "2025-02-24",
            location: "Nationwide (especially Penang)",
            image: "https://www.pamper.my/news/wp-content/uploads/2017/12/pamper.my_klcc-1.jpg",
            category: "chinese"
        },

        {
            id: 5,
            name: "Awal Muharram (Islamic New Year)",
            description: "Marks the beginning of the new Islamic calendar year.",
            date: "2025-03-20",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "islamic"
        },


        {
            id: 6,
            name: "Good Friday",
            description: "Christian holiday commemorating the crucifixion of Jesus.",
            date: "2025-04-07",
            location: "Nationwide (especially East Malaysia)",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "christian"
        },
        {
            id: 7,
            name: "Vaisakhi",
            description: "Sikh festival commemorating the formation of the Khalsa.",
            date: "2025-04-13",
            location: "Nationwide (especially Sikh communities)",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "sikh"
        },


        {
            id: 8,
            name: "Labour Day",
            description: "International Workers' Day celebrating labor movements.",
            date: "2025-05-01",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },
        {
            id: 9,
            name: "Wesak Day",
            description: "Buddhist festival commemorating the birth, enlightenment and passing of Buddha.",
            date: "2025-05-22",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "buddhist"
        },

  
        {
            id: 10,
            name: "Agong's Birthday",
            description: "Official birthday celebration of Malaysia's King.",
            date: "2025-06-03",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },
        {
            id: 11,
            name: "Gawai Dayak",
            description: "Harvest festival celebrated by the Dayak people in Sarawak.",
            date: "2025-06-01",
            location: "Sarawak",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "borneo"
        },
        {
            id: 12,
            name: "Kaamatan Festival",
            description: "Harvest festival celebrated by the Kadazan-Dusun people in Sabah.",
            date: "2025-05-30",
            location: "Sabah",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "borneo"
        },

  
        {
            id: 13,
            name: "Georgetown World Heritage Day",
            description: "Celebration of Penang's UNESCO World Heritage Site status.",
            date: "2025-07-07",
            location: "Penang",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "cultural"
        },

    
        {
            id: 14,
            name: "National Day (Hari Merdeka)",
            description: "Celebration of Malaysia's independence from British rule.",
            date: "2025-08-31",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },

        {
            id: 15,
            name: "Malaysia Day",
            description: "Commemorates the formation of Malaysia in 1963.",
            date: "2025-09-16",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },
        {
            id: 16,
            name: "Mid-Autumn Festival",
            description: "Chinese festival celebrating the harvest moon with lanterns and mooncakes.",
            date: "2025-09-17",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "chinese"
        },

     
        {
            id: 17,
            name: "Deepavali",
            description: "Hindu festival of lights celebrating the victory of light over darkness.",
            date: "2025-10-31",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "indian"
        },


        {
            id: 18,
            name: "Prophet Muhammad's Birthday",
            description: "Commemoration of the birth of the Prophet Muhammad.",
            date: "2025-11-15",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "islamic"
        },

       
        {
            id: 19,
            name: "Christmas Day",
            description: "Christian holiday celebrating the birth of Jesus Christ.",
            date: "2025-12-25",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "christian"
        },
        {
            id: 20,
            name: "New Year's Eve",
            description: "Celebration of the end of the year and beginning of the new one.",
            date: "2025-12-31",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },

       
        {
            id: 21,
            name: "Ramadan Begins",
            description: "Start of the Islamic holy month of fasting.",
            date: "2025-03-11",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "islamic"
        },
        {
            id: 22,
            name: "Nuzul Quran",
            description: "Commemoration of the revelation of the Quran.",
            date: "2025-04-06",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1580136606131-c0e04b424a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "islamic"
        },
        {
            id: 23,
            name: "Hari Raya Aidilfitri",
            description: "Celebration marking the end of Ramadan, the Islamic holy month of fasting.",
            date: "2025-04-10",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1600673782921-fb4f3b1a0d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "islamic"
        },
        {
            id: 24,
            name: "Hari Raya Haji",
            description: "Islamic festival of sacrifice commemorating Prophet Ibrahim's willingness to sacrifice his son.",
            date: "2025-06-17",
            location: "Nationwide",
            image: "https://www.pamper.my/news/wp-content/uploads/2017/12/pamper.my_klcc-1.jpg",
            category: "islamic"
        },
        {
            id: 10,
            name: "Agong's Birthday",
            description: "Official birthday celebration of Malaysia's King.",
            date: "2025-06-03",
            location: "Nationwide",
            image: "https://images.unsplash.com/photo-1518893883440-e244c7f7a0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "national"
        },
    ];
  
    const culturalEvents = [
        
        {
            id: 2,
            name: "Chinese New Year",
            description: "Celebration of the new year according to the Chinese lunar calendar.",
            date: "2025-01-22",
            location: "Nationwide",
            image: "https://th.bing.com/th/id/OIP.16TPcAcQxOJJXP2c__v5CQHaEo?r=0&rs=1&pid=ImgDetMain"
        },
       
        {
            id: 4,
            name: "Gawai Dayak",
            description: "Harvest festival celebrated by the Dayak people in Sarawak.",
            date: "2025-06-01",
            location: "Sarawak",
            image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Sarawak-Festival.jpg"
        },
        {
            id: 1,
            name: "New Year's Day",
            description: "Celebration of the new Gregorian calendar year.",
            date: "2025-01-01",
            location: "Nationwide",
            image: "https://www.pamper.my/news/wp-content/uploads/2017/12/pamper.my_klcc-1.jpg",
            category: "national"
        },
        {
            id: 8,
            name: "Labour Day",
            description: "International Workers' Day celebrating labor movements.",
            date: "2025-05-01",
            location: "Nationwide",
            image: "https://time.astrosage.com/images/festival/malaysia/labour-day.jpg",
            category: "national"
        },
        {
            id: 4,
            name: "Chap Goh Mei",
            description: "Fifteenth day of Chinese New Year, marking its conclusion.",
            date: "2025-02-24",
            location: "Nationwide (especially Penang)",
            image: "https://p1crires.cri.cn/yafei/p2/M00/6C/D3/CqgNOlqdB8SANg2dAAAAAAAAAAA624.600x399.jpg",
            category: "chinese"
        },
        {
            id: 21,
            name: "Ramadan Begins",
            description: "Start of the Islamic holy month of fasting.",
            date: "2025-03-11",
            location: "Nationwide",
            image: "https://i.pinimg.com/originals/ad/6f/8c/ad6f8cf01f9dca316dbd88d797b2079a.jpg",
            category: "islamic"
        },
        {
            id: 22,
            name: "Nuzul Quran",
            description: "Commemoration of the revelation of the Quran.",
            date: "2025-04-06",
            location: "Nationwide",
            image: "https://berita.pas.org.my/wp-content/uploads/2023/04/Peristiwa-Nuzul-Al-Quran.jpg",
            category: "islamic"
        },
        {
            id: 23,
            name: "Hari Raya Aidilfitri",
            description: "Celebration marking the end of Ramadan, the Islamic holy month of fasting.",
            date: "2025-04-10",
            location: "Nationwide",
            image: "https://th.bing.com/th/id/OIP.eUDZMAclsMarfrvOBX2aJgHaE8?r=0&rs=1&pid=ImgDetMain",
            category: "islamic"
        },
        {
            id: 24,
            name: "Hari Raya Haji",
            description: "Islamic festival of sacrifice commemorating Prophet Ibrahim's willingness to sacrifice his son.",
            date: "2025-06-17",
            location: "Nationwide",
            image: "https://time.astrosage.com/images/festival/malaysia/hari-raya-haji.jpg",
            category: "islamic"
        },
        {
            id: 10,
            name: "Agong's Birthday",
            description: "Official birthday celebration of Malaysia's King.",
            date: "2025-06-03",
            location: "Nationwide",
            image: "https://th.bing.com/th/id/R.44de8f7791734a19ebfec9345d801292?rik=J475pLEE85S%2f0A&riu=http%3a%2f%2fwww.kosmo.com.my%2fwp-content%2fuploads%2f2024%2f01%2fWhatsApp-Image-2024-01-31-at-2.12.02-PM.jpeg&ehk=0Wi1FNAxjePHqM1bWAQqVzxcDO4f45wKY3HvZANLyRE%3d&risl=&pid=ImgRaw&r=0",
            category: "national"
        },
        {
            id: 12,
            name: "Kaamatan Festival",
            description: "Harvest festival celebrated by the Kadazan-Dusun people in Sabah.",
            date: "2025-05-30",
            location: "Sabah",
            image: "https://www.holidaytourstravel.com/wp-content/uploads/2023/04/KaamatanSabah.jpg",
            category: "borneo"
        },

    
        {
            id: 13,
            name: "Georgetown World Heritage Day",
            description: "Celebration of Penang's UNESCO World Heritage Site status.",
            date: "2025-07-07",
            location: "Penang",
            image: "https://www.buletinmutiara.com/wp-content/uploads/2022/07/86095678-1535-4401-B578-2982D76C22E0-1202x800.jpeg",
            category: "cultural"
        },

    
        {
            id: 14,
            name: "National Day (Hari Merdeka)",
            description: "Celebration of Malaysia's independence from British rule.",
            date: "2025-08-31",
            location: "Nationwide",
            image: "https://alchetron.com/cdn/hari-merdeka-800e0696-7509-4795-a3e2-ca0135cea30-resize-750.jpeg",
            category: "national"
        },
        {
            id: 19,
            name: "Christmas Day",
            description: "Christian holiday celebrating the birth of Jesus Christ.",
            date: "2025-12-25",
            location: "Nationwide",
            image: "https://preview.redd.it/b6i4u9id2o641.jpg?auto=webp&s=aad4df487bc9517fafbcabae0712566b63c61dec",
            category: "christian"
        },
        {
            id: 20,
            name: "New Year's Eve",
            description: "Celebration of the end of the year and beginning of the new one.",
            date: "2025-12-31",
            location: "Nationwide",
            image: "https://www.wargabiz.com.my/wp-content/uploads/2021/12/photography-fireworks-city-colorful-wallpaper-preview.jpg",
            category: "national"
        },
        {
            id: 17,
            name: "Deepavali",
            description: "Hindu festival of lights celebrating the victory of light over darkness.",
            date: "2025-10-31",
            location: "Nationwide",
            image: "https://th.bing.com/th/id/OIP.GJSaN48C2EVH7PNmH0gCKAHaEK?r=0&rs=1&pid=ImgDetMain",
            category: "indian"
        },

       
        {
            id: 18,
            name: "Prophet Muhammad's Birthday",
            description: "Commemoration of the birth of the Prophet Muhammad.",
            date: "2025-11-15",
            location: "Nationwide",
            image: "https://cdn.statically.io/img/cdn.shortpixel.ai/spai/q_+ret_img+to_webp/www.malaysiabrands.com.my/wp-content/uploads/2021/08/photo-malaysia-brands-prophet-muhammad-birthday-greetings-2021-1200x630-1.jpg?quality=100&f=auto",
            category: "islamic"
        },
    ];

  
    const traditionalRecipes = [
        {
            id: 1,
            name: "Nasi Lemak",
            description: "Malaysia's national dish featuring fragrant rice cooked in coconut milk.",
            image: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/3f0d98a9-c59f-4dac-8071-4087d82aa365-scaled.jpeg",
            category: "malay",
            ingredients: [
                "2 cups rice",
                "1 cup coconut milk",
                "1 cup water",
                "1 pandan leaf (screwpine leaf), knotted",
                "1 tsp salt",
                "1/2 tsp ginger (optional)",
                "4 hard-boiled eggs",
                "1 cucumber, sliced",
                "1 cup fried anchovies (ikan bilis)",
                "1/2 cup roasted peanuts",
                "Sambal (chili paste)"
            ],
            instructions: [
                "Wash the rice until the water runs clear, then drain well.",
                "In a rice cooker pot, combine rice, coconut milk, water, pandan leaf, salt, and ginger (if using). Stir well.",
                "Cook the rice in the rice cooker as you normally would.",
                "Once cooked, let the rice sit for 10 minutes before fluffing with a fork.",
                "Serve the nasi lemak with hard-boiled eggs, sliced cucumber, fried anchovies, roasted peanuts, and sambal."
            ]
        },
        {
            id: 2,
            name: "Char Kway Teow",
            description: "Stir-fried rice noodles with prawns, eggs, and bean sprouts.",
            image: "https://rasamalaysia.com/wp-content/uploads/2009/11/char-koay-teow1.jpg",
            category: "chinese",
            ingredients: [
                "400g flat rice noodles (kway teow)",
                "200g prawns, shelled and deveined",
                "2 eggs",
                "1 cup bean sprouts",
                "2 stalks Chinese chives, cut into 2-inch lengths",
                "3 cloves garlic, minced",
                "2 tbsp soy sauce",
                "1 tbsp dark soy sauce",
                "1 tsp chili paste (optional)",
                "2 tbsp vegetable oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat oil in a wok or large frying pan over high heat.",
                "Add minced garlic and stir-fry until fragrant, about 30 seconds.",
                "Add prawns and stir-fry until they turn pink, about 1-2 minutes.",
                "Push the prawns to one side of the wok and crack the eggs into the empty space. Scramble the eggs lightly.",
                "Add the rice noodles and stir-fry for 1 minute.",
                "Add soy sauce, dark soy sauce, and chili paste (if using). Toss to combine.",
                "Add bean sprouts and Chinese chives. Stir-fry for another minute until vegetables are slightly wilted.",
                "Season with salt and pepper to taste. Serve hot."
            ]
        },
        {
            id: 3,
            name: "Roti Canai",
            description: "Flaky, crispy flatbread served with curry or dhal.",
            image: "https://th.bing.com/th/id/R.b368e1989b9717d2312d2d881a2d10e0?rik=E1wCOewUP9kd3A&riu=http%3a%2f%2fwww.kuali.com%2fwp-content%2fuploads%2f2015%2f05%2fRoti-canai.jpg&ehk=cZsB81W6eyKx3s%2bpjb%2fs9mXu8OCBzmLBLMo%2fS%2fhGlC0%3d&risl=&pid=ImgRaw&r=0",
            category: "indian",
            ingredients: [
                "3 cups all-purpose flour",
                "1 tsp salt",
                "1 tbsp sugar",
                "1 egg",
                "1 cup water",
                "1/2 cup ghee or margarine, melted",
                "1/2 cup condensed milk"
            ],
            instructions: [
                "In a large bowl, mix flour, salt, and sugar.",
                "Add egg, water, and condensed milk. Knead until a soft dough forms (about 10 minutes).",
                "Divide dough into 8 equal portions. Roll each into a ball and coat with melted ghee.",
                "Cover and let rest for at least 4 hours or overnight.",
                "On a greased surface, flatten a dough ball and stretch it as thin as possible.",
                "Fold the edges inward to create layers, then roll into a spiral.",
                "Flatten again and cook on a hot griddle with ghee until golden brown on both sides.",
                "Serve hot with curry or dhal."
            ]
        },
        {
            id: 4,
            name: "Ambuyat",
            description: "Traditional Bruneian and Sarawakian dish made from sago starch.",
            image: "https://2.bp.blogspot.com/-kLntDYIGcOA/WW2ETtn5T9I/AAAAAAAAFuw/xXycbH7krNUGiWJJFcms0kSJf1i0K3jZACLcBGAs/s1600/ambuyat.jpg",
            category: "borneo",
            ingredients: [
                "1 cup sago starch (tapioca starch can be substituted)",
                "4 cups water",
                "1/2 tsp salt"
            ],
            instructions: [
                "In a pot, mix sago starch with 1 cup of cold water until smooth.",
                "Bring the remaining 3 cups of water to a boil in another pot.",
                "Slowly pour the sago mixture into the boiling water while stirring constantly.",
                "Continue stirring until the mixture becomes thick and translucent.",
                "Reduce heat and cook for another 5 minutes, stirring continuously.",
                "Remove from heat and let it cool slightly before serving.",
                "Traditionally eaten by twirling around bamboo sticks and dipped in sauces."
            ]
        }
    ];

    
    const languagePhrases = {
        malay: [
            { phrase: "Selamat pagi", meaning: "Good morning" },
            { phrase: "Terima kasih", meaning: "Thank you" },
            { phrase: "Apa khabar?", meaning: "How are you?" },
            { phrase: "Saya tidak faham", meaning: "I don't understand" },
            { phrase: "Berapa harganya?", meaning: "How much does it cost?" },
            { phrase: "Di mana tandas?", meaning: "Where is the toilet?" }
        ],
        chinese: [
            { phrase: "早上好 (Zǎo shang hǎo)", meaning: "Good morning" },
            { phrase: "谢谢 (Xiè xiè)", meaning: "Thank you" },
            { phrase: "你好吗? (Nǐ hǎo ma?)", meaning: "How are you?" },
            { phrase: "我不明白 (Wǒ bù míng bái)", meaning: "I don't understand" },
            { phrase: "多少钱? (Duō shǎo qián?)", meaning: "How much does it cost?" },
            { phrase: "厕所在哪里? (Cè suǒ zài nǎ lǐ?)", meaning: "Where is the toilet?" }
        ],
        tamil: [
            { phrase: "காலை வணக்கம் (Kālai vaṇakkam)", meaning: "Good morning" },
            { phrase: "நன்றி (Naṉṟi)", meaning: "Thank you" },
            { phrase: "நீங்கள் எப்படி இருக்கிறீர்கள்? (Nīṅkaḷ eppaṭi irukkiṟīrkaḷ?)", meaning: "How are you?" },
            { phrase: "எனக்கு புரியவில்லை (Eṉakku puriyavillai)", meaning: "I don't understand" },
            { phrase: "இதன் விலை என்ன? (Itaṉ vilai eṉṉa?)", meaning: "How much does it cost?" },
            { phrase: "கழிப்பறை எங்கே? (Kaḻippaṟai eṅkē?)", meaning: "Where is the toilet?" }
        ],
        iban: [
            { phrase: "Selamat pagi", meaning: "Good morning" },
            { phrase: "Terima kasih", meaning: "Thank you" },
            { phrase: "Nama nuan?", meaning: "What is your name?" },
            { phrase: "Enda ku nemu", meaning: "I don't understand" },
            { phrase: "Berapa agi?", meaning: "How much does it cost?" },
            { phrase: "Dini jamban?", meaning: "Where is the toilet?" }
        ]
    };

   
    const languageQuizzes = {
        malay: [
            {
                question: "What does 'Selamat malam' mean?",
                options: ["Good morning", "Good night", "Good afternoon", "Good evening"],
                answer: 1
            },
            {
                question: "How do you say 'thank you' in Malay?",
                options: ["Sama-sama", "Terima kasih", "Tolong", "Maaf"],
                answer: 1
            },
            {
                question: "What is the Malay word for 'toilet'?",
                options: ["Restoran", "Tandas", "Kedai", "Rumah"],
                answer: 1
            }
        ],
        chinese: [
            {
                question: "What does '晚上好 (Wǎn shang hǎo)' mean?",
                options: ["Good morning", "Good night", "Good afternoon", "Good evening"],
                answer: 3
            },
            {
                question: "How do you say 'thank you' in Chinese?",
                options: ["请 (Qǐng)", "谢谢 (Xiè xiè)", "你好 (Nǐ hǎo)", "对不起 (Duì bu qǐ)"],
                answer: 1
            },
            {
                question: "What is the Chinese word for 'toilet'?",
                options: ["餐厅 (Cān tīng)", "商店 (Shāng diàn)", "厕所 (Cè suǒ)", "家 (Jiā)"],
                answer: 2
            }
        ],
        tamil: [
            {
                question: "What does 'மாலை வணக்கம் (Mālai vaṇakkam)' mean?",
                options: ["Good morning", "Good night", "Good afternoon", "Good evening"],
                answer: 3
            },
            {
                question: "How do you say 'thank you' in Tamil?",
                options: ["தயவு செய்து (Tayavu ceytu)", "நன்றி (Naṉṟi)", "உதவி (Utavi)", "மன்னிக்கவும் (Maṉṉikkavum)"],
                answer: 1
            },
            {
                question: "What is the Tamil word for 'toilet'?",
                options: ["உணவகம் (Uṇavakam)", "கடை (Kaṭai)", "கழிப்பறை (Kaḻippaṟai)", "வீடு (Vīṭu)"],
                answer: 2
            }
        ],
        iban: [
            {
                question: "What does 'Selamat lemai' mean?",
                options: ["Good morning", "Good night", "Good afternoon", "Good evening"],
                answer: 1
            },
            {
                question: "How do you say 'thank you' in Iban?",
                options: ["Terima kasih", "Aram kitai", "Enda nemu", "Pengerindu"],
                answer: 0
            },
            {
                question: "What is the Iban word for 'toilet'?",
                options: ["Kedai", "Jamban", "Rumah", "Dapur"],
                answer: 1
            }
        ]
    };

 
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

  
    function init() {
        displayHeritageSites(heritageSites);
        setupEventListeners();
        generateCalendar(currentMonth, currentYear);
        displayEventsForMonth(currentMonth, currentYear);
        displayRecipes(traditionalRecipes);
        displayLanguageContent('malay');
    }

    function displayHeritageSites(sites) {
        const container = document.getElementById('sites-container');
        container.innerHTML = '';
        
        sites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${site.image}" alt="${site.name}">
                <div class="card-content">
                    <h3>${site.name}</h3>
                    <p>${site.description}</p>
                    <p><strong>Location:</strong> ${capitalizeFirstLetter(site.location)}</p>
                    <p><strong>Rating:</strong> ${site.rating}/5</p>
                    
                </div>
            `;
            container.appendChild(card);
        });
    }

 
    function displayRecipes(recipes) {
        const container = document.getElementById('recipes-container');
        container.innerHTML = '';
        
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.category = recipe.category;
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <button class="btn view-recipe-btn" data-id="${recipe.id}">View Recipe</button>
                </div>
            `;
            container.appendChild(card);
        });

      
        document.querySelectorAll('.view-recipe-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = parseInt(this.dataset.id);
                const recipe = traditionalRecipes.find(r => r.id === recipeId);
                showRecipeModal(recipe);
            });
        });
    }

 
    function showRecipeModal(recipe) {
        const modal = document.getElementById('recipe-modal');
        const title = document.getElementById('modal-recipe-title');
        const image = document.getElementById('modal-recipe-image');
        const ingredients = document.getElementById('modal-recipe-ingredients');
        const instructions = document.getElementById('modal-recipe-instructions');

        title.textContent = recipe.name;
        image.src = recipe.image;
        image.alt = recipe.name;

        ingredients.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredients.appendChild(li);
        });

        instructions.innerHTML = '';
        recipe.instructions.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            instructions.appendChild(li);
        });

        modal.style.display = 'block';
    }

  
    function generateCalendar(month, year) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.getElementById('current-month').textContent = `${monthNames[month]} ${year}`;
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const calendarGrid = document.getElementById('calendar-grid');
        calendarGrid.innerHTML = '';
        
      
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day header';
            dayElement.textContent = day;
            calendarGrid.appendChild(dayElement);
        });
        
        
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day';
            calendarGrid.appendChild(emptyCell);
        }
        
       
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
           
            const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const hasEvent = culturalEvents.some(event => event.date === dateStr);
            
            if (hasEvent) {
                dayElement.classList.add('event');
                dayElement.addEventListener('click', () => {
                    displayEventsForDate(dateStr);
                });
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }

   
    function displayEventsForMonth(month, year) {
        const monthStr = (month + 1).toString().padStart(2, '0');
        const eventsThisMonth = culturalEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === month && eventDate.getFullYear() === year;
        });
        
        displayEvents(eventsThisMonth);
    }

    
    function displayEventsForDate(dateStr) {
        const eventsOnDate = culturalEvents.filter(event => event.date === dateStr);
        displayEvents(eventsOnDate);
    }

    
    function displayEvents(events) {
        const container = document.getElementById('events-list');
        container.innerHTML = '';
        
        if (events.length === 0) {
            container.innerHTML = '<p>No events found for this date.</p>';
            return;
        }
        
        events.forEach(event => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${event.image}" alt="${event.name}">
                <div class="card-content">
                    <h3>${event.name}</h3>
                    <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p>${event.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    
    function displayLanguageContent(language) {
        const phrasesContainer = document.getElementById('phrases-list');
        phrasesContainer.innerHTML = '';
        
        languagePhrases[language].forEach(phrase => {
            const phraseElement = document.createElement('div');
            phraseElement.className = 'phrase-item';
            phraseElement.innerHTML = `
                <h4>${phrase.phrase}</h4>
                <p>${phrase.meaning}</p>
            `;
            phrasesContainer.appendChild(phraseElement);
        });
        
 
        setupLanguageQuiz(language);
    }

  
    function setupLanguageQuiz(language) {
        const quiz = languageQuizzes[language];
        let currentQuestion = 0;
        
        function displayQuestion() {
            const questionContainer = document.getElementById('quiz-question');
            const optionsContainer = document.getElementById('quiz-options');
            const feedbackContainer = document.getElementById('quiz-feedback');
            
            if (currentQuestion >= quiz.length) {
               
                questionContainer.textContent = "Quiz completed! Well done!";
                optionsContainer.innerHTML = '';
                feedbackContainer.textContent = '';
                document.getElementById('next-quiz-btn').style.display = 'none';
                return;
            }
            
            const question = quiz[currentQuestion];
            questionContainer.textContent = question.question;
            optionsContainer.innerHTML = '';
            feedbackContainer.textContent = '';
            
            question.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = option;
                optionBtn.dataset.index = index;
                optionBtn.addEventListener('click', function() {
                    checkAnswer(this.dataset.index, question.answer);
                });
                optionsContainer.appendChild(optionBtn);
            });
            
            document.getElementById('next-quiz-btn').style.display = 'none';
        }
        
        function checkAnswer(selectedIndex, correctIndex) {
            const options = document.querySelectorAll('.option-btn');
            const feedbackContainer = document.getElementById('quiz-feedback');
            
            options.forEach((option, index) => {
                if (index == correctIndex) {
                    option.style.backgroundColor = '#4CAF50';
                    option.style.color = 'white';
                } else if (index == selectedIndex && selectedIndex != correctIndex) {
                    option.style.backgroundColor = '#f44336';
                    option.style.color = 'white';
                }
                option.disabled = true;
            });
            
            if (selectedIndex == correctIndex) {
                feedbackContainer.textContent = "Correct! Well done!";
                feedbackContainer.style.color = '#4CAF50';
            } else {
                feedbackContainer.textContent = "Incorrect. Try again next time!";
                feedbackContainer.style.color = '#f44336';
            }
            
            document.getElementById('next-quiz-btn').style.display = 'inline-block';
        }
        
        document.getElementById('next-quiz-btn').addEventListener('click', function() {
            currentQuestion++;
            displayQuestion();
        });
        
        displayQuestion();
    }

    function setupEventListeners() {
    
        document.getElementById('search-btn').addEventListener('click', searchHeritageSites);
        document.getElementById('site-search').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') searchHeritageSites();
        });
        
        document.getElementById('state-filter').addEventListener('change', filterHeritageSites);
        document.getElementById('category-filter').addEventListener('change', filterHeritageSites);
        
    
        document.getElementById('prev-month').addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
            displayEventsForMonth(currentMonth, currentYear);
        });
        
        document.getElementById('next-month').addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
            displayEventsForMonth(currentMonth, currentYear);
        });
        
      
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                if (category === 'all') {
                    displayRecipes(traditionalRecipes);
                } else {
                    const filteredRecipes = traditionalRecipes.filter(recipe => recipe.category === category);
                    displayRecipes(filteredRecipes);
                }
            });
        });
        
      
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                displayLanguageContent(this.dataset.language);
            });
        });
        
       
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.getElementById('recipe-modal').style.display = 'none';
        });
        
    
        window.addEventListener('click', function(e) {
            const modal = document.getElementById('recipe-modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

 
    function searchHeritageSites() {
        const searchTerm = document.getElementById('site-search').value.toLowerCase();
        const filteredSites = heritageSites.filter(site => 
            site.name.toLowerCase().includes(searchTerm) || 
            site.description.toLowerCase().includes(searchTerm)
        );
        displayHeritageSites(filteredSites);
    }

   
    function filterHeritageSites() {
        const state = document.getElementById('state-filter').value;
        const category = document.getElementById('category-filter').value;
        
        let filteredSites = heritageSites;
        
        if (state) {
            filteredSites = filteredSites.filter(site => site.location === state);
        }
        
        if (category) {
            filteredSites = filteredSites.filter(site => site.category === category);
        }
        
        displayHeritageSites(filteredSites);
    }

    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

   
    init();
});
