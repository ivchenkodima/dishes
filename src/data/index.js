export const FILTER = {
    status : true,
    findName: {
        status: false,
        search: ''
    },
    typeKichen: {
        status: false,
        search: ''
    },
    minimumOrder: {
        status: false,
        search: ''
    },
    openNow: false
};

export const SORT = {
    status: false,
    sortBy : ''
};


export const RESTAURANT = [
    {
        id: 2781108702,
        nameRestaurant: "Franco Cafe & Restaurant",
        imgLink: "data/img/1.img",
        status: {
            open: "8",
            close: "22"
        },
        typeKitchen: "mediterranean",
        geolocation: {
            latitude: "40",
            longitude: "60"
        },
        minOrder: "15",
        rating: "4",
        dishes: [
            {
                id: 9126789346,
                name: "Fresco's Penne Chicken",
                price: "7.25",
                type: "halal",
                complement: "сhicken, lemon, pepper, salt, parsley"
            },
            {
                id: 1612947604,
                name: "Spaghetti Rabbit",
                price: "7.95",
                type: "vegetarian, halal",
                complement: "rabbit, spaghetti, pepper, salt, parsley"
            },
            {
                id: 5877044309,
                name: "Linguine Calamari",
                price: "17.25",
                type: "vegan",
                complement: "calamari, lemon, pepper, salt, parsley"
            }
        ]
    },
    {
        id: 3326555765,
        nameRestaurant: "Friends",
        imgLink: "data/img/2.img",
        status: {
            open: "10",
            close: "22"
        },
        typeKitchen: "pizza",
        geolocation: {
            latitude: "50",
            longitude: "70"
        },
        minOrder: "10",
        rating: "5",
        dishes: [
            {
                id: 6085351263,
                name: "Vegetarian Pizza",
                price: "7.25",
                type: "halal",
                complement: "cheese, sausages, lemon, pepper, salt, parsley"
            },
            {
                id: 6974105199,
                name: "Spaghetti Rabbit",
                price: "7.95",
                type: "vegetarian, halal",
                complement: "rabbit, spaghetti, pepper, salt, parsley"
            },
            {
                id: 2822088187,
                name: "Linguine Calamari",
                price: "17.25",
                type: "vegan",
                complement: "calamari, lemon, pepper, salt, parsley"
            }
        ]
    },
    {
        id: 1994118045,
        nameRestaurant: "American Express Bakery",
        imgLink: "data/img/4.img",
        status: {
            open: "22",
            close: "8"
        },
        typeKitchen: "Burger & Co",
        geolocation: {
            latitude: "44",
            longitude: "55"
        },
        minOrder: "9",
        rating: "4.6",
        dishes: [
            {
                id: 2858890335,
                name: "Tapioca",
                price: "6.95",
                type: "vegetarian",
                complement: " tapioca chips, pepper, salt, parsley"
            },
            {
                id: 1202977982,
                name: "Brandy butter",
                price: "7.35",
                type: "vegan",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 9317530643,
                name: "Chinese rice dish",
                price: "7.95",
                type: "vegetarian, halal",
                complement: "rice, pepper, salt, parsley"
            },
            {
                id: 8068673253,
                name: "Coulis",
                price: "17.25",
                type: "halal",
                complement: "strawberry, lemon, sugar, sauce"
            }
        ]
    },
    {
        id: 6342796572,
        nameRestaurant: "La Bou",
        imgLink: "data/img/5.img",
        status: {
            open: "15",
            close: "23"
        },
        typeKitchen: "Burger & Co",
        geolocation: {
            latitude: "34",
            longitude: "65"
        },
        minOrder: "15",
        rating: "4.8",
        dishes: [
            {
                id: 7121288862,
                name: "Croutons",
                price: "8.95",
                type: "vegan",
                complement: " bread, butter, sugar, other oil"
            },
            {
                id: 3409059554,
                name: "Brandy butter",
                price: "4.15",
                type: "halal",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 3953097392,
                name: "Pasta",
                price: "5.45",
                type: "vegan, halal",
                complement: "tapioa, sago, salep, parsley"
            },
            {
                id: 1992225542,
                name: "Royale",
                price: "13.25",
                type: "halal",
                complement: "egg, lemon, salt, peper, sauce"
            }
        ]
    },
    {
        id: 4975865221,
        nameRestaurant: "Monginis",
        imgLink: "data/img/6.img",
        status: {
            open: "12",
            close: "20"
        },
        typeKitchen: "Pizza",
        geolocation: {
            latitude: "34.5",
            longitude: "65.98"
        },
        minOrder: "17",
        rating: "4.9",
        dishes: [
            {
                id: 9735704658,
                name: "Potatoes",
                price: "8.45",
                type: "kosher",
                complement: " bread, butter, sugar, other oil"
            },
            {
                id: 3678529716,
                name: "Mirepoix",
                price: "4.95",
                type: "halal",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 8911247926,
                name: "Salpicon",
                price: "5.5",
                type: "halal",
                complement: "tapioa, sago, salep, parsley"
            },
            {
                id: 8165376356,
                name: "Fritters",
                price: "10.25",
                type: "kosher",
                complement: "egg, lemon, salt, peper, sauce"
            }
        ]
    },
    {
        id: 9938155995,
        nameRestaurant: "Montreal Arts Interculturels",
        imgLink: "data/img/7.img",
        status: {
            open: "8",
            close: "22"
        },
        typeKitchen: "mediterranean",
        geolocation: {
            latitude: "41",
            longitude: "61"
        },
        minOrder: "15",
        rating: "4",
        dishes: [
            {
                id: 1597740177,
                name: "Montreal Chicken",
                price: "7.25",
                type: "halal",
                complement: "сhicken, lemon, pepper, salt, parsley"
            },
            {
                id: 5496671242,
                name: "Montreal Rabbit",
                price: "7.95",
                type: "vegetarian, halal",
                complement: "rabbit, spaghetti, pepper, salt, parsley"
            },
            {
                id: 7665941706,
                name: "Montreal Calamari",
                price: "17.25",
                type: "vegan",
                complement: "calamari, lemon, pepper, salt, parsley"
            }
        ]
    },
    {
        id: 9688486562,
        nameRestaurant: "Nirala Sweets",
        imgLink: "data/img/8.img",
        status: {
            open: "10",
            close: "22"
        },
        typeKitchen: "pizza",
        geolocation: {
            latitude: "51",
            longitude: "75"
        },
        minOrder: "10",
        rating: "5",
        dishes: [
            {
                id: 7895092424,
                name: "Nirala Pizza",
                price: "7.15",
                type: "halal",
                complement: "cheese, sausages, lemon, pepper, salt, parsley"
            },
            {
                id: 3446729976,
                name: "Nirala Rabbit",
                price: "7.5",
                type: "vegetarian, halal",
                complement: "rabbit, spaghetti, pepper, salt, parsley"
            },
            {
                id: 9414126455,
                name: "Nirala Calamari",
                price: "7.25",
                type: "vegan",
                complement: "calamari, lemon, pepper, salt, parsley"
            }
        ]
    },
    {
        id: 4003978121,
        nameRestaurant: "One World Cafe",
        imgLink: "data/img/8.img",
        status: {
            open: "6",
            close: "22"
        },
        typeKitchen: "Burger & Co",
        geolocation: {
            latitude: "44",
            longitude: "55"
        },
        minOrder: "4",
        rating: "4.6",
        dishes: [
            {
                id: 9865892537,
                name: "World Tapioca",
                price: "2.95",
                type: "vegetarian",
                complement: " tapioca chips, pepper, salt, parsley"
            },
            {
                id: 1040329408,
                name: "World butter",
                price: "4.35",
                type: "vegan",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 3308707509,
                name: "Chinese world rice dish",
                price: "7.5",
                type: "vegetarian, halal",
                complement: "rice, pepper, salt, parsley"
            },
            {
                id: 5989497291,
                name: "World coulis",
                price: "17.25",
                type: "halal",
                complement: "strawberry, lemon, sugar, sauce"
            }
        ]
    },
    {
        id: 2569660603,
        nameRestaurant: "Red Ribbon",
        imgLink: "data/img/10.img",
        status: {
            open: "5",
            close: "23"
        },
        typeKitchen: "Asian",
        geolocation: {
            latitude: "74",
            longitude: "15"
        },
        minOrder: "15",
        rating: "4.5",
        dishes: [
            {
                id: 2393971353,
                name: "Red Croutons",
                price: "18.95",
                type: "vegan",
                complement: " bread, butter, sugar, other oil"
            },
            {
                id: 9058579177,
                name: "Red Brandy butter",
                price: "14.15",
                type: "halal",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 3395652725,
                name: "Red Pasta",
                price: "5.45",
                type: "vegan, halal",
                complement: "tapioa, sago, salep, parsley"
            },
            {
                id: 8267847820,
                name: "Red Royale",
                price: "13.25",
                type: "halal",
                complement: "egg, lemon, salt, peper, sauce"
            }
        ]
    },
    {
        id: 5486104521,
        nameRestaurant: "Yatala Pie Shop",
        imgLink: "data/img/12.img",
        status: {
            open: "10",
            close: "20"
        },
        typeKitchen: "Asian",
        geolocation: {
            latitude: "33.5",
            longitude: "55.98"
        },
        minOrder: "7",
        rating: "3",
        dishes: [
            {
                id: 1197394924,
                name: "Asian Potatoes",
                price: "8.45",
                type: "vegan",
                complement: " bread, butter, sugar, other oil"
            },
            {
                id: 6220476347,
                name: "Asian Mirepoix",
                price: "4.95",
                type: "halal",
                complement: "butter, lemon, pepper, salt, parsley"
            },
            {
                id: 2065615006,
                name: "Asian Salpicon",
                price: "5.5",
                type: "halal",
                complement: "tapioa, sago, salep, parsley"
            },
            {
                id: 8073486688,
                name: "Asian Fritters",
                price: "10.25",
                type: "kosher",
                complement: "egg, lemon, salt, peper, sauce"
            }
        ]
    },
];


export const DISHES = [
    {
        id: "7012366845",
        name: "Crock Pot Roast",
        description: "Place beef roast in crock pot. Mix the dried mixes together in a bowl and sprinkle over the roast. Pour the water around the roast. Cook on low for 7-9 hours.",
        options: [
            {
                name: "beef roast",
                price: "5"
            },
            {
                name: "brown gravy mix",
                price: "4"
            },
            {
                name: "dried Italian salad dressing mix",
                price: "5"
            },
            {
                name: "dry ranch dressing mix",
                price: "11"
            },
            {
                name: "water",
                price: "1"
            },
            {
                name: "cheese",
                price: "9"
            }
        ],
        size: [
            {
                name: "starter",
                price: "8.99"
            },
            {
                name: "main",
                price: "10.99"
            },
            {
                name: "big",
                price: "12.05"
            }
        ],
        type: "vegan",
        cafeId: "2781108702"
    },
    {
        id: "9905618304",
        name: "Roasted Asparagus",
        description: "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all, and if you eat asparagus you know what I mean by that).",
        options: [
            {
                name: "asparagus",
                price: "2"
            },
            {
                name: "olive oil",
                price: "3"
            },
            {
                name: "kosher salt",
                price: "5"
            },
            {
                name: "cheese",
                price: "9"
            }
        ],
        size: [
            {
                name: "starter",
                price: "18.99"
            },
            {
                name: "main",
                price: "19.95"
            },
            {
                name: "big",
                price: "21.05"
            }
        ],
        type: "kosher",
        cafeId: "3326555765"
    },
    {
        id: "8204633570",
        name: "Curried Lentils and Rice",
        description: "Bring broth to a low boil. Add curry powder and salt. Cook lentils for 20 minutes. Add rice and simmer for 20 minutes.",
        options: [
            {
                name: "beef broth",
                price: "25"
            },
            {
                name: "olive oil",
                price: "3"
            },
            {
                name: "dried green lentils",
                price: "5"
            },
            {
                name: "basmati rice",
                price: "3.9"
            },
            {
                name: "curry powder",
                price: "3.9"
            }
        ],
        size: [
            {
                name: "starter",
                price: "13.9"
            },
            {
                name: "main",
                price: "15.95"
            }
        ],
        type: "halal",
        cafeId: "2781108702"
    },
    {
        id: "9421895319",
        name: "Big Night Pizza",
        description: "Add hot water to yeast in a large bowl and let sit for 15 minutes. Mix in oil, sugar, salt, and flour and let sit for 1 hour. Knead the dough and spread onto a pan. Spread pizza sauce and sprinkle cheese. Add any optional toppings as you wish.Bake at 400 deg Fahrenheit for 15 minutes.",
        options: [
            {
                name: "yeast",
                price: "5"
            },
            {
                name: "flour",
                price: "3"
            },
            {
                name: "vegetable oil",
                price: "5"
            },
            {
                name: "sugar",
                price: "0.9"
            },
            {
                name: "salt",
                price: "0.7"
            },
            {
                name: "hot water",
                price: "1.7"
            },
            {
                name: "pizza sauce",
                price: "2.7"
            },
            {
                name: "mozzarella cheese",
                price: "7.7"
            }
        ],
        size: [
            {
                name: "starter",
                price: "17.9"
            },
            {
                name: "main",
                price: "15.95"
            },
            {
                name: "big company",
                price: "25.5"
            }
        ],
        type: "halal",
        cafeId: "3326555765"
    },
    {
        id: "6051796780",
        name: "Cranberry and Apple Stuffed Acorn Squash Recipe",
        description: "Cut squash in half, remove seeds. Place squash in baking dish, cut-side down. Pour 1/4-inch water into dish. Bake for 30 minutes at 350 degrees F. In large bowl, combine remaining ingredients. Remove squash from oven, fill with mix. Bake for 30-40 more minutes, until squash tender.",
        options: [
            {
                name: "acorn squash",
                price: "5.4"
            },
            {
                name: "boiling water",
                price: "3"
            },
            {
                name: "apples",
                price: "5"
            },
            {
                name: "dried cranberries",
                price: "10.9"
            },
            {
                name: "cinnamon",
                price: "10.7"
            },
            {
                name: "melted butter",
                price: "7.7"
            },
            {
                name: "pizza sauce",
                price: "2.7"
            }
        ],
        size: [
            {
                name: "starter",
                price: "18.9"
            },
            {
                name: "main",
                price: "11.95"
            },
            {
                name: "big",
                price: "20.5"
            }
        ],
        type: "vegan",
        cafeId: "1994118045"
    },
    {
        id: "7559144871",
        name: "Mic's Yorkshire Puds",
        description: "Cut squash in half, remove seeds. Place squash in baking dish, cut-side down. Pour 1/4-inch water into dish. Bake for 30 minutes at 350 degrees F. In large bowl, combine remaining ingredients. Remove squash from oven, fill with mix. Bake for 30-40 more minutes, until squash tender.",
        options: [
            {
                name: "plain flour",
                price: "3.4"
            },
            {
                name: "boiling water",
                price: "3"
            },
            {
                name: "eggs",
                price: "6.2"
            },
            {
                name: "milk",
                price: "7.9"
            },
            {
                name: "vegetable oil",
                price: "10.7"
            },
            {
                name: "melted butter",
                price: "8.7"
            }
        ],
        size: [
            {
                name: "starter",
                price: "8.9"
            },
            {
                name: "main",
                price: "12.95"
            },
            {
                name: "big",
                price: "15.5"
            }
        ],
        type: "vegan",
        cafeId: "1994118045"
    },
    {
        id: "2586904400",
        name: "Old-Fashioned Oatmeal Cookies",
        description: "Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.Drain raisins, reserving the liquid. Add enough water to reserved liquid to measure 1/2 cup. Heat oven to 400. Mix thoroughly shortening, sugar, eggs and vanilla. Stir in reserved liquid. Blend in remaining ingredients. Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet. Bake 8 to 10 minutes or until light brown. About 6 1/2 dozen cookies.",
        options: [
            {
                name: "raisins",
                price: "1.4"
            },
            {
                name: "boiling water",
                price: "3"
            },
            {
                name: "shortening",
                price: "2.2"
            },
            {
                name: "sugar",
                price: "4.9"
            },
            {
                name: "flour",
                price: "3.7"
            },
            {
                name: "soda",
                price: "0.7"
            },
            {
                name: "salt",
                price: "0.7"
            },
            {
                name: "cinnamon",
                price: "4.9"
            },
            {
                name: "baking powder",
                price: "1.7"
            },
            {
                name: "cloves",
                price: "3.7"
            },
            {
                name: "oats",
                price: "10.7"
            }
        ],
        size: [
            {
                name: "starter",
                price: "8.9"
            },
            {
                name: "main",
                price: "13.95"
            },
            {
                name: "big",
                price: "18.5"
            }
        ],
        type: "halal",
        cafeId: "6342796572"
    },
    {
        id: "4679902486",
        name: "Blueberry Oatmeal Squares",
        description: "Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes. Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute. Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour. In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs. Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling. Bake in centre of 350°F oven until light golden, about 45 minutes. Let cool on rack before cutting into squares.",
        options: [
            {
                name: "rolled oats",
                price: "3.4"
            },
            {
                name: "flour",
                price: "2.3"
            },
            {
                name: "orange",
                price: "3.2"
            },
            {
                name: "brown sugar",
                price: "4.9"
            },
            {
                name: "flour",
                price: "3.7"
            },
            {
                name: "cornstarch",
                price: "10.7"
            },
            {
                name: "salt",
                price: "0.7"
            },
            {
                name: "fresh blueberries",
                price: "4.9"
            },
            {
                name: "baking powder",
                price: "1.7"
            },
            {
                name: "orange juice",
                price: "3.7"
            }
        ],
        size: [
            {
                name: "starter",
                price: "18.9"
            },
            {
                name: "main",
                price: "21.5"
            },
            {
                name: "big",
                price: "23.75"
            }
        ],
        type: "halal",
        cafeId: "6342796572"
    }
];