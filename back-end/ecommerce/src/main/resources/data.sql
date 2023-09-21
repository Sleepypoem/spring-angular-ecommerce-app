USE `ecommerce` ;

-- -----------------------------------------------------
-- Categories
-- -----------------------------------------------------

INSERT INTO
    categories(name, description, created_at, updated_at)
VALUES (
        'Books',
        'A category for books and literature.',
        NOW(),
        NOW()
    );

INSERT INTO
    categories(name, description, created_at, updated_at)
VALUES (
        'Coffee Mugs',
        'A category for coffee mugs',
        NOW(),
        NOW()
    );

INSERT INTO
    categories(name, description, created_at, updated_at)
VALUES (
        'Mouse Pads',
        'A category for mouse pads',
        NOW(),
        NOW()
    );

INSERT INTO
    categories(name, description, created_at, updated_at)
VALUES (
        'Luggage Tags',
        'A category for luggage tags',
        NOW(),
        NOW()
    );

-- -----------------------------------------------------
-- Books
-- -----------------------------------------------------

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1000',
        'Crash Course in Python',
        'Learn Python at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/nmuyb7ibxoqaggfedxgy',
        1,
        100,
        14.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1001',
        'Become a Guru in JavaScript',
        'Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/gm4wzusq4zd133rgsucp',
        1,
        100,
        20.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1002',
        'Exploring Vue.js',
        'Learn Vue.js at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/tv39ustqbtval0hmusjj',
        1,
        100,
        14.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1003',
        'Advanced Techniques in Big Data',
        'Learn Big Data at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/tcykf1lltdmi1b650v2p',
        1,
        100,
        13.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1004',
        'Crash Course in Big Data',
        'Learn Big Data at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/rmnmktzryeqil09fnguy',
        1,
        100,
        18.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1005',
        'JavaScript Cookbook',
        'Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/nmeqf257pwk6vw3ffwqn',
        1,
        100,
        23.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1006',
        'Beginners Guide to SQL',
        'Learn SQL at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/s8wukrvmswyuie9itgfl',
        1,
        100,
        14.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1007',
        'Advanced Techniques in JavaScript',
        'Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/uz2xoshw899d3pzsowoj',
        1,
        100,
        16.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1008',
        'Introduction to Spring Boot',
        'Learn Spring Boot at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/hu87yfiejrju27ht7ebk',
        1,
        100,
        25.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1009',
        'Become a Guru in React.js',
        'Learn React.js at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/pykdnkshibyllxgpgf6k',
        1,
        100,
        23.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1010',
        'Beginners Guide to Data Science',
        'Learn Data Science at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/dupxrrxvmka4ybzz7tud',
        1,
        100,
        24.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1011',
        'Advanced Techniques in Java',
        'Learn Java at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/axqklmranrfomxuhon3z',
        1,
        100,
        19.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1012',
        'Exploring DevOps',
        'Learn DevOps at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/sy908aguyb0unz5gtjob',
        1,
        100,
        24.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1013',
        'The Expert Guide to SQL',
        'Learn SQL at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/alvlqyojkqhs2z8gkv1e',
        1,
        100,
        19.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1014',
        'Introduction to SQL',
        'Learn SQL at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/edv9vcdzudmskwsidks6',
        1,
        100,
        22.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1015',
        'The Expert Guide to JavaScript',
        'Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/pkoumo5zp1we6dd5sqck',
        1,
        100,
        22.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1016',
        'Exploring React.js',
        'Learn React.js at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/uwllxfhcjtf9llbw0hlf',
        1,
        100,
        27.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1017',
        'Advanced Techniques in React.js',
        'Learn React.js at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/qhxshamaqsaovakrgybc',
        1,
        100,
        13.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1018',
        'Introduction to C#',
        'Learn C# at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/nwzorwckscyiehtuiy4f',
        1,
        100,
        26.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1019',
        'Crash Course in JavaScript',
        'Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/nzow3oseodlge5msnoll',
        1,
        100,
        13.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1020',
        'Introduction to Machine Learning',
        'Learn Machine Learning at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/rit42xvixessgtowieeo',
        1,
        100,
        19.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1021',
        'Become a Guru in Java',
        'Learn Java at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/oxqyuefuvgdi1mj5wjmn',
        1,
        100,
        18.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1022',
        'Introduction to Python',
        'Learn Python at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/zkrzehzjy1zfidjnorzl',
        1,
        100,
        26.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1023',
        'Advanced Techniques in C#',
        'Learn C# at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/dnwrflfatg2aiim1l0ei',
        1,
        100,
        22.99,
        1,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'BOOK-TECH-1024',
        'The Expert Guide to Machine Learning',
        'Learn Machine Learning at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
        'spring-angular-ecommerce/assets/images/products/books/yetq264zaoyqqjxioery',
        1,
        100,
        16.99,
        1,
        NOW()
    );

-- -----------------------------------------------------

-- Coffee Mugs

-- -----------------------------------------------------

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1000',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/cxcm2yh78euqverkoros',
        1,
        100,
        23.02,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1001',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/dremjtkllg107rqsb8ql',
        1,
        100,
        10.08,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1002',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/elma3ducmjxndzccodsi',
        1,
        100,
        47.60,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1003',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/erzx6dezg0ikhtjyr6ae',
        1,
        100,
        0.66,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1004',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/kpkzhylxw5p9lu944g5m',
        1,
        100,
        79.81,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1005',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/kszdurmclmncgnppkolw',
        1,
        100,
        78.29,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1006',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/ljbsmkx5iui253tun269',
        1,
        100,
        4.97,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1007',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/m75mlmgimaigjz2xbocg',
        1,
        100,
        47.56,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1008',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/m9txpp3c9qdrhplkdsmd',
        1,
        100,
        25.97,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1009',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/moesrczlh0ah7yuh7fle',
        1,
        100,
        83.57,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1010',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/nbo7wlpusrmbpwckcisk',
        1,
        100,
        54.92,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1011',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/oq1aalidmil8uf8utufr',
        1,
        100,
        20.23,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1012',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/pbtsgyjpxh3yoldslnpf',
        1,
        100,
        62.64,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1013',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/pjg5aaydkuxie1hjfdyw',
        1,
        100,
        92.72,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1014',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/qjuonzobcjrwps7vwmzm',
        1,
        100,
        23.06,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1015',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/qour4wvuoin94juccdnf',
        1,
        100,
        73.00,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1016',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/r9mycx3p6xaaczclhe17',
        1,
        100,
        77.48,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1017',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/s4vmim1sn98mwrd0g9dm',
        1,
        100,
        71.55,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1018',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/sqopgeho28kkkkcdtuxs',
        1,
        100,
        56.35,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1019',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/tvtzlcnzfkpgiv7xxqkk',
        1,
        100,
        95.12,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1020',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/u2vg2n2xks2njawa85z0',
        1,
        100,
        88.10,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1021',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/v1klnjqla279cnci31rb',
        1,
        100,
        74.89,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1022',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/xbvyknbql88cfiv9kxdj',
        1,
        100,
        18.13,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1023',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/yh1ubrufbvgs3db5nhgp',
        1,
        100,
        64.09,
        2,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'COOFEE-MUG-1024',
        'Coffee Mug',
        'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!',
        'spring-angular-ecommerce/assets/images/products/coffeemugs/zax5f1zx8icfnvms64hs',
        1,
        100,
        22.52,
        2,
        NOW()
    );

-- -----------------------------------------------------

-- Mouse Pads

-- -----------------------------------------------------

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1000',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/a1nhhzlipsmeuztfingg',
        1,
        100,
        51.46,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1001',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/afyeeju3iucmvpkp4oha',
        1,
        100,
        24.96,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1002',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/alkzq1inpkmnalyknah2',
        1,
        100,
        89.48,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1003',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/ccuo5ywscatjsbqdek8r',
        1,
        100,
        7.19,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1004',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/cjvdq0kj7olgmqyky0rx',
        1,
        100,
        42.77,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1005',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/csda4kroqoxyrh5gffak',
        1,
        100,
        21.19,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1006',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/d5apbepzvkdcucf1csjz',
        1,
        100,
        97.15,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1007',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/gsxyvhrqq60m9i7ykanv',
        1,
        100,
        42.12,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1008',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/hqagunxzjihixccja30o',
        1,
        100,
        32.39,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1009',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/hyhdqmaz9cbtw7rl1h3w',
        1,
        100,
        10.72,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1010',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/jmuav406qqm4hccjvqdv',
        1,
        100,
        32.03,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1011',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/llqs1zef6rvrvbf80w4y',
        1,
        100,
        80.37,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1012',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/lo83wudsjmpu2olpt3fb',
        1,
        100,
        16.08,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1013',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/lyhm2a6l8uizzs8iwekd',
        1,
        100,
        53.83,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1014',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/m8iquagvanvvtitlqkjf',
        1,
        100,
        92.93,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1015',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/pumqskkoaklnydk3ypd5',
        1,
        100,
        32.57,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1016',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/qolyufafplds9nwl84yk',
        1,
        100,
        62.52,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1017',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/tikrjjf1nensxyt1cnec',
        1,
        100,
        33.30,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1018',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/tmer6l1tg5hgr1kd3ext',
        1,
        100,
        9.30,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1019',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/vqubgourclst5qr3jpk1',
        1,
        100,
        24.68,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1020',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/vssoemhwn4bmadncumdi',
        1,
        100,
        20.20,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1021',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/vuy7uz48hv46p3a08qwr',
        1,
        100,
        26.24,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1022',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/wopgsr1n8ohq2p94jnqm',
        1,
        100,
        62.54,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1023',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/yw5moyojtvdr5ssyfew3',
        1,
        100,
        31.41,
        3,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'MOUSEPAD-1024',
        'Mouse Pad',
        'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!',
        'spring-angular-ecommerce/assets/images/products/mousepads/zmwttgrfmv3sefano36u',
        1,
        100,
        24.05,
        3,
        NOW()
    );

-- -----------------------------------------------------

-- Luggage Tags

-- -----------------------------------------------------

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1000',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/abdsex8jcu6leshsocyb',
        1,
        100,
        97.67,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1001',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/ap4canzhsqi1c5cwwgwd',
        1,
        100,
        88.30,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1002',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/d4xmujsceige8cg8xrma',
        1,
        100,
        82.96,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1003',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/duoebyftulxyqqyjnevu',
        1,
        100,
        10.81,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1004',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/fta0vonnedfubxs4xjzt',
        1,
        100,
        27.10,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1005',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/hvn0ql0tym97bnwmbd8l',
        1,
        100,
        7.46,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1006',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/i0qjjoryq9vk5waqxf9w',
        1,
        100,
        11.18,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1007',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/iqk1vzmcyvo9d0v6p84r',
        1,
        100,
        52.26,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1008',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/kow10qkfpxsdkq2gkbme',
        1,
        100,
        15.78,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1009',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/kvqjvshirm7c0zb9mlx8',
        1,
        100,
        63.34,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1010',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/lt3wpobqsbelwfhzg8qk',
        1,
        100,
        83.91,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1011',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/lwgtyzjwsjgqz3nzsrqz',
        1,
        100,
        13.82,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1012',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/mgzygiwgjbnmgqoudnuk',
        1,
        100,
        14.96,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1013',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/muwunuyrvj8tkqzsxmgi',
        1,
        100,
        87.43,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1014',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/o2ba2x18vfoeqjrhtotx',
        1,
        100,
        13.58,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1015',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/oadi6abigcdevkjmsxrf',
        1,
        100,
        38.69,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1016',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/pswkc7udpah3y0ujyqbo',
        1,
        100,
        40.68,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1017',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/qivmyuzscgyqg9y1fg3w',
        1,
        100,
        3.80,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1018',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/qztzqykryd3abl32fhan',
        1,
        100,
        96.25,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1019',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/sfkmqgb1ch5s9adnkfk4',
        1,
        100,
        70.46,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1020',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/u5j7025ug8gt16nzvub6',
        1,
        100,
        79.43,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1021',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/ut4vbh0xwe3bjiz3twwx',
        1,
        100,
        85.40,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1022',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/yepqgimrfldmcmsjouto',
        1,
        100,
        94.21,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1023',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/yfmpuccdwtu1cok3ro1j',
        1,
        100,
        8.17,
        4,
        NOW()
    );

INSERT INTO
    products (
        sku,
        name,
        description,
        image,
        active,
        stock,
        price,
        category_id,
        created_at
    )
VALUES (
        'LUGGAGETAG-1024',
        'Luggage Tag',
        'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!',
        'spring-angular-ecommerce/assets/images/products/luggagetags/ykr2jnvy987sbyikrykd',
        1,
        100,
        32.44,
        4,
        NOW()
    );

-- -----------------------------------------------------
-- Roles
-- -----------------------------------------------------

insert into roles (id, name, description, created_at, updated_at) values (1, 'ADMIN', 'A Role for admins.',NOW(), NOW());
insert into roles(id, name, description, created_at, updated_at) values (2, 'USER', 'A Role for users.', NOW(), NOW());

-- -----------------------------------------------------
-- Permissions
-- -----------------------------------------------------

insert into permissions (id, name, description, created_at, updated_at) values (1, 'WRITE', 'It allows to edit data.', NOW(), NOW());
insert into permissions (id, name, description, created_at, updated_at) values (2, 'READ', 'It allows to read data.', NOW(), NOW());

-- -----------------------------------------------------
-- Assign permissions to roles
-- -----------------------------------------------------

insert into permissions_roles (role_id, permission_id) values (1, 1);
insert into permissions_roles (role_id, permission_id) values (1, 2);
insert into permissions_roles (role_id, permission_id) values (2, 2);

-- -----------------------------------------------------
-- Customers
-- -----------------------------------------------------

INSERT INTO
    customers (
        first_name,
        last_name,
        email,
        phone,
        active,
        role_id,
        image,
        created_at,
        updated_at
    )
VALUES (
        'Oscar Armando',
        'Galicia Espino',
        'oskritoboy@gmail.com',
        '+503 45789666',
        1,
        1,
        'spring-angular-ecommerce/assets/images/customers/usbu1hfswc3jvyesyzwu',
        NOW(),
        NOW()
    );

    INSERT INTO
    customers (
        first_name,
        last_name,
        email,
        phone,
        active,
        role_id,
        image,
        created_at,
        updated_at
    )
VALUES (
        'Anya',
        'Forger',
        'anyfor@fakemail.com',
        '+503 1233166',
        1,
        2,
        'spring-angular-ecommerce/assets/images/customers/agae0s1qavzz5oxqa4ks',
        NOW(),
        NOW()
    );
