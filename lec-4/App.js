import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

/** 
 * =====  APP STRUCTURE =====
 * Header
 * - Logo
 * - NavBar
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Cards
 *      - Img
 *      - Name
 *      - Star rating
 *      - Cuisine
 *      - Delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 * ==== END ====
**/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [{
    "info": {
        "id": "414835",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/7901544e-20fe-4d72-bb43-373a9f0b5342_414835.JPG",
        "locality": "Khairatabad",
        "areaName": "Khairatabad",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.5K+",
        "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 4.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-28 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.6",
                "ratingCount": "799"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-khairatabad-rest414835",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "17105",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5cd9018c-0e72-4cbd-8b53-4e0495282338_17105.JPG",
        "locality": "Mehdipatnam",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "35K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹69"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "6.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/kfc-mehdipatnam-rest17105",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "560732",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/cee3277a-2b10-44c0-abe4-304c869bb29b_560732.jpg",
        "locality": "Himayath Nagar",
        "areaName": "Himayat Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.7,
        "parentId": "2093",
        "avgRatingString": "4.7",
        "totalRatingsString": "3.8K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "777"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/natural-ice-cream-himayath-nagar-himayat-nagar-rest560732",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "657474",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
        "locality": "R5 Chambers",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 04:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "750384",
        "name": "Daily Kitchen - Everyday Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/6a47ea31-f2bd-42d5-9905-5bcd2f967d24_750384.jpg",
        "locality": "Vaibhav Nagar",
        "areaName": "Masab Tank",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "444382",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.1K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 02:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/daily-kitchen-everyday-homely-meals-vaibhav-nagar-masab-tank-rest750384",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "612602",
        "name": "Kwality Walls Ice Cream and More",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
        "locality": "Circle No 13",
        "areaName": "Charminar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.8K+",
        "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 04:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "bolt!",
                                "imageId": "android/static-assets/icons/big_rx.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/kwality-walls-ice-cream-and-more-circle-no-13-charminar-rest612602",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "142670",
        "name": "Shah Ghouse Hotel & Restaurant",
        "cloudinaryImageId": "bk26jkkqpg55veii0aj9",
        "locality": "Lakdi-Ka-Pul",
        "areaName": "Banjara Hills",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Mughlai"
        ],
        "avgRating": 4.3,
        "parentId": "19271",
        "avgRatingString": "4.3",
        "totalRatingsString": "81K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-09-04 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Biryani.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "5.6K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-lakdi-ka-pul-banjara-hills-rest142670",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "639526",
        "name": "Dum Safar Biryani",
        "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
        "locality": "City Plaza",
        "areaName": "ABIDS",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Kebabs",
            "North Indian",
            "Barbecue"
        ],
        "avgRating": 4.1,
        "parentId": "351013",
        "avgRatingString": "4.1",
        "totalRatingsString": "268",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-28 23:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-city-plaza-abids-rest639526",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "3324",
        "name": "Srikanya",
        "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
        "locality": "Somajiguda",
        "areaName": "Panjagutta",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian"
        ],
        "avgRating": 4.3,
        "parentId": "7317",
        "avgRatingString": "4.3",
        "totalRatingsString": "90K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-28 22:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "3.0K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/srikanya-somajiguda-panjagutta-rest3324",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "367769",
        "name": "Lucky Restaurant",
        "cloudinaryImageId": "qems028i3da5rxf81rbp",
        "locality": "Banjara Hills",
        "areaName": "Banjara Hills",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Biryani",
            "Tandoor"
        ],
        "avgRating": 4,
        "parentId": "535180",
        "avgRatingString": "4.0",
        "totalRatingsString": "84K+",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-28 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/lucky-restaurant-banjara-hills-rest367769",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "355751",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/81393cb4-20c1-4e9f-89da-086efb599d8e_355751.jpg",
        "locality": "Khairatabad",
        "areaName": "Banjara Hills",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.8",
        "totalRatingsString": "1.0K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹148"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/grameen-kulfi-khairatabad-banjara-hills-rest355751",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "681600",
        "name": "LeanCrust Pizza- ThinCrust Experts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/12e3ef41-1079-47a2-a2b0-411cb9a072be_681600.jpg",
        "locality": "Vaibhav Nagar",
        "areaName": "Khairatabad",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "11216",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.1K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 02:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-vaibhav-nagar-khairatabad-rest681600",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "435640",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/13/4e3b62a6-5e3b-4b59-bbba-9c33a75eadfe_435640.JPG",
        "locality": "Khairtabad",
        "areaName": "Banjara Hills",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Bakery"
        ],
        "avgRating": 4.6,
        "parentId": "3818",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.7K+",
        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/bakingo-khairtabad-banjara-hills-rest435640",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "378344",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/0c8391c6-ff9b-4745-8c34-c6f905092c6c_378344.JPG",
        "locality": "Banjara Hills",
        "areaName": "Banjara Hills",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.4K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹290"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "265"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/theobroma-banjara-hills-rest378344",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "262087",
        "name": "Imperial Multicuisine Restaurant",
        "cloudinaryImageId": "rqlwvsmzcfxbg9u6ajgm",
        "locality": "Banjara Hills",
        "areaName": "Redhills",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Indian",
            "Kebabs",
            "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "543714",
        "avgRatingString": "4.4",
        "totalRatingsString": "24K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-28 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹599",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "28108",
        "name": "Al Rabea Al Arabi Cafeteria",
        "cloudinaryImageId": "jnzmscxd37rbjmgciwt5",
        "locality": "Mehdipatnam",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Arabian",
            "Lebanese"
        ],
        "avgRating": 4.4,
        "parentId": "7582",
        "avgRatingString": "4.4",
        "totalRatingsString": "85K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 01:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "1.6K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/al-rabea-al-arabi-cafeteria-mehdipatnam-rest28108",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "410257",
        "name": "Wow! China",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/0de612c6-7dba-425e-ba37-c2f00f0fae5b_410257.JPG",
        "locality": "Banjara Hills",
        "areaName": "Banjara Hills",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "fastfood",
            "Beverages",
            "Snacks"
        ],
        "avgRating": 3.9,
        "parentId": "226836",
        "avgRatingString": "3.9",
        "totalRatingsString": "3.1K+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-29 00:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.7",
                "ratingCount": "168"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9cf8b591-9560-4a1e-a895-4a931c6e5e02"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/wow-china-banjara-hills-rest410257",
        "type": "WEBLINK"
    }
},
]

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
        <div className="res-card">
            <img className='res-logo' alt='res-logo' src= {
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId
            } />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} min</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => 
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)