import { IGlasses } from "../models/IGlasses";

const glasses: IGlasses[] = [
    {
        id: 1,
        name: "SKU: sc2202176860675773",
        price: 99,
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/08/1654671143b0aa893d1dc5ca4f1dc9f0fe58ff45f7_thumbnail_600x.webp",
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magnaTorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magnaTorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        brand: "Unbranded",
        category: "Sunglasses",
        color: "Brown",
        size: "1",
    },
    {
        id: 2,
        name: "Clubmaster RB3016 W0365 4N",
        price: 36,
        image: "https://newlentes.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-clubmaster-rb3016l-w0365-51-3n-82639/1407674-2.jpg?w=530&h=530&v=no-change&qs=ignore",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Brown",
        size: "2",
    },
    {
        id: 3,
        name: "SKU: sw2108181006171717",
        price: 99,
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/17/16554454997ccc1074100901dd6d17e3e9b5e3805e_thumbnail_600x.webp",
        description: "",
        brand: "Glasses Store",
        category: "Sunglasses",
        color: "Black",
        size: "1",
    },
    {
        id: 4,
        name: "SKU: sc2108306998945886",
        price: 29,
        image: "https://img.ltwebstatic.com/images3_pi/2022/10/08/16651942225f2c50770c7c03b5ffce764c4ba0e1df_thumbnail_600x.webp",
        description: "",
        brand: "Glasses Store",
        category: "Sunglasses",
        color: "Gray",
        size: "2",
    },
    {
        id: 5,
        name: "Wingback SQ Titanium OX548",
        price: 99,
        image: "data:image/png;base64,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",
        description: "",
        brand: "Oakley",
        category: "Eyeglasses",
        color: "Black",
        size: "1",
    },
    {
        id: 6,
        name: "Alok Nature Tech",
        price: 349,
        image: "data:image/jpeg;base64,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",
        description: "",
        brand: "Chilli Beans",
        category: "Sunglasses",
        color: "Black",
        size: "1",
    },
    {
        id: 7,
        name: "Matte Black Prizm",
        price: 680,
        image: "https://assets.oakley.com/is/image/OakleyEYE/7895653215801_latch_matte-black-prizm-violet_main_001.png?impolicy=OO_ratio&width=1000",
        description: "",
        brand: "Oakley",
        category: "Sunglasses",
        color: "Black",
        size: "2",
    },
    {
        id: 8,
        name: "Clubmaster RB3016 W0365 4N",
        price: 99,
        image: "https://newlentes.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-clubmaster-rb3016l-w0365-51-3n-82639/1407674-2.jpg?w=530&h=530&v=no-change&qs=ignore",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Black",
        size: "2",
    },
    {
        id: 9,
        name: "Clubmaster RB3016 W0365 4N",
        price: 99,
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/08/1654671143b0aa893d1dc5ca4f1dc9f0fe58ff45f7_thumbnail_600x.webp",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Black",
        size: "1",
    },
    {
        id: 10,
        name: "Clubmaster RB3016 W0365 4N",
        price: 99,
        image: "https://newlentes.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-clubmaster-rb3016l-w0365-51-3n-82639/1407674-2.jpg?w=530&h=530&v=no-change&qs=ignore",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Black",
        size: "2",
    },
    {
        id: 11,
        name: "Clubmaster RB3016 W0365 4N",
        price: 99,
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/08/1654671143b0aa893d1dc5ca4f1dc9f0fe58ff45f7_thumbnail_600x.webp",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Black",
        size: "1",
    },
    {
        id: 12,
        name: "Clubmaster RB3016 W0365 4N",
        price: 99,
        image: "https://newlentes.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-clubmaster-rb3016l-w0365-51-3n-82639/1407674-2.jpg?w=530&h=530&v=no-change&qs=ignore",
        description: "",
        brand: "Ray-Ban",
        category: "Sunglasses",
        color: "Black",
        size: "2",
    },
];

export default glasses;
