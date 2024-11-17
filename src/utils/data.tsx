export const categories = [
  {
    name: "digital-services",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/558/558593.png"
      />
    ),
    tagline: "Transforming digital experiences.",
  },
  {
    name: "body-care",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/1024/1024499.png"
      />
    ),
    tagline: "Embrace natural beauty.",
  },
  {
    name: "take-aways",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/6806/6806058.png"
      />
    ),
    tagline: "Delightful food experiences.",
  },
  {
    name: "furniture-and-decor",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/2887/2887421.png"
      />
    ),
    tagline: "Elevate your living space.",
  },
  {
    name: "health-and-wellness",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/684/684262.png"
      />
    ),
    tagline: "Prioritize your well-being.",
  },
  {
    name: "household-items",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/5726/5726038.png"
      />
    ),
    tagline: "Essentials for your home.",
  },
  {
    name: "media",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png"
      />
    ),
    tagline: "Connecting through media.",
  },
  {
    name: "pet-care",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/1076/1076877.png"
      />
    ),
    tagline: "Caring for your beloved pets.",
  },
  {
    name: "office-equipment",
    icon: (
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/3633/3633483.png"
      />
    ),
    tagline: "Efficiency in every task.",
  },
  // Add more objects as needed
];

export const industries_strings = [
  "retail",
  "food-and-beverage",
  "hospitality-and-tourism",
  "automotive",
  "healthcare",
  "technology",
  "entertainment",
  "real-estate",
  "financial-services",
  "energy",
  "education",
  "agriculture",
  "transportation-and-logistics",
  "manufacturing",
  "construction",
  "telecommunications",
  "fashion-and-apparel",
  "environmental",
  // Add more industries as needed
];

export const revised_industries = [
  {
    industry: "retail",
    categories: [
      {
        name: "home-and-garden",
        subcategories: [
          {
            name: "kitchen-and-dining",
            items: ["cookware", "kitchen-storage", "tableware"],
          },
          {
            name: "home-and-decor",
            items: ["wall-art", "clocks", "decorative-pillows"],
          },
          {
            name: "storage-and-organization",
            items: [
              "storage-boxes-and-bins",
              "hangers-and-racks",
              "shelving-units",
            ],
          },
          {
            name: "household-cleaning",
            items: ["cleaning-tools", "trash-bags-and-bins"],
          },
        ],
      },
      {
        name: "apparel-and-accessories",
        subcategories: [
          {
            name: "men's-clothing",
            items: ["t-shirts", "jackets-and-coats", "pants"],
          },
          {
            name: "women's-clothing",
            items: ["dresses", "tops-and-blouses", "skirts"],
          },
          {
            name: "underwear-and-sleepwear",
            items: ["lingerie", "pajamas"],
          },
          {
            name: "socks-and-hosiery",
            items: ["socks", "tights-and-stockings"],
          },
          {
            name: "shoes",
            items: ["casual-shoes", "sandals"],
          },
          {
            name: "hats-and-caps",
            items: ["baseball-caps", "beanies"],
          },
          {
            name: "eyewear",
            items: ["sunglasses", "eyeglass-frames"],
          },
        ],
      },
    ],
  },
  // {
  //   industry: "food-and-beverage",
  //   categories: [
  //     {
  //       name: "food-and-beverage",
  //       subcategories: [
  //         {
  //           name: "snacks",
  //           items: ["chips", "sweets"],
  //         },
  //         {
  //           name: "beverages",
  //           items: ["coffee", "tea"],
  //         },
  //         {
  //           name: "cooking-ingredients",
  //           items: ["spices", "baking-ingredients"],
  //         },
  //         {
  //           name: "specialty-food",
  //           items: ["organic-food", "gluten-free-food"],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    industry: "hospitality-and-tourism",
    categories: [
      {
        name: "home-and-garden",
        subcategories: [
          {
            name: "outdoor-furniture",
            items: ["patio-furniture", "garden-seating"],
          },
        ],
      },
      {
        name: "beauty-and-health",
        subcategories: [
          {
            name: "personal-care",
            items: ["oral-care", "shaving-and-hair-removal"],
          },
        ],
      },
    ],
  },
  {
    industry: "automotive",
    categories: [
      {
        name: "automobiles-and-motorcycles",
        subcategories: [
          {
            name: "car-electronics",
            items: ["dash-cams", "car-gps"],
          },
          {
            name: "motorcycle-parts-and-accessories",
            items: ["helmets", "motorcycle-lights"],
          },
          {
            name: "car-repair-tools",
            items: ["diagnostic-tools", "tire-repair-kits"],
          },
          {
            name: "interior-accessories",
            items: ["seat-covers", "car-organizers"],
          },
          {
            name: "exterior-accessories",
            items: ["car-covers", "roof-racks"],
          },
        ],
      },
    ],
  },
  {
    industry: "healthcare",
    categories: [
      {
        name: "beauty-and-health",
        subcategories: [
          {
            name: "skin-care",
            items: ["moisturizers", "face-masks"],
          },
          {
            name: "hair-care",
            items: ["shampoo-and-conditioner", "hair-styling-tools"],
          },
          {
            name: "health-care-products",
            items: ["health-monitors", "massagers"],
          },
        ],
      },
    ],
  },
  {
    industry: "technology",
    categories: [
      {
        name: "consumer-electronics",
        subcategories: [
          {
            name: "mobile-phone-accessories",
            items: ["phone-cases", "chargers-and-cables"],
          },
          {
            name: "computer-peripherals",
            items: ["keyboards-and-mice", "external-storage"],
          },
          {
            name: "smart-electronics",
            items: ["smartwatches", "smart-home-devices"],
          },
          {
            name: "home-audio-and-video",
            items: ["speakers", "headphones"],
          },
          {
            name: "wearable-devices",
            items: ["fitness-trackers"],
          },
          {
            name: "camera-and-photo-accessories",
            items: ["camera-lenses", "tripods"],
          },
        ],
      },
      {
        name: "office-and-school-supplies",
        subcategories: [
          {
            name: "office-electronics",
            items: ["printers", "projectors"],
          },
        ],
      },
    ],
  },
  {
    industry: "entertainment",
    categories: [
      {
        name: "toys-and-hobbies",
        subcategories: [
          {
            name: "educational-toys",
            items: ["learning-and-education", "stem-toys"],
          },
          {
            name: "rc-toys",
            items: ["rc-cars", "drones"],
          },
          {
            name: "action-and-toy-figures",
            items: ["superhero-figures", "anime-figures"],
          },
          {
            name: "dolls-and-plush-toys",
            items: ["baby-dolls", "stuffed-animals"],
          },
          {
            name: "puzzles-and-board-games",
            items: ["jigsaw-puzzles", "strategy-games"],
          },
        ],
      },
    ],
  },
  {
    industry: "real-estate",
    categories: [
      {
        name: "furniture",
        subcategories: [
          {
            name: "living-room-furniture",
            items: ["sofas", "coffee-tables"],
          },
          {
            name: "bedroom-furniture",
            items: ["beds", "dressers"],
          },
          {
            name: "office-furniture",
            items: ["office-desks", "filing-cabinets"],
          },
          {
            name: "outdoor-furniture",
            items: ["garden-benches", "patio-sets"],
          },
        ],
      },
    ],
  },
  // {
  //   industry: "financial-services",
  //   categories: [
  //     {
  //       name: "office-and-school-supplies",
  //       subcategories: [
  //         {
  //           name: "office-furniture",
  //           items: ["desks", "office-chairs"],
  //         },
  //         {
  //           name: "notebooks-and-writing-pads",
  //           items: ["spiral-notebooks", "notepads"],
  //         },
  //         {
  //           name: "writing-instruments",
  //           items: ["pens", "pencils"],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    industry: "energy",
    categories: [
      {
        name: "lights-and-lighting", //ended here
        subcategories: [
          {
            name: "led-bulbs",
            items: ["energy-saving-bulbs", "smart-bulbs"],
          },
          {
            name: "outdoor-lighting",
            items: ["garden-lights", "street-lights"],
          },
          {
            name: "indoor-lighting",
            items: ["ceiling-lights", "wall-lamps"],
          },
          {
            name: "novelty-lighting",
            items: ["string-lights", "night-lights"],
          },
          {
            name: "stage-lighting",
            items: ["spotlights", "laser-lights"],
          },
        ],
      },
    ],
  },
  {
    industry: "education",
    categories: [
      {
        name: "office-and-school-supplies",
        subcategories: [
          {
            name: "school-bags",
            items: ["kids-backpacks", "school-totes"],
          },
        ],
      },
    ],
  },
  {
    industry: "agriculture",
    categories: [
      {
        name: "home-and-garden",
        subcategories: [
          {
            name: "garden-tools",
            items: ["watering-equipment", "garden-hand-tools"],
          },
        ],
      },
    ],
  },
  // {
  //   industry: "transportation-and-logistics",
  //   categories: [
  //     {
  //       name: "automobiles-and-motorcycles",
  //       subcategories: [
  //         {
  //           name: "car-repair-tools",
  //           items: [],
  //         },
  //         {
  //           name: "interior-accessories",
  //           items: [],
  //         },
  //         {
  //           name: "exterior-accessories",
  //           items: [],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    industry: "manufacturing",
    categories: [
      {
        name: "tools-and-hardware",
        subcategories: [
          {
            name: "hand-tools",
            items: ["screwdrivers", "wrenches"],
          },
          {
            name: "power-tools",
            items: ["drills", "saws"],
          },
          {
            name: "tool-sets",
            items: ["mechanic-tool-sets", "household-tool-kits"],
          },
          {
            name: "fasteners-and-hooks",
            items: ["screws", "nails"],
          },
        ],
      },
    ],
  },
  {
    industry: "construction",
    categories: [
      {
        name: "tools-and-hardware",
        subcategories: [
          {
            name: "hand-tools",
            items: [],
          },
          {
            name: "power-tools",
            items: [],
          },
        ],
      },
    ],
  },
  {
    industry: "telecommunications",
    categories: [
      {
        name: "consumer-electronics",
        subcategories: [
          {
            name: "mobile-phone-accessories",
            items: [],
          },
          {
            name: "smart-electronics",
            items: [],
          },
          {
            name: "wearable-devices",
            items: [],
          },
        ],
      },
    ],
  },
  {
    industry: "fashion-and-apparel",
    categories: [
      {
        name: "apparel-and-accessories",
        subcategories: [
          {
            name: "women's-clothing",
            items: [],
          },
          {
            name: "men's-clothing",
            items: [],
          },
          {
            name: "shoes",
            items: [],
          },
          {
            name: "hats-and-caps",
            items: [],
          },
          {
            name: "eyewear",
            items: [],
          },
        ],
      },
    ],
  },
  // {
  //   industry: "environmental",
  //   categories: [
  //     {
  //       name: "tools-and-hardware",
  //       subcategories: [
  //         {
  //           name: "hand-tools",
  //           items: [],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export const table_heads = [
  {
    name: "products",
    heads: [
      "name",
      "description",
      "category",
      "industry",
      "status",
      "stock ",
      "price",
      "date",
    ],
  },
  {
    name: "orders",
    heads: [
      "product",
      "status",
      "units",
      "unitprice",
      "totalprice",
      "buyer",
      "date",
    ],
  },
  {
    name: "sales",
    heads: [
      "product",
      "status",
      "units",
      "method",
      "amount",
      "address",
      "buyer",
      "date",
      "deliverymethod",
    ],
  },
  {
    name: "customers",
    heads: [
      "name",
      // "products",
      "value",
      "location",
      "contact",
      "date",
    ],
  },
  {
    name: "purchases",
    heads: ["name", "category", "SKU", "price", "creditor", "date"],
  },
  {
    name: "favorites",
    heads: ["name", "description", "status", "price", "date"],
  },
];
export const routes = [
  "all",
  "commerce",
  "education",
  "internet",
  "technology",
  "health",
  "financial",
  "digital",
  "legal",
  "professional",
  "entertainment",
];
export const popular_route_products = {
  "digital-services": [
    "online-courses",
    "ebooks",
    "design-assets",
    "photoshop-presets",
    "music",
    "software-and-plug-ins",
    "templates",
  ],
  "body-care": [
    "washes",
    "exfoliators",
    "moisturizers",
    "treatments",
    "bath",
    "hand-care",
    "coral-care",
  ],
  "take-aways": [
    "burgers",
    "french-fries",
    "hot-dogs",
    "pizza",
    "tacos",
    "burritos",
    "sandwiches",
    "salads",
  ],
  "furniture-and-decor": [
    "furniture",
    "sofa-beds",
    "curtains",
    "decor-lights",
    "plants",
    "cloth-steamer",
    "air-purifier",
    "wall-art",
    "rugs",
  ],
  "health-and-wellness": [
    "fitness-gears",
    "wearables",
    "sleep-aids",
    "health-monitors",
    "supplements",
    "injectables",
  ],
  "household-items": [
    "paper-towels",
    "kitchen-sponges",
    "detergents",
    "disinfectant",
    "sanitizers",
    "trash-bags",
    "faminine-products",
    "pet-supplies",
  ],
  media: [
    "podcasts",
    "research-papers",
    "press-releases",
    "packaging",
    "websites",
    "vlogs",
    "phones",
  ],
  "pet-care": [
    "treats",
    "cleaning-products",
    "anti-flea",
    "scratchers",
    "food",
    "clothing",
  ],
  "office-equipment": [
    "computers",
    "internet",
    "phones",
    "software",
    "printers",
    "shredders",
  ],
};
export const industries = [
  {
    name: "retail",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/1198/1198428.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/mother-with-daughter-grocery-store_1303-17237.jpg?t=st=1721425154~exp=1721428754~hmac=b124fc34ded2f5a10edcf16e801865945bcd9c54fb13482f8c18eca19c381671&w=740",
    tagline: "Transforming the shopping experience.",
  },
  {
    name: "food-and-beverage",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/3655/3655608.png"
        width="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/breakfast-set-table-top-view_140725-9324.jpg?t=st=1721425225~exp=1721428825~hmac=3ed05742921ecc3bb311504746ef3dea9dd33746be8cdd39200ad06e2c4e2ff1&w=740",
    tagline: "Delightful culinary adventures.",
  },
  {
    name: "hospitality-and-tourism",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/9716/9716366.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/african-american-guy-check-out-hotel_482257-78827.jpg?t=st=1721425297~exp=1721428897~hmac=ffaf27b8062ff75bf51e10ea70dae51f7d49cac381b857e4192c3335354025c5&w=740",
    tagline: "Creating memorable travel experiences.",
  },
  {
    name: "automotive",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/8761/8761994.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/auto-service-salon-doign-car-wrapping_23-2149593887.jpg?t=st=1721425331~exp=1721428931~hmac=07f4775feea485a9723ea10e885a3b36b41ca8047dfcd6987a80d2395b7a5752&w=740",
    tagline: "Innovating the way we drive.",
  },
  {
    name: "healthcare",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/684/684262.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1721425117~exp=1721428717~hmac=137a2e63f528e14bd9d99489f67a275d97d5af9584e04554648a59464f9e7409&w=740",
    tagline: "Caring for your well-being.",
  },
  {
    name: "technology",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/1829/1829892.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722646.jpg?t=st=1721425450~exp=1721429050~hmac=e8d881bced574ad4402f9bc507d8a19588f570702d2a2e54f7069ebac62fb926&w=740",
    tagline: "Shaping the future through innovation.",
  },
  {
    name: "entertainment",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/867/867818.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/medium-shot-cool-woman-posing_23-2149068957.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Bringing joy to your life.",
  },
  {
    name: "real-estate",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/4565/4565633.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661457.jpg?ga=GA1.1.1350161568.1719153480&semt=ais_user",
    tagline: "Building dreams into reality.",
  },
  {
    name: "financial-services",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/10342/10342872.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/finance-word-wooden-cubes-arrangement_23-2148793813.jpg?ga=GA1.1.1350161568.1719153480&semt=ais_user",
    tagline: "Empowering financial well-being.",
  },
  {
    name: "energy",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/3103/3103277.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/close-up-environment-project_23-2148894107.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Powering a sustainable future.",
  },
  {
    name: "education",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/686/686051.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/front-view-smiley-teenage-girl-with-headphones-online-school_23-2148827454.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Empowering through knowledge.",
  },
  {
    name: "agriculture",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/3980/3980036.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/leafy-vegetables-are-growing-indoor-farm-vertical-farm-vertical-farm_181624-42948.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Cultivating a better tomorrow.",
  },
  {
    name: "transportation",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/664/664468.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/full-shot-man-logistic-warehouses_23-2149214251.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Efficient movement, seamless delivery.",
  },
  {
    name: "manufacturing",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/2880/2880986.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/male-mechanic-working-his-workshop_23-2148970741.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Crafting quality products.",
  },
  {
    name: "construction",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/5062/5062998.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-473.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Building foundations for the future.",
  },
  {
    name: "telecommunications",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/2939/2939476.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/empty-helpdesk-office-with-telephony-equipment-reception-give-assistance-no-people-telemarketing-space-customer-service-client-support-remote-helpline-headphones_482257-46319.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Connecting the world, one call at a time.",
  },
  {
    name: "fashion-and-apparel",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/863/863684.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/young-woman-warm-sweater-sitting-chair_1303-17662.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Setting trends, redefining style.",
  },
  {
    name: "environmental",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/5683/5683296.png"
        width="24"
        height="24"
      />
    ),
    image:
      "https://img.freepik.com/free-photo/woman-with-hiking-pole-forest_329181-19413.jpg?ga=GA1.1.1350161568.1719153480&semt=sph",
    tagline: "Preserving nature for generations.",
  },
  // Add more industries as needed
];

export const topSellers = [
  "liquid-store",
  "buy-4-gud",
  "big-merge",
  "tory-louis",
  "bites",
];
export const industry_filters = [
  {
    industry: "retail",
    categories: [
      {
        name: "home-and-garden",
        filters: {
          fabric: ["cotton", "polyester", "wool"],
          size: ["small", "medium", "large", "extra-large"],
          color: ["red", "blue", "green", "yellow", "black", "white"],
          brand: ["KitchenAid", "Cuisinart", "IKEA", "Home Depot"],
          material: ["stainless-steel", "plastic", "wood", "ceramic"],
        },
        subcategories: [
          {
            name: "kitchen-and-dining",
            filters: {
              fabric: ["cotton", "polyester", "linen"],
              size: ["small", "medium", "large"],
              color: ["red", "blue", "green"],
              brand: ["KitchenAid", "Cuisinart", "Oster"],
              material: ["stainless-steel", "plastic", "ceramic"],
            },
            items: [
              {
                name: "cookware",
                filters: {
                  material: ["cast-iron", "non-stick", "stainless-steel"],
                  size: ["small", "medium", "large"],
                  color: ["black", "silver"],
                  brand: ["T-fal", "Lodge", "Calphalon"],
                },
              },
              {
                name: "kitchen-storage",
                filters: {
                  material: ["plastic", "glass", "metal"],
                  size: ["small", "medium", "large"],
                  color: ["clear", "white", "black"],
                  brand: ["OXO", "Rubbermaid", "Sterilite"],
                },
              },
              {
                name: "tableware",
                filters: {
                  material: ["ceramic", "glass", "plastic"],
                  size: ["small", "medium", "large"],
                  color: ["white", "blue", "red"],
                  brand: ["Corelle", "Lenox", "Gibson"],
                },
              },
            ],
          },
          {
            name: "home-decor",
            filters: {
              material: ["wood", "metal", "fabric"],
              size: ["small", "medium", "large"],
              color: ["red", "blue", "green", "neutral"],
              brand: ["Pottery Barn", "West Elm", "CB2"],
            },
            items: [
              {
                name: "wall-art",
                filters: {
                  style: ["modern", "traditional", "abstract"],
                  size: ["small", "medium", "large"],
                  color: ["red", "blue", "black", "white"],
                },
              },
              {
                name: "clocks",
                filters: {
                  type: ["wall", "table", "digital"],
                  color: ["black", "white", "brown"],
                  material: ["wood", "metal", "plastic"],
                },
              },
              {
                name: "decorative-pillows",
                filters: {
                  material: ["cotton", "velvet", "linen"],
                  size: ["small", "medium", "large"],
                  color: ["red", "blue", "green", "neutral"],
                  brand: ["Pottery Barn", "HomeGoods", "Crate & Barrel"],
                },
              },
            ],
          },
          {
            name: "storage-and-organization",
            filters: {
              material: ["plastic", "fabric", "metal"],
              size: ["small", "medium", "large"],
              color: ["clear", "white", "grey"],
              brand: ["IKEA", "The Container Store", "Sterilite"],
            },
            items: [
              {
                name: "storage-boxes-and-bins",
                filters: {
                  material: ["plastic", "fabric"],
                  size: ["small", "medium", "large"],
                  color: ["white", "blue", "grey"],
                },
              },
              {
                name: "hangers-and-racks",
                filters: {
                  material: ["plastic", "metal", "wood"],
                  size: ["small", "medium", "large"],
                  color: ["black", "white", "wood"],
                },
              },
              {
                name: "shelving-units",
                filters: {
                  material: ["wood", "metal", "plastic"],
                  size: ["small", "medium", "large"],
                  color: ["black", "white", "natural"],
                },
              },
            ],
          },
          {
            name: "household-cleaning",
            filters: {
              type: ["tools", "supplies"],
              material: ["plastic", "metal", "cloth"],
              size: ["small", "medium", "large"],
              brand: ["Clorox", "Mr. Clean", "Swiffer"],
            },
            items: [
              {
                name: "cleaning-tools",
                filters: {
                  type: ["brooms", "mops", "dustpans"],
                  material: ["plastic", "metal", "wood"],
                  brand: ["O-Cedar", "Libman"],
                },
              },
              {
                name: "trash-bags-and-bins",
                filters: {
                  type: ["trash-bags", "recycling-bins"],
                  material: ["plastic", "metal"],
                  size: ["small", "medium", "large"],
                  brand: ["Hefty", "Glad"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "apparel-and-accessories",
        filters: {
          size: ["XS", "S", "M", "L", "XL", "XXL"],
          color: ["red", "blue", "green", "black", "white"],
          brand: ["Nike", "Adidas", "Levi's", "Zara"],
          material: ["cotton", "polyester", "wool", "leather"],
        },
        subcategories: [
          {
            name: "men's-clothing",
            filters: {
              size: ["S", "M", "L", "XL", "XXL"],
              color: ["black", "blue", "grey", "green"],
              brand: ["Nike", "Adidas", "Levi's"],
              material: ["cotton", "polyester", "denim"],
            },
            items: [
              {
                name: "t-shirts",
                filters: {
                  size: ["S", "M", "L", "XL"],
                  color: ["black", "white", "grey", "blue"],
                  brand: ["Nike", "Adidas", "Levi's"],
                  material: ["cotton", "polyester"],
                },
              },
              {
                name: "jackets-and-coats",
                filters: {
                  size: ["S", "M", "L", "XL"],
                  color: ["black", "brown", "navy"],
                  brand: ["Nike", "Adidas", "Levi's"],
                  material: ["leather", "wool", "polyester"],
                },
              },
              {
                name: "pants",
                filters: {
                  size: ["30", "32", "34", "36"],
                  color: ["black", "blue", "grey"],
                  brand: ["Nike", "Adidas", "Levi's"],
                  material: ["denim", "cotton", "polyester"],
                },
              },
            ],
          },
          {
            name: "women's-clothing",
            filters: {
              size: ["XS", "S", "M", "L", "XL"],
              color: ["black", "red", "blue", "green"],
              brand: ["Nike", "Adidas", "Zara"],
              material: ["cotton", "polyester", "silk"],
            },
            items: [
              {
                name: "dresses",
                filters: {
                  size: ["XS", "S", "M", "L"],
                  color: ["black", "red", "blue", "green"],
                  brand: ["Zara", "H&M", "Mango"],
                  material: ["cotton", "silk", "polyester"],
                },
              },
              {
                name: "blouses",
                filters: {
                  size: ["XS", "S", "M", "L"],
                  color: ["white", "black", "blue", "red"],
                  brand: ["Zara", "H&M", "Mango"],
                  material: ["cotton", "silk", "polyester"],
                },
              },
              {
                name: "skirts",
                filters: {
                  size: ["XS", "S", "M", "L"],
                  color: ["black", "blue", "red"],
                  brand: ["Zara", "H&M", "Mango"],
                  material: ["cotton", "denim", "polyester"],
                },
              },
            ],
          },
          {
            name: "accessories",
            filters: {
              type: ["watches", "bags", "jewelry"],
              color: ["black", "brown", "gold", "silver"],
              brand: ["Rolex", "Gucci", "Michael Kors"],
              material: ["leather", "metal", "fabric"],
            },
            items: [
              {
                name: "watches",
                filters: {
                  type: ["analog", "digital"],
                  color: ["black", "silver", "gold"],
                  brand: ["Rolex", "Omega", "Casio"],
                  material: ["metal", "leather"],
                },
              },
              {
                name: "bags",
                filters: {
                  type: ["handbags", "backpacks", "tote"],
                  color: ["black", "brown", "red"],
                  brand: ["Gucci", "Prada", "Michael Kors"],
                  material: ["leather", "canvas"],
                },
              },
              {
                name: "jewelry",
                filters: {
                  type: ["rings", "necklaces", "bracelets"],
                  material: ["gold", "silver", "platinum"],
                  color: ["gold", "silver", "rose-gold"],
                  brand: ["Tiffany", "Cartier", "Pandora"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "beauty-and-health",
        filters: {
          type: ["skincare", "haircare", "makeup"],
          brand: ["L'Oreal", "Neutrogena", "Estee Lauder"],
        },
        subcategories: [
          {
            name: "skincare",
            filters: {
              type: ["cleansers", "moisturizers", "serums"],
              brand: ["Neutrogena", "Olay", "Clinique"],
              skin_type: ["dry", "oily", "combination"],
            },
            items: [
              {
                name: "cleansers",
                filters: {
                  type: ["foam", "gel", "micellar-water"],
                  brand: ["Neutrogena", "CeraVe", "Cetaphil"],
                },
              },
              {
                name: "moisturizers",
                filters: {
                  type: ["cream", "lotion", "gel"],
                  brand: ["Olay", "Clinique", "Neutrogena"],
                },
              },
              {
                name: "serums",
                filters: {
                  type: ["vitamin-c", "hyaluronic-acid", "retinol"],
                  brand: ["The Ordinary", "Skinceuticals", "Drunk Elephant"],
                },
              },
            ],
          },
          {
            name: "haircare",
            filters: {
              type: ["shampoos", "conditioners", "hair-styling"],
              brand: ["Pantene", "Dove", "Garnier"],
              hair_type: ["straight", "wavy", "curly"],
            },
            items: [
              {
                name: "shampoos",
                filters: {
                  type: ["volumizing", "moisturizing", "color-safe"],
                  brand: ["Pantene", "Garnier", "L'Oreal"],
                },
              },
              {
                name: "conditioners",
                filters: {
                  type: ["hydrating", "repairing", "color-safe"],
                  brand: ["Pantene", "Dove", "Garnier"],
                },
              },
              {
                name: "hair-styling",
                filters: {
                  type: ["gel", "mousse", "hair-spray"],
                  brand: ["Garnier", "L'Oreal", "Redken"],
                },
              },
            ],
          },
          {
            name: "makeup",
            filters: {
              type: ["foundation", "lipstick", "eyeshadow"],
              brand: ["Maybelline", "MAC", "Urban Decay"],
              color: ["nude", "red", "pink", "brown"],
            },
            items: [
              {
                name: "foundations",
                filters: {
                  type: ["liquid", "powder", "cream"],
                  brand: ["Maybelline", "L'Oreal", "Fenty Beauty"],
                  color: ["light", "medium", "dark"],
                },
              },
              {
                name: "lipsticks",
                filters: {
                  type: ["matte", "gloss", "satin"],
                  brand: ["MAC", "Maybelline", "NARS"],
                  color: ["red", "pink", "nude"],
                },
              },
              {
                name: "eyeshadows",
                filters: {
                  type: ["powder", "cream", "pencil"],
                  brand: ["Urban Decay", "Maybelline", "Too Faced"],
                  color: ["neutral", "smokey", "vibrant"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "jewelry-and-watches",
        filters: {
          type: ["watches", "necklaces", "rings"],
          color: ["gold", "silver", "rose-gold"],
          brand: ["Tiffany", "Rolex", "Pandora"],
          material: ["gold", "silver", "platinum"],
        },
        subcategories: [
          {
            name: "watches",
            filters: {
              type: ["analog", "digital"],
              color: ["black", "silver", "gold"],
              brand: ["Rolex", "Omega", "Casio"],
              material: ["metal", "leather"],
            },
            items: [
              {
                name: "luxury-watches",
                filters: {
                  brand: ["Rolex", "Omega", "Tag Heuer"],
                  material: ["gold", "platinum"],
                },
              },
              {
                name: "sports-watches",
                filters: {
                  brand: ["Garmin", "Fitbit", "Suunto"],
                  material: ["silicone", "metal"],
                },
              },
              {
                name: "casual-watches",
                filters: {
                  brand: ["Casio", "Timex", "Seiko"],
                  material: ["leather", "metal"],
                },
              },
            ],
          },
          {
            name: "necklaces",
            filters: {
              type: ["chains", "pendants"],
              color: ["gold", "silver", "rose-gold"],
              brand: ["Tiffany", "Pandora", "Swarovski"],
              material: ["gold", "silver", "platinum"],
            },
            items: [
              {
                name: "pendants",
                filters: {
                  type: ["gemstone", "simple", "engraved"],
                  material: ["gold", "silver"],
                },
              },
              {
                name: "chains",
                filters: {
                  type: ["link", "box", "snake"],
                  material: ["gold", "silver"],
                },
              },
            ],
          },
          {
            name: "rings",
            filters: {
              type: ["engagement", "wedding", "fashion"],
              color: ["gold", "silver", "rose-gold"],
              brand: ["Tiffany", "Cartier", "Pandora"],
              material: ["gold", "silver", "platinum"],
            },
            items: [
              {
                name: "engagement-rings",
                filters: {
                  material: ["platinum", "gold"],
                  gemstone: ["diamond", "sapphire"],
                },
              },
              {
                name: "wedding-rings",
                filters: {
                  material: ["gold", "platinum"],
                  style: ["classic", "modern"],
                },
              },
              {
                name: "fashion-rings",
                filters: {
                  material: ["silver", "gold"],
                  style: ["simple", "decorative"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "hospitality-and-tourism",
    categories: [
      {
        name: "home-and-garden",
        filters: {
          fabric: ["cotton", "polyester", "wool"],
          size: ["small", "medium", "large"],
          color: ["red", "blue", "green", "yellow"],
          brand: ["BrandA", "BrandB", "BrandC"],
          material: ["wood", "metal", "plastic"],
        },
        subcategories: [
          {
            name: "outdoor-furniture",
            filters: {
              fabric: ["canvas", "nylon"],
              size: ["small", "medium", "large"],
              color: ["brown", "gray", "beige"],
              brand: ["OutdoorBrand1", "OutdoorBrand2"],
              material: ["teak", "aluminum", "rattan"],
            },
            items: [
              {
                name: "patio-furniture",
                filters: {
                  fabric: ["waterproof", "UV-resistant"],
                  size: ["small", "medium", "large"],
                  color: ["blue", "gray", "beige"],
                  brand: ["PatioBrand1", "PatioBrand2"],
                  material: ["wicker", "metal"],
                },
              },
              {
                name: "garden-seating",
                filters: {
                  fabric: ["durable", "weather-resistant"],
                  size: ["small", "medium", "large"],
                  color: ["green", "brown", "black"],
                  brand: ["GardenBrand1", "GardenBrand2"],
                  material: ["wood", "plastic"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "beauty-and-health",
        filters: {
          fabric: ["none"],
          size: ["small", "medium", "large"],
          color: ["various"],
          brand: ["BrandX", "BrandY"],
          material: ["plastic", "glass", "metal"],
        },
        subcategories: [
          {
            name: "personal-care",
            filters: {
              fabric: ["none"],
              size: ["small", "medium", "large"],
              color: ["various"],
              brand: ["CareBrand1", "CareBrand2"],
              material: ["plastic", "metal"],
            },
            items: [
              {
                name: "oral-care",
                filters: {
                  fabric: ["none"],
                  size: ["small", "medium"],
                  color: ["white", "blue"],
                  brand: ["OralBrand1", "OralBrand2"],
                  material: ["plastic", "silicone"],
                },
              },
              {
                name: "shaving-and-hair-removal",
                filters: {
                  fabric: ["none"],
                  size: ["small", "medium"],
                  color: ["black", "white"],
                  brand: ["ShavingBrand1", "ShavingBrand2"],
                  material: ["metal", "plastic"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "automotive",
    categories: [
      {
        name: "automobiles-and-motorcycles",
        filters: {
          brand: ["Bosch", "Denso", "Michelin", "Hella", "Pioneer"],

          material: ["metal", "plastic", "rubber", "leather"],
          size: ["small", "medium", "large"],
          color: ["black", "white", "red", "blue", "silver"],
          compatibility: ["universal", "vehicle-specific"],
          condition: ["new", "used"],
          features: ["waterproof", "shockproof", "UV-resistant"],
        },
        subcategories: [
          {
            name: "car-electronics",
            filters: {
              brand: ["Pioneer", "Kenwood", "Sony"],

              material: ["plastic", "metal"],
              size: ["compact", "standard", "large"],
              color: ["black", "silver", "gray"],
              compatibility: ["universal", "vehicle-specific"],
              condition: ["new", "refurbished"],
              features: ["HD", "GPS-enabled", "Bluetooth"],
            },
            items: [
              {
                name: "dash-cams",
                filters: {
                  brand: ["Garmin", "BlackVue", "Nextbase"],

                  resolution: ["Full HD", "4K"],
                  color: ["black", "silver"],
                  features: ["wide-angle", "night-vision", "GPS"],
                  compatibility: ["universal"],
                },
              },
              {
                name: "car-gps",
                filters: {
                  brand: ["Garmin", "TomTom", "Magellan"],

                  screen_size: ["4.3 inch", "5 inch", "7 inch"],
                  color: ["black", "gray"],
                  features: [
                    "live traffic updates",
                    "voice commands",
                    "lane guidance",
                  ],
                  compatibility: ["universal"],
                },
              },
            ],
          },
          {
            name: "motorcycle-parts-and-accessories",
            filters: {
              brand: ["Fox Racing", "Alpinestars", "Sena"],

              material: ["metal", "plastic", "leather"],
              size: ["small", "medium", "large"],
              color: ["black", "red", "blue"],
              compatibility: ["universal", "model-specific"],
              condition: ["new", "used"],
              features: ["waterproof", "adjustable", "ventilated"],
            },
            items: [
              {
                name: "helmets",
                filters: {
                  brand: ["Shoei", "Arai", "Bell"],

                  size: ["S", "M", "L", "XL"],
                  color: ["black", "white", "red"],
                  features: ["full-face", "modular", "ventilated"],
                  compatibility: ["universal"],
                },
              },
              {
                name: "motorcycle-lights",
                filters: {
                  brand: ["Baja Designs", "Denali", "Auxbeam"],

                  light_type: ["LED", "halogen"],
                  color: ["white", "yellow"],
                  features: ["waterproof", "adjustable", "high-intensity"],
                  compatibility: ["universal"],
                },
              },
            ],
          },
          {
            name: "car-repair-tools",
            filters: {
              brand: ["Craftsman", "DeWalt", "Snap-on"],

              material: ["metal", "plastic"],
              size: ["small", "medium", "large"],
              color: ["red", "black", "blue"],
              compatibility: ["universal"],
              condition: ["new", "used"],
              features: ["portable", "adjustable", "multi-function"],
            },
            items: [
              {
                name: "diagnostic-tools",
                filters: {
                  brand: ["Autel", "Innova", "Launch"],

                  features: ["OBD-II", "Bluetooth", "live data"],
                  compatibility: ["universal"],
                },
              },
              {
                name: "tire-repair-kits",
                filters: {
                  brand: ["Slime", "VIAIR", "Dynaplug"],

                  features: ["compact", "multi-tool", "sealant included"],
                  compatibility: ["universal"],
                },
              },
            ],
          },
          {
            name: "interior-accessories",
            filters: {
              brand: ["WeatherTech", "Covercraft", "Fia"],

              material: ["fabric", "plastic", "leather"],
              color: ["black", "gray", "beige"],
              features: ["custom-fit", "water-resistant", "easy-to-clean"],
              compatibility: ["universal", "vehicle-specific"],
            },
            items: [
              {
                name: "seat-covers",
                filters: {
                  brand: ["Coverking", "FH Group", "Carhartt"],

                  material: ["fabric", "leather", "neoprene"],
                  color: ["black", "gray", "tan"],
                  features: ["custom-fit", "water-resistant", "breathable"],
                  compatibility: ["universal", "vehicle-specific"],
                },
              },
              {
                name: "car-organizers",
                filters: {
                  brand: ["Trunkcratepro", "High Road", "OxGord"],

                  material: ["fabric", "plastic"],
                  color: ["black", "gray", "beige"],
                  features: ["collapsible", "multiple compartments", "durable"],
                  compatibility: ["universal"],
                },
              },
            ],
          },
          {
            name: "exterior-accessories",
            filters: {
              brand: ["WeatherTech", "Husky Liners", "Thule"],

              material: ["plastic", "metal", "fabric"],
              color: ["black", "gray", "silver"],
              features: ["waterproof", "UV-resistant", "adjustable"],
              compatibility: ["universal", "vehicle-specific"],
            },
            items: [
              {
                name: "car-covers",
                filters: {
                  brand: ["Covercraft", "OxGord", "Classic Accessories"],

                  material: ["polyester", "nylon"],
                  color: ["gray", "black", "beige"],
                  features: ["waterproof", "breathable", "custom-fit"],
                  compatibility: ["universal", "vehicle-specific"],
                },
              },
              {
                name: "roof-racks",
                filters: {
                  brand: ["Thule", "Yakima", "Rhino-Rack"],

                  material: ["aluminum", "steel"],
                  color: ["black", "silver"],
                  features: ["adjustable", "lockable", "easy-install"],
                  compatibility: ["universal", "vehicle-specific"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "healthcare",
    categories: [
      {
        name: "beauty-and-health",
        filters: {
          brand: ["Neutrogena", "L'Oréal", "Nivea", "Garnier", "Olay"],

          skin_type: ["normal", "oily", "dry", "combination", "sensitive"],
          hair_type: ["straight", "curly", "wavy", "coily"],
          ingredient: [
            "hyaluronic acid",
            "vitamin C",
            "aloe vera",
            "argan oil",
          ],
          gender: ["men", "women", "unisex"],
          size: ["small", "medium", "large"],
          color: ["white", "blue", "pink", "green"],
        },
        subcategories: [
          {
            name: "skin-care",
            filters: {
              brand: ["La Roche-Posay", "CeraVe", "The Ordinary"],

              skin_type: ["normal", "oily", "dry", "combination", "sensitive"],
              ingredient: [
                "retinol",
                "niacinamide",
                "vitamin E",
                "tea tree oil",
              ],
              form: ["cream", "gel", "serum", "lotion"],
              gender: ["men", "women", "unisex"],
              size: ["50ml", "100ml", "200ml"],
              fragrance: ["fragrance-free", "lightly scented"],
              SPF: ["SPF 15", "SPF 30", "SPF 50"],
            },
            items: [
              {
                name: "moisturizers",
                filters: {
                  brand: ["Clinique", "Aveeno", "Eucerin"],

                  skin_type: ["normal", "dry", "oily", "combination"],
                  ingredient: ["shea butter", "ceramides", "glycerin"],
                  form: ["cream", "gel", "lotion"],
                  size: ["50ml", "100ml", "200ml"],
                  SPF: ["SPF 15", "SPF 30", "SPF 50"],
                },
              },
              {
                name: "face-masks",
                filters: {
                  brand: ["Glamglow", "Origins", "Fresh"],

                  skin_type: ["normal", "oily", "dry", "combination"],
                  ingredient: ["charcoal", "clay", "vitamin C"],
                  form: ["sheet mask", "clay mask", "peel-off mask"],
                  size: ["single-use", "multi-use"],
                },
              },
            ],
          },
          {
            name: "hair-care",
            filters: {
              brand: ["Pantene", "Tresemmé", "Herbal Essences"],

              hair_type: ["straight", "curly", "wavy", "coily"],
              ingredient: ["keratin", "coconut oil", "biotin", "argan oil"],
              form: ["shampoo", "conditioner", "serum"],
              gender: ["men", "women", "unisex"],
              size: ["250ml", "500ml", "1L"],
              fragrance: ["floral", "fruity", "fragrance-free"],
            },
            items: [
              {
                name: "shampoo-and-conditioner",
                filters: {
                  brand: ["Head & Shoulders", "Garnier", "Dove"],

                  hair_type: ["dry", "oily", "color-treated", "dandruff"],
                  ingredient: ["sulfate-free", "paraben-free", "natural oils"],
                  size: ["250ml", "500ml", "1L"],
                  fragrance: ["floral", "fruity", "unscented"],
                },
              },
              {
                name: "hair-styling-tools",
                filters: {
                  brand: ["Dyson", "Revlon", "Conair"],

                  tool_type: ["hair dryer", "straightener", "curling iron"],
                  heat_settings: ["low", "medium", "high"],
                  material: ["ceramic", "titanium", "tourmaline"],
                  size: ["compact", "standard"],
                },
              },
            ],
          },
          {
            name: "health-care-products",
            filters: {
              brand: ["Omron", "Beurer", "Fitbit"],

              purpose: [
                "fitness tracking",
                "blood pressure monitoring",
                "pain relief",
              ],
              feature: ["wireless", "Bluetooth", "rechargeable battery"],
              size: ["portable", "handheld", "wearable"],
              color: ["white", "black", "gray"],
              warranty: ["1 year", "2 years", "3 years"],
            },
            items: [
              {
                name: "health-monitors",
                filters: {
                  brand: ["Omron", "Withings", "iHealth"],

                  type: [
                    "blood pressure monitor",
                    "heart rate monitor",
                    "glucose monitor",
                  ],
                  feature: [
                    "Bluetooth",
                    "app-compatible",
                    "automatic inflation",
                  ],
                  size: ["portable", "wrist", "upper-arm"],
                  power_source: ["battery", "USB-rechargeable"],
                },
              },
              {
                name: "massagers",
                filters: {
                  brand: ["Theragun", "HoMedics", "Naipo"],

                  type: ["handheld", "chair", "foot"],
                  feature: [
                    "adjustable intensity",
                    "heat function",
                    "cordless",
                  ],
                  material: ["plastic", "metal", "fabric"],
                  size: ["compact", "standard"],
                  power_source: ["battery", "corded", "USB-rechargeable"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "technology",
    categories: [
      {
        name: "consumer-electronics",
        filters: {
          brand: ["Apple", "Samsung", "Sony", "Anker", "Logitech"],

          connectivity: ["Bluetooth", "Wi-Fi", "USB", "NFC"],
          warranty: ["1 year", "2 years", "3 years"],
          color: ["black", "white", "gray", "blue", "red"],
        },
        subcategories: [
          {
            name: "mobile-phone-accessories",
            filters: {
              brand: ["Spigen", "Belkin", "OtterBox", "Anker"],

              compatibility: ["iPhone", "Samsung Galaxy", "Google Pixel"],
              material: ["silicone", "leather", "plastic", "metal"],
              color: ["black", "white", "blue", "pink"],
            },
            items: [
              {
                name: "phone-cases",
                filters: {
                  brand: ["Spigen", "OtterBox", "Caseology"],

                  compatibility: ["iPhone", "Samsung Galaxy", "Google Pixel"],
                  material: ["silicone", "leather", "plastic", "metal"],
                  protection_level: ["basic", "military-grade", "waterproof"],
                  color: ["black", "white", "blue", "pink"],
                },
              },
              {
                name: "chargers-and-cables",
                filters: {
                  brand: ["Anker", "Belkin", "Mophie"],

                  type: ["USB-C", "Lightning", "Micro-USB"],
                  length: ["1ft", "3ft", "6ft", "10ft"],
                  power_output: ["5W", "10W", "20W", "30W"],
                  color: ["black", "white", "blue", "red"],
                },
              },
            ],
          },
          {
            name: "computer-peripherals",
            filters: {
              brand: ["Logitech", "Razer", "Corsair", "Seagate"],

              connectivity: ["Bluetooth", "USB", "Wireless"],
              compatibility: ["Windows", "Mac", "Linux"],
              color: ["black", "white", "gray", "RGB"],
            },
            items: [
              {
                name: "keyboards-and-mice",
                filters: {
                  brand: ["Logitech", "Razer", "Corsair"],

                  type: ["mechanical", "membrane", "ergonomic"],
                  connectivity: ["Bluetooth", "USB", "Wireless"],
                  layout: ["QWERTY", "AZERTY", "DVORAK"],
                  color: ["black", "white", "RGB"],
                },
              },
              {
                name: "external-storage",
                filters: {
                  brand: ["Seagate", "Western Digital", "Samsung"],

                  type: ["HDD", "SSD"],
                  capacity: ["500GB", "1TB", "2TB", "4TB"],
                  connectivity: ["USB 3.0", "USB-C", "Thunderbolt"],
                  encryption: ["hardware encryption", "software encryption"],
                },
              },
            ],
          },
          {
            name: "smart-electronics",
            filters: {
              brand: ["Apple", "Samsung", "Google", "Fitbit"],

              connectivity: ["Wi-Fi", "Bluetooth", "NFC"],
              compatibility: ["iOS", "Android", "Alexa", "Google Assistant"],
              battery_life: ["up to 1 day", "up to 7 days", "up to 30 days"],
              warranty: ["1 year", "2 years"],
              color: ["black", "white", "gray", "pink"],
            },
            items: [
              {
                name: "smartwatches",
                filters: {
                  brand: ["Apple", "Samsung", "Fitbit"],

                  display_type: ["OLED", "AMOLED", "LCD"],
                  connectivity: ["Bluetooth", "Wi-Fi", "NFC"],
                  battery_life: ["up to 1 day", "up to 7 days"],
                  color: ["black", "white", "gray", "pink"],
                  fitness_features: [
                    "heart rate monitor",
                    "GPS",
                    "sleep tracking",
                  ],
                },
              },
              {
                name: "smart-home-devices",
                filters: {
                  brand: ["Google", "Amazon", "Apple"],

                  type: ["smart speakers", "smart thermostats", "smart lights"],
                  connectivity: ["Wi-Fi", "Bluetooth", "Zigbee"],
                  compatibility: ["Alexa", "Google Assistant", "HomeKit"],
                  color: ["black", "white", "gray"],
                  voice_control: ["built-in", "external"],
                },
              },
            ],
          },
          {
            name: "home-audio-and-video",
            filters: {
              brand: ["Sony", "Bose", "JBL", "Sennheiser"],

              connectivity: ["Bluetooth", "Wi-Fi", "Wired"],
              sound_quality: ["stereo", "surround", "high-resolution"],
              color: ["black", "white", "gray", "blue"],
              warranty: ["1 year", "2 years"],
            },
            items: [
              {
                name: "speakers",
                filters: {
                  brand: ["Sony", "Bose", "JBL"],

                  type: ["portable", "bookshelf", "soundbar"],
                  connectivity: ["Bluetooth", "Wi-Fi", "Wired"],
                  battery_life: ["up to 12 hours", "up to 24 hours"],
                  water_resistance: ["IPX4", "IPX7"],
                  color: ["black", "white", "blue"],
                },
              },
              {
                name: "headphones",
                filters: {
                  brand: ["Sony", "Bose", "Sennheiser"],

                  type: ["over-ear", "in-ear", "on-ear"],
                  connectivity: ["Bluetooth", "Wired"],
                  noise_cancellation: ["active", "passive"],
                  battery_life: ["up to 20 hours", "up to 40 hours"],
                  color: ["black", "white", "gray", "blue"],
                },
              },
            ],
          },
          {
            name: "wearable-devices",
            filters: {
              brand: ["Fitbit", "Garmin", "Xiaomi"],

              connectivity: ["Bluetooth", "Wi-Fi"],
              compatibility: ["iOS", "Android"],
              battery_life: ["up to 7 days", "up to 14 days"],
              fitness_features: [
                "heart rate monitor",
                "step tracker",
                "sleep monitor",
              ],
              color: ["black", "white", "blue", "pink"],
            },
            items: [
              {
                name: "fitness-trackers",
                filters: {
                  brand: ["Fitbit", "Garmin", "Xiaomi"],

                  display_type: ["OLED", "LCD"],
                  battery_life: ["up to 7 days", "up to 14 days"],
                  waterproof: ["up to 50m", "up to 100m"],
                  fitness_features: [
                    "heart rate monitor",
                    "GPS",
                    "sleep tracking",
                  ],
                  color: ["black", "white", "blue", "pink"],
                },
              },
            ],
          },
          {
            name: "camera-and-photo-accessories",
            filters: {
              brand: ["Canon", "Nikon", "Sony"],

              compatibility: ["Canon", "Nikon", "Sony"],
              type: ["lenses", "tripods", "memory cards"],
              material: ["plastic", "metal", "carbon fiber"],
              warranty: ["1 year", "2 years"],
              color: ["black", "silver"],
            },
            items: [
              {
                name: "camera-lenses",
                filters: {
                  brand: ["Canon", "Nikon", "Sony"],

                  focal_length: ["24mm", "50mm", "85mm", "200mm"],
                  aperture: ["f/1.4", "f/2.8", "f/4"],
                  lens_type: ["prime", "zoom", "macro"],
                  compatibility: ["Canon", "Nikon", "Sony"],
                  color: ["black", "silver"],
                },
              },
              {
                name: "tripods",
                filters: {
                  brand: ["Manfrotto", "Gitzo", "Joby"],

                  material: ["aluminum", "carbon fiber", "plastic"],
                  max_height: ["up to 4ft", "up to 6ft"],
                  weight_capacity: ["up to 5kg", "up to 10kg"],
                  portability: ["compact", "travel", "studio"],
                  color: ["black", "gray"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "office-and-school-supplies",
        filters: {
          brand: ["HP", "Epson", "BenQ"],

          warranty: ["1 year", "2 years"],
          color: ["black", "white", "gray"],
        },
        subcategories: [
          {
            name: "office-electronics",
            filters: {
              brand: ["HP", "Epson", "BenQ"],

              connectivity: ["Wi-Fi", "USB", "Ethernet"],
              resolution: ["1080p", "4K", "720p"],
              color: ["black", "white", "gray"],
            },
            items: [
              {
                name: "printers",
                filters: {
                  brand: ["HP", "Epson", "Canon"],

                  type: ["inkjet", "laser", "all-in-one"],
                  connectivity: ["Wi-Fi", "USB", "Ethernet"],
                  print_speed: ["up to 20 ppm", "up to 30 ppm", "up to 40 ppm"],
                  color: ["black", "white", "gray"],
                },
              },
              {
                name: "projectors",
                filters: {
                  brand: ["BenQ", "Epson", "Optoma"],

                  resolution: ["1080p", "4K", "720p"],
                  brightness: [
                    "up to 2000 lumens",
                    "up to 3000 lumens",
                    "up to 4000 lumens",
                  ],
                  connectivity: ["HDMI", "VGA", "USB"],
                  color: ["black", "white", "gray"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "entertainment",
    categories: [
      {
        name: "toys-and-hobbies",
        filters: {
          brand: ["Lego", "Hasbro", "Mattel", "Fisher-Price", "Bandai"],

          age_group: ["0-3 years", "4-7 years", "8-12 years", "13+ years"],
          material: ["plastic", "wood", "metal", "fabric"],
          educational_value: [
            "STEM",
            "creativity",
            "problem-solving",
            "motor skills",
          ],
          color: ["red", "blue", "yellow", "green", "pink"],
        },
        subcategories: [
          {
            name: "educational-toys",
            filters: {
              brand: ["LeapFrog", "Melissa & Doug", "VTech"],

              age_group: ["0-3 years", "4-7 years", "8-12 years"],
              educational_focus: ["math", "science", "language", "engineering"],
              material: ["plastic", "wood", "electronic"],
              battery_required: ["yes", "no"],
              color: ["red", "blue", "yellow", "green"],
            },
            items: [
              {
                name: "learning-and-education",
                filters: {
                  brand: ["LeapFrog", "VTech", "Fisher-Price"],

                  age_group: ["0-3 years", "4-7 years", "8-12 years"],
                  educational_focus: [
                    "alphabet",
                    "numbers",
                    "shapes",
                    "colors",
                  ],
                  material: ["plastic", "wood"],
                  battery_required: ["yes", "no"],
                  color: ["red", "blue", "yellow", "green"],
                },
              },
              {
                name: "stem-toys",
                filters: {
                  brand: ["Lego", "ThinkFun", "Learning Resources"],

                  age_group: ["4-7 years", "8-12 years", "13+ years"],
                  focus_area: ["engineering", "science", "math"],
                  material: ["plastic", "wood", "metal"],
                  color: ["red", "blue", "yellow", "green"],
                },
              },
            ],
          },
          {
            name: "rc-toys",
            filters: {
              brand: ["Traxxas", "DJI", "Syma"],

              age_group: ["8-12 years", "13+ years"],
              material: ["plastic", "metal"],
              battery_life: ["up to 30 minutes", "up to 60 minutes"],
              control_type: ["remote control", "app control"],
              color: ["red", "blue", "black", "green"],
            },
            items: [
              {
                name: "rc-cars",
                filters: {
                  brand: ["Traxxas", "HPI Racing", "Redcat Racing"],

                  scale: ["1:10", "1:12", "1:16"],
                  speed: ["up to 30 mph", "up to 50 mph"],
                  terrain: ["off-road", "on-road", "all-terrain"],
                  battery_life: ["up to 30 minutes", "up to 60 minutes"],
                  color: ["red", "blue", "black", "green"],
                },
              },
              {
                name: "drones",
                filters: {
                  brand: ["DJI", "Syma", "Holy Stone"],

                  camera_quality: ["720p", "1080p", "4K"],
                  flight_time: ["up to 15 minutes", "up to 30 minutes"],
                  control_type: ["remote control", "app control"],
                  range: ["up to 500m", "up to 1000m"],
                  color: ["red", "blue", "black", "white"],
                },
              },
            ],
          },
          {
            name: "action-and-toy-figures",
            filters: {
              brand: ["Hasbro", "Bandai", "Funko"],

              material: ["plastic", "vinyl"],
              age_group: ["4-7 years", "8-12 years", "13+ years"],
              theme: ["superheroes", "anime", "movies", "TV shows"],
              articulation_points: ["5", "10", "15+"],
              color: ["various"],
            },
            items: [
              {
                name: "superhero-figures",
                filters: {
                  brand: ["Hasbro", "Mattel", "DC Collectibles"],

                  characters: ["Spider-Man", "Batman", "Superman", "Iron Man"],
                  material: ["plastic", "vinyl"],
                  articulation_points: ["5", "10", "15+"],
                  color: ["various"],
                },
              },
              {
                name: "anime-figures",
                filters: {
                  brand: ["Bandai", "Good Smile Company", "Kotobukiya"],

                  characters: ["Naruto", "Goku", "Sailor Moon"],
                  material: ["plastic", "vinyl"],
                  articulation_points: ["5", "10", "15+"],
                  color: ["various"],
                },
              },
            ],
          },
          {
            name: "dolls-and-plush-toys",
            filters: {
              brand: ["Mattel", "Ty", "Gund"],

              age_group: ["0-3 years", "4-7 years", "8-12 years"],
              material: ["fabric", "plastic", "plush"],
              interactive_features: ["sound", "movement", "lights"],
              color: ["pink", "blue", "brown", "white"],
            },
            items: [
              {
                name: "baby-dolls",
                filters: {
                  brand: ["Mattel", "Baby Alive", "Corolle"],

                  age_group: ["0-3 years", "4-7 years"],
                  material: ["plastic", "fabric"],
                  interactive_features: ["sound", "movement"],
                  color: ["pink", "blue", "brown"],
                },
              },
              {
                name: "stuffed-animals",
                filters: {
                  brand: ["Ty", "Gund", "Build-A-Bear"],

                  age_group: ["0-3 years", "4-7 years", "8-12 years"],
                  material: ["plush", "fabric"],
                  size: ["small", "medium", "large"],
                  color: ["brown", "white", "gray", "pink"],
                },
              },
            ],
          },
          {
            name: "puzzles-and-board-games",
            filters: {
              brand: ["Ravensburger", "Hasbro", "Mattel"],

              age_group: ["4-7 years", "8-12 years", "13+ years"],
              material: ["cardboard", "wood", "plastic"],
              number_of_pieces: ["up to 100", "100-500", "500+"],
              theme: ["animals", "landscapes", "fantasy", "educational"],
            },
            items: [
              {
                name: "jigsaw-puzzles",
                filters: {
                  brand: ["Ravensburger", "Buffalo Games", "Clementoni"],

                  number_of_pieces: ["up to 100", "100-500", "500+"],
                  material: ["cardboard", "wood"],
                  theme: ["animals", "landscapes", "fantasy"],
                  age_group: ["4-7 years", "8-12 years", "13+ years"],
                },
              },
              {
                name: "strategy-games",
                filters: {
                  brand: ["Hasbro", "Mattel", "Catan Studio"],

                  number_of_players: ["2-4", "4-6", "6+"],
                  play_time: [
                    "up to 30 minutes",
                    "30-60 minutes",
                    "60+ minutes",
                  ],
                  theme: ["fantasy", "war", "economy"],
                  age_group: ["8-12 years", "13+ years"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "real-estate",
    categories: [
      {
        name: "furniture",
        filters: {
          brand: ["IKEA", "Ashley Furniture", "Wayfair", "West Elm"],

          material: ["wood", "metal", "glass", "upholstery"],
          color: ["black", "white", "brown", "gray", "blue"],
          style: ["modern", "traditional", "rustic", "contemporary"],
          assembly_required: ["yes", "no"],
        },
        subcategories: [
          {
            name: "living-room-furniture",
            filters: {
              brand: ["IKEA", "Ashley Furniture", "La-Z-Boy"],

              material: ["leather", "fabric", "wood", "metal", "glass"],
              color: ["black", "brown", "gray", "beige"],
              seating_capacity: ["2-seater", "3-seater", "sectional"],
              style: ["modern", "traditional", "contemporary", "mid-century"],
              assembly_required: ["yes", "no"],
            },
            items: [
              {
                name: "sofas",
                filters: {
                  brand: ["IKEA", "Ashley Furniture", "La-Z-Boy"],

                  material: ["leather", "fabric", "velvet"],
                  seating_capacity: ["2-seater", "3-seater", "sectional"],
                  style: ["modern", "traditional", "mid-century"],
                  color: ["black", "gray", "beige", "blue"],
                  assembly_required: ["yes", "no"],
                },
              },
              {
                name: "coffee-tables",
                filters: {
                  brand: ["IKEA", "Wayfair", "West Elm"],

                  material: ["wood", "glass", "metal"],
                  shape: ["rectangular", "round", "square"],
                  style: ["modern", "rustic", "industrial"],
                  color: ["brown", "black", "white", "gray"],
                  assembly_required: ["yes", "no"],
                },
              },
            ],
          },
          {
            name: "bedroom-furniture",
            filters: {
              brand: ["IKEA", "Ashley Furniture", "Pottery Barn"],

              material: ["wood", "upholstered", "metal"],
              color: ["white", "brown", "black", "gray"],
              style: ["modern", "traditional", "rustic", "contemporary"],
              bed_size: ["twin", "full", "queen", "king"],
              assembly_required: ["yes", "no"],
            },
            items: [
              {
                name: "beds",
                filters: {
                  brand: ["IKEA", "Ashley Furniture", "Pottery Barn"],

                  material: ["wood", "upholstered", "metal"],
                  bed_size: ["twin", "full", "queen", "king"],
                  style: ["modern", "traditional", "rustic"],
                  color: ["white", "brown", "black", "gray"],
                  storage_included: ["yes", "no"],
                  assembly_required: ["yes", "no"],
                },
              },
              {
                name: "dressers",
                filters: {
                  brand: ["IKEA", "Wayfair", "West Elm"],

                  material: ["wood", "metal", "glass"],
                  number_of_drawers: ["3", "4", "5", "6+"],
                  style: ["modern", "traditional", "rustic"],
                  color: ["white", "brown", "black", "gray"],
                  assembly_required: ["yes", "no"],
                },
              },
            ],
          },
          {
            name: "office-furniture",
            filters: {
              brand: ["IKEA", "Staples", "Office Depot"],

              material: ["wood", "metal", "glass"],
              color: ["black", "white", "brown", "gray"],
              style: ["modern", "contemporary", "industrial"],
              ergonomic_design: ["yes", "no"],
              assembly_required: ["yes", "no"],
            },
            items: [
              {
                name: "office-desks",
                filters: {
                  brand: ["IKEA", "Wayfair", "Office Depot"],

                  material: ["wood", "metal", "glass"],
                  desk_type: ["writing desk", "standing desk", "corner desk"],
                  style: ["modern", "industrial", "contemporary"],
                  color: ["black", "white", "brown", "gray"],
                  storage_included: ["yes", "no"],
                  assembly_required: ["yes", "no"],
                },
              },
              {
                name: "filing-cabinets",
                filters: {
                  brand: ["IKEA", "Staples", "Office Depot"],

                  material: ["metal", "wood"],
                  number_of_drawers: ["2", "3", "4+"],
                  lockable: ["yes", "no"],
                  style: ["modern", "traditional", "industrial"],
                  color: ["black", "white", "gray", "brown"],
                  assembly_required: ["yes", "no"],
                },
              },
            ],
          },
          {
            name: "outdoor-furniture",
            filters: {
              brand: ["IKEA", "Wayfair", "Home Depot"],

              material: ["wood", "metal", "rattan", "plastic"],
              weather_resistant: ["yes", "no"],
              color: ["brown", "black", "white", "gray"],
              style: ["modern", "rustic", "traditional"],
              assembly_required: ["yes", "no"],
            },
            items: [
              {
                name: "garden-benches",
                filters: {
                  brand: ["IKEA", "Wayfair", "Home Depot"],

                  material: ["wood", "metal", "plastic"],
                  seating_capacity: ["2-seater", "3-seater"],
                  weather_resistant: ["yes", "no"],
                  style: ["modern", "traditional", "rustic"],
                  color: ["brown", "black", "white", "gray"],
                  assembly_required: ["yes", "no"],
                },
              },
              {
                name: "patio-sets",
                filters: {
                  brand: ["IKEA", "Wayfair", "Home Depot"],

                  material: ["rattan", "metal", "wood", "plastic"],
                  seating_capacity: ["2-seater", "4-seater", "6-seater"],
                  weather_resistant: ["yes", "no"],
                  style: ["modern", "traditional", "rustic"],
                  color: ["brown", "black", "white", "gray"],
                  assembly_required: ["yes", "no"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "energy",
    categories: [
      {
        name: "lights-and-lighting",
        filters: {
          brand: ["Philips", "GE Lighting", "Cree", "Osram"],
          energy_rating: ["A++", "A+", "A", "B"],
          lifespan: ["10,000 hours", "20,000 hours", "30,000 hours"],
          wattage: ["5W", "10W", "15W", "20W+"],
          color_temperature: ["Warm White", "Cool White", "Daylight", "RGB"],

          smart_technology: ["yes", "no"],
          dimmable: ["yes", "no"],
        },
        subcategories: [
          {
            name: "led-bulbs",
            filters: {
              brand: ["Philips", "Cree", "GE Lighting", "Osram"],
              wattage: ["5W", "7W", "10W", "15W+"],
              lifespan: ["10,000 hours", "20,000 hours", "30,000 hours"],
              color_temperature: [
                "Warm White",
                "Cool White",
                "Daylight",
                "RGB",
              ],

              smart_technology: ["yes", "no"],
              dimmable: ["yes", "no"],
            },
            items: [
              {
                name: "energy-saving-bulbs",
                filters: {
                  brand: ["Philips", "Cree", "GE Lighting"],
                  energy_rating: ["A++", "A+", "A"],
                  wattage: ["7W", "10W", "15W+"],
                  lifespan: ["20,000 hours", "30,000 hours"],
                  color_temperature: ["Warm White", "Cool White", "Daylight"],

                  smart_technology: ["no"],
                  dimmable: ["yes", "no"],
                },
              },
              {
                name: "smart-bulbs",
                filters: {
                  brand: ["Philips Hue", "LIFX", "Sengled"],
                  wattage: ["7W", "10W", "15W+"],
                  lifespan: ["20,000 hours", "30,000 hours"],
                  color_temperature: ["Warm White", "Cool White", "RGB"],

                  smart_technology: ["yes"],
                  connectivity: ["Wi-Fi", "Bluetooth", "Zigbee"],
                  dimmable: ["yes"],
                },
              },
            ],
          },
          {
            name: "outdoor-lighting",
            filters: {
              brand: ["Philips", "Osram", "GE Lighting"],
              weather_resistant: ["yes", "no"],
              energy_rating: ["A++", "A+", "A"],
              lifespan: ["10,000 hours", "20,000 hours", "30,000 hours"],

              solar_powered: ["yes", "no"],
            },
            items: [
              {
                name: "garden-lights",
                filters: {
                  brand: ["Philips", "Osram", "GE Lighting"],
                  weather_resistant: ["yes"],
                  energy_rating: ["A++", "A+", "A"],
                  solar_powered: ["yes", "no"],

                  lifespan: ["10,000 hours", "20,000 hours"],
                  light_color: ["Warm White", "Cool White", "RGB"],
                },
              },
              {
                name: "street-lights",
                filters: {
                  brand: ["Philips", "Osram"],
                  weather_resistant: ["yes"],
                  energy_rating: ["A++", "A+"],
                  solar_powered: ["yes", "no"],

                  lifespan: ["20,000 hours", "30,000 hours"],
                  wattage: ["20W", "30W", "50W+"],
                },
              },
            ],
          },
          {
            name: "indoor-lighting",
            filters: {
              brand: ["Philips", "Cree", "Osram", "GE Lighting"],
              energy_rating: ["A++", "A+", "A"],
              lifespan: ["10,000 hours", "20,000 hours", "30,000 hours"],
              wattage: ["10W", "15W", "20W+"],

              color_temperature: ["Warm White", "Cool White", "Daylight"],
              dimmable: ["yes", "no"],
            },
            items: [
              {
                name: "ceiling-lights",
                filters: {
                  brand: ["Philips", "Cree", "Osram"],
                  energy_rating: ["A++", "A+", "A"],
                  wattage: ["15W", "20W", "30W+"],
                  lifespan: ["20,000 hours", "30,000 hours"],
                  color_temperature: ["Warm White", "Cool White", "Daylight"],

                  style: ["flush mount", "semi-flush mount", "chandeliers"],
                  dimmable: ["yes", "no"],
                },
              },
              {
                name: "wall-lamps",
                filters: {
                  brand: ["Philips", "Osram", "GE Lighting"],
                  energy_rating: ["A++", "A+", "A"],
                  wattage: ["10W", "15W", "20W+"],
                  lifespan: ["20,000 hours", "30,000 hours"],
                  color_temperature: ["Warm White", "Cool White", "Daylight"],

                  style: ["modern", "traditional", "industrial"],
                  dimmable: ["yes", "no"],
                },
              },
            ],
          },
          {
            name: "novelty-lighting",
            filters: {
              brand: ["Philips", "GE Lighting", "Osram"],
              energy_rating: ["A++", "A+", "A"],
              lifespan: ["5,000 hours", "10,000 hours", "20,000 hours"],

              color: ["Warm White", "RGB", "Cool White"],
              battery_operated: ["yes", "no"],
            },
            items: [
              {
                name: "string-lights",
                filters: {
                  brand: ["Philips", "GE Lighting", "Osram"],
                  energy_rating: ["A++", "A+", "A"],
                  lifespan: ["5,000 hours", "10,000 hours"],

                  color: ["Warm White", "RGB"],
                  battery_operated: ["yes", "no"],
                  waterproof: ["yes", "no"],
                },
              },
              {
                name: "night-lights",
                filters: {
                  brand: ["Philips", "GE Lighting", "Osram"],
                  energy_rating: ["A++", "A+"],
                  lifespan: ["5,000 hours", "10,000 hours"],

                  color: ["Warm White", "Cool White"],
                  motion_sensor: ["yes", "no"],
                  dimmable: ["yes", "no"],
                },
              },
            ],
          },
          {
            name: "stage-lighting",
            filters: {
              brand: ["Chauvet", "ADJ", "Martin"],
              wattage: ["20W", "50W", "100W", "200W+"],
              lifespan: ["10,000 hours", "20,000 hours", "30,000 hours"],

              color: ["RGB", "Warm White", "Cool White"],
              control_protocol: ["DMX", "RDM", "Art-Net"],
              waterproof: ["yes", "no"],
            },
            items: [
              {
                name: "spotlights",
                filters: {
                  brand: ["Chauvet", "ADJ", "Martin"],
                  wattage: ["50W", "100W", "200W+"],
                  lifespan: ["20,000 hours", "30,000 hours"],

                  color: ["Warm White", "Cool White", "RGB"],
                  dimmable: ["yes", "no"],
                  control_protocol: ["DMX", "RDM", "Art-Net"],
                },
              },
              {
                name: "laser-lights",
                filters: {
                  brand: ["Chauvet", "ADJ", "Martin"],
                  wattage: ["20W", "50W", "100W+"],
                  lifespan: ["10,000 hours", "20,000 hours"],

                  color: ["RGB"],
                  control_protocol: ["DMX", "Art-Net"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "education",
    categories: [
      {
        name: "office-and-school-supplies",
        filters: {
          brand: ["Staples", "Office Depot", "AmazonBasics", "Fjällräven"],
          material: ["nylon", "polyester", "canvas", "leather"],
          color: ["black", "blue", "red", "pink", "green"],

          durability: ["lightweight", "heavy-duty"],
          waterproof: ["yes", "no"],
        },
        subcategories: [
          {
            name: "school-bags",
            filters: {
              brand: ["JanSport", "Nike", "Adidas", "Fjällräven", "Herschel"],
              material: ["nylon", "polyester", "canvas", "leather"],
              capacity: ["15L", "20L", "25L", "30L+"],

              color: ["black", "blue", "pink", "green", "patterned"],
              waterproof: ["yes", "no"],
              ergonomic_design: ["yes", "no"],
            },
            items: [
              {
                name: "kids-backpacks",
                filters: {
                  brand: [
                    "JanSport",
                    "Nike",
                    "Adidas",
                    "Fjällräven",
                    "Herschel",
                  ],
                  material: ["nylon", "polyester", "canvas"],
                  capacity: ["15L", "20L", "25L"],

                  color: ["blue", "pink", "green", "patterned"],
                  waterproof: ["yes", "no"],
                  ergonomic_design: ["yes"],
                  features: [
                    "padded straps",
                    "multiple compartments",
                    "lightweight",
                  ],
                },
              },
              {
                name: "school-totes",
                filters: {
                  brand: ["L.L.Bean", "Vera Bradley", "Madewell"],
                  material: ["canvas", "cotton", "nylon"],
                  capacity: ["20L", "25L", "30L+"],

                  color: ["black", "blue", "red", "patterned"],
                  waterproof: ["yes", "no"],
                  style: ["classic", "modern", "minimalist"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "agriculture",
    categories: [
      {
        name: "home-and-garden",
        filters: {
          brand: ["Fiskars", "Hozelock", "Gardena", "Orbit"],
          material: ["stainless steel", "aluminum", "plastic"],

          eco_friendly: ["yes", "no"],
          durability: ["lightweight", "heavy-duty"],
        },
        subcategories: [
          {
            name: "garden-tools",
            filters: {
              brand: ["Fiskars", "Hozelock", "Gardena", "Orbit"],
              material: ["stainless steel", "aluminum", "plastic"],

              handle_type: ["wood", "plastic", "rubber"],
              ergonomic_design: ["yes", "no"],
              weight: ["lightweight", "medium-weight", "heavy-duty"],
            },
            items: [
              {
                name: "watering-equipment",
                filters: {
                  brand: ["Hozelock", "Gardena", "Orbit", "Rain Bird"],
                  type: ["hose", "sprinkler", "watering can", "drip system"],
                  material: ["plastic", "metal", "rubber"],
                  length: ["25ft", "50ft", "75ft", "100ft+"],

                  water_pressure: ["low", "medium", "high"],
                  eco_friendly: ["yes", "no"],
                },
              },
              {
                name: "garden-hand-tools",
                filters: {
                  brand: ["Fiskars", "Wilkinson Sword", "Spear & Jackson"],
                  type: ["pruners", "trowels", "rakes", "weeding tools"],
                  material: ["stainless steel", "aluminum", "carbon steel"],
                  handle_material: ["wood", "plastic", "rubber"],

                  ergonomic_design: ["yes", "no"],
                  weight: ["lightweight", "medium-weight", "heavy-duty"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "manufacturing",
    categories: [
      {
        name: "tools-and-hardware",
        filters: {
          brand: ["DeWalt", "Bosch", "Makita", "Milwaukee"],
          material: ["steel", "aluminum", "carbon steel", "plastic"],

          quality: ["high", "medium", "basic"],
          warranty: ["1 year", "2 years", "3 years", "Lifetime"],
        },
        subcategories: [
          {
            name: "hand-tools",
            filters: {
              brand: ["Stanley", "Craftsman", "Irwin", "Klein Tools"],
              type: ["screwdrivers", "wrenches", "pliers", "hammers"],
              material: ["steel", "chrome vanadium", "aluminum"],
              handle_material: ["plastic", "rubber", "wood"],

              ergonomic_design: ["yes", "no"],
            },
            items: [
              {
                name: "screwdrivers",
                filters: {
                  type: ["flat-head", "phillips", "torx", "precision"],
                  material: ["steel", "chrome vanadium"],
                  handle_material: ["plastic", "rubber"],

                  set_included: ["single", "multi-piece"],
                },
              },
              {
                name: "wrenches",
                filters: {
                  type: ["adjustable", "box-end", "open-end", "combination"],
                  material: ["steel", "chrome vanadium"],
                  handle_material: ["plastic", "rubber"],

                  set_included: ["single", "multi-piece"],
                },
              },
            ],
          },
          {
            name: "power-tools",
            filters: {
              brand: ["DeWalt", "Bosch", "Makita", "Milwaukee"],
              type: ["drills", "saws", "grinders", "sandpaper"],
              power_source: ["corded", "cordless"],
              voltage: ["12V", "18V", "24V"],

              warranty: ["1 year", "2 years", "3 years"],
            },
            items: [
              {
                name: "drills",
                filters: {
                  type: ["cordless", "corded"],
                  power_source: ["battery", "electric"],
                  voltage: ["12V", "18V", "24V"],

                  included_accessories: ["batteries", "chargers", "drill bits"],
                },
              },
              {
                name: "saws",
                filters: {
                  type: ["circular", "jigsaw", "reciprocating"],
                  power_source: ["corded", "cordless"],
                  blade_material: ["steel", "carbide"],

                  included_accessories: ["blades", "dust bags"],
                },
              },
            ],
          },
          {
            name: "tool-sets",
            filters: {
              brand: ["DeWalt", "Bosch", "Makita", "Craftsman"],
              type: ["mechanic-tool-sets", "household-tool-kits"],
              material: ["steel", "chrome vanadium", "aluminum"],
              number_of_pieces: ["5-10", "11-20", "21-50", "50+"],
            },
            items: [
              {
                name: "mechanic-tool-sets",
                filters: {
                  number_of_pieces: ["20", "30", "40", "50+"],
                  type: ["socket sets", "ratchets", "wrenches"],
                  case_material: ["plastic", "metal"],
                },
              },
              {
                name: "household-tool-kits",
                filters: {
                  number_of_pieces: ["10", "20", "30"],
                  type: ["hand tools", "basic tools"],
                  case_material: ["plastic", "fabric"],
                },
              },
            ],
          },
          {
            name: "fasteners-and-hooks",
            filters: {
              brand: ["Hillman", "Grip-Rite", "Fastenal"],
              type: ["screws", "nails", "hooks"],
              material: ["steel", "stainless steel", "brass"],
              size: ["small", "medium", "large"],

              packaging: ["bulk", "packs"],
            },
            items: [
              {
                name: "screws",
                filters: {
                  type: ["wood screws", "machine screws", "self-tapping"],
                  material: ["steel", "stainless steel"],
                  size: ["1/2 inch", "1 inch", "2 inch"],

                  packaging: ["bulk", "packs"],
                },
              },
              {
                name: "nails",
                filters: {
                  type: ["finish nails", "brad nails", "roofing nails"],
                  material: ["steel", "stainless steel"],
                  size: ["1 inch", "2 inch", "3 inch"],

                  packaging: ["bulk", "packs"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "construction",
    categories: [
      {
        name: "tools-and-hardware",
        filters: {
          brand: ["Bosch", "DeWalt", "Makita", "Hilti"],
          material: ["steel", "aluminum", "composite"],

          quality: ["high", "medium", "basic"],
          warranty: ["1 year", "2 years", "3 years", "5 years"],
          usage: ["professional", "home-use"],
        },
        subcategories: [
          {
            name: "hand-tools",
            filters: {
              brand: ["Stanley", "Craftsman", "Irwin", "Klein Tools"],
              type: [
                "screwdrivers",
                "wrenches",
                "pliers",
                "hammers",
                "cutting tools",
              ],
              material: ["steel", "chrome vanadium", "aluminum"],
              handle_material: ["plastic", "rubber", "wood"],

              ergonomic_design: ["yes", "no"],
              set_included: ["single", "multi-piece"],
            },
            items: [
              {
                name: "screwdrivers",
                filters: {
                  type: ["flat-head", "phillips", "torx", "precision"],
                  material: ["steel", "chrome vanadium"],
                  handle_material: ["plastic", "rubber"],

                  set_included: ["single", "multi-piece"],
                },
              },
              {
                name: "wrenches",
                filters: {
                  type: ["adjustable", "box-end", "open-end", "combination"],
                  material: ["steel", "chrome vanadium"],
                  handle_material: ["plastic", "rubber"],

                  set_included: ["single", "multi-piece"],
                },
              },
            ],
          },
          {
            name: "power-tools",
            filters: {
              brand: ["DeWalt", "Bosch", "Makita", "Hilti"],
              type: ["drills", "saws", "grinders", "impact drivers"],
              power_source: ["corded", "cordless"],
              voltage: ["12V", "18V", "24V"],

              warranty: ["1 year", "2 years", "3 years", "5 years"],
              usage: ["professional", "home-use"],
            },
            items: [
              {
                name: "drills",
                filters: {
                  type: ["cordless", "corded"],
                  power_source: ["battery", "electric"],
                  voltage: ["12V", "18V", "24V"],

                  included_accessories: ["batteries", "chargers", "drill bits"],
                },
              },
              {
                name: "saws",
                filters: {
                  type: ["circular", "jigsaw", "reciprocating"],
                  power_source: ["corded", "cordless"],
                  blade_material: ["steel", "carbide"],

                  included_accessories: ["blades", "dust bags"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "telecommunications",
    categories: [
      {
        name: "consumer-electronics",
        filters: {
          brand: ["Samsung", "Apple", "Sony", "Huawei"],

          type: ["accessory", "device"],
          compatibility: ["iOS", "Android", "Universal"],
          warranty: ["6 months", "1 year", "2 years"],
          usage: ["personal", "professional"],
        },
        subcategories: [
          {
            name: "mobile-phone-accessories",
            filters: {
              brand: ["Apple", "Samsung", "Belkin", "Anker"],
              type: [
                "phone-cases",
                "chargers",
                "screen-protectors",
                "headphones",
              ],
              material: ["plastic", "leather", "metal", "glass"],

              compatibility: ["iPhone", "Samsung Galaxy", "Universal"],
              color: ["black", "white", "red", "blue", "green"],
              warranty: ["6 months", "1 year"],
            },
            items: [
              {
                name: "phone-cases",
                filters: {
                  material: ["silicone", "leather", "plastic", "metal"],
                  color: ["black", "white", "red", "blue", "transparent"],
                  compatibility: ["iPhone", "Samsung Galaxy", "Universal"],

                  warranty: ["6 months", "1 year"],
                },
              },
              {
                name: "chargers",
                filters: {
                  type: ["wired", "wireless"],
                  compatibility: ["iPhone", "Samsung Galaxy", "Universal"],
                  voltage: ["5V", "9V", "12V"],

                  warranty: ["6 months", "1 year"],
                },
              },
            ],
          },
          {
            name: "smart-electronics",
            filters: {
              brand: ["Apple", "Samsung", "Fitbit", "Garmin"],
              type: ["smartwatches", "smart-home-devices"],
              compatibility: ["iOS", "Android", "Universal"],

              features: ["GPS", "heart-rate monitoring", "voice control"],
              warranty: ["1 year", "2 years"],
            },
            items: [
              {
                name: "smartwatches",
                filters: {
                  brand: ["Apple", "Samsung", "Garmin", "Fitbit"],
                  compatibility: ["iOS", "Android"],
                  features: ["GPS", "heart-rate monitoring", "sleep tracking"],

                  warranty: ["1 year", "2 years"],
                },
              },
              {
                name: "smart-home-devices",
                filters: {
                  type: ["smart-speakers", "smart-lighting", "smart-plugs"],
                  compatibility: [
                    "Amazon Alexa",
                    "Google Assistant",
                    "Apple HomeKit",
                  ],

                  warranty: ["1 year", "2 years"],
                },
              },
            ],
          },
          {
            name: "wearable-devices",
            filters: {
              brand: ["Apple", "Samsung", "Fitbit", "Garmin"],
              type: ["fitness-trackers", "smartwatches"],
              compatibility: ["iOS", "Android"],

              features: [
                "step tracking",
                "heart-rate monitoring",
                "sleep analysis",
              ],
              warranty: ["1 year", "2 years"],
            },
            items: [
              {
                name: "fitness-trackers",
                filters: {
                  brand: ["Fitbit", "Garmin", "Xiaomi"],
                  features: [
                    "step counting",
                    "heart-rate monitoring",
                    "calorie tracking",
                  ],

                  warranty: ["1 year"],
                },
              },
              {
                name: "smartwatches",
                filters: {
                  brand: ["Apple", "Samsung", "Garmin"],
                  features: ["GPS", "health monitoring", "notifications"],

                  warranty: ["1 year", "2 years"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    industry: "fashion-and-apparel",
    categories: [
      {
        name: "apparel-and-accessories",
        filters: {
          category: [
            "women's-clothing",
            "men's-clothing",
            "shoes",
            "hats-and-caps",
            "eyewear",
          ],

          brand: ["Nike", "Adidas", "Gucci", "Prada", "Zara", "H&M"],
          size: ["XS", "S", "M", "L", "XL", "XXL"],
          color: ["black", "white", "red", "blue", "green", "yellow"],
          material: ["cotton", "polyester", "wool", "leather", "silk"],
          gender: ["men", "women", "unisex"],
          style: ["casual", "formal", "sporty", "vintage", "modern"],
          season: ["summer", "winter", "spring", "autumn"],
        },
        subcategories: [
          {
            name: "women's-clothing",
            filters: {
              type: ["dresses", "tops", "skirts", "trousers", "jackets"],
              size: ["XS", "S", "M", "L", "XL"],
              color: ["black", "white", "red", "blue", "green"],
              material: ["cotton", "silk", "wool", "polyester"],
              brand: ["Gucci", "Chanel", "Prada", "Zara"],
              style: ["formal", "casual", "business", "evening"],

              season: ["summer", "winter", "spring", "autumn"],
            },
            items: [], // Detailed items can be added here
          },
          {
            name: "men's-clothing",
            filters: {
              type: ["shirts", "t-shirts", "jeans", "suits", "jackets"],
              size: ["S", "M", "L", "XL", "XXL"],
              color: ["black", "white", "blue", "grey", "green"],
              material: ["cotton", "linen", "wool", "polyester"],
              brand: ["Nike", "Adidas", "Levi's", "Tommy Hilfiger"],
              style: ["casual", "formal", "business", "athletic"],

              season: ["summer", "winter", "spring", "autumn"],
            },
            items: [], // Detailed items can be added here
          },
          {
            name: "shoes",
            filters: {
              type: ["sneakers", "boots", "sandals", "formal-shoes"],
              size: ["6", "7", "8", "9", "10", "11"],
              color: ["black", "brown", "white", "grey", "red"],
              material: ["leather", "suede", "canvas", "synthetic"],
              brand: ["Nike", "Adidas", "Puma", "Clarks"],
              style: ["casual", "formal", "athletic", "outdoor"],

              season: ["summer", "winter", "year-round"],
            },
            items: [], // Detailed items can be added here
          },
          {
            name: "hats-and-caps",
            filters: {
              type: ["baseball-caps", "beanies", "fedoras", "hats"],
              size: ["S", "M", "L", "XL"],
              color: ["black", "grey", "navy", "red", "white"],
              material: ["cotton", "wool", "polyester", "felt"],
              brand: ["Nike", "Adidas", "New Era", "Carhartt"],
              style: ["casual", "formal", "sports", "vintage"],

              season: ["summer", "winter", "year-round"],
            },
            items: [], // Detailed items can be added here
          },
          {
            name: "eyewear",
            filters: {
              type: ["sunglasses", "reading-glasses", "prescription-glasses"],
              frameMaterial: ["plastic", "metal", "wood"],
              lensType: ["polarized", "non-polarized", "photochromic"],
              color: ["black", "brown", "grey", "blue", "green"],
              brand: ["Ray-Ban", "Oakley", "Gucci", "Prada"],

              style: ["fashion", "sport", "classic", "modern"],
            },
            items: [], // Detailed items can be added here
          },
        ],
      },
    ],
  },
];
