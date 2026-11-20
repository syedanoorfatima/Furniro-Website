/* =========================================================
   FURNIRO - MODERN FURNITURE STORE
   PREMIUM RESPONSIVE E-COMMERCE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       PRODUCT DATA
    ========================================================= */

    const products = [
        {
            id: 1,
            name: "Syltherine",
            category: "sofa",
            price: 799,
            oldPrice: 899,
            badge: "-11%",
            rating: 4.8,
            reviews: 124,
            image:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
            description:
                "A refined modern sofa with soft upholstery, generous seating and a timeless silhouette."
        },

        {
            id: 2,
            name: "Leviosa Lounge Chair",
            category: "chair",
            price: 299,
            oldPrice: 349,
            badge: "-14%",
            rating: 4.7,
            reviews: 98,
            image:
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85",
            description:
                "A comfortable accent chair designed to bring warmth and character to contemporary spaces."
        },

        {
            id: 3,
            name: "Lolito Dining Table",
            category: "table",
            price: 649,
            oldPrice: 749,
            badge: "-13%",
            rating: 4.9,
            reviews: 87,
            image:
                "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=85",
            description:
                "A sophisticated dining table combining clean geometry with a warm natural finish."
        },

        {
            id: 4,
            name: "Respira Bed",
            category: "bed",
            price: 899,
            oldPrice: 999,
            badge: "New",
            rating: 4.9,
            reviews: 76,
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
            description:
                "A premium upholstered bed made for calm bedrooms and comfortable nights."
        },

        {
            id: 5,
            name: "Grifo Accent Chair",
            category: "chair",
            price: 249,
            oldPrice: 299,
            badge: "-17%",
            rating: 4.6,
            reviews: 65,
            image:
                "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85",
            description:
                "A compact statement chair that adds texture, comfort and personality to any room."
        },

        {
            id: 6,
            name: "Muggo Side Table",
            category: "table",
            price: 189,
            oldPrice: 229,
            badge: "-17%",
            rating: 4.7,
            reviews: 54,
            image:
                "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=900&q=85",
            description:
                "A versatile side table with a minimalist profile and practical everyday surface."
        },

        {
            id: 7,
            name: "Pingky Sofa",
            category: "sofa",
            price: 729,
            oldPrice: 829,
            badge: "New",
            rating: 4.8,
            reviews: 112,
            image:
                "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
            description:
                "A soft, elegant sofa with contemporary proportions and a welcoming lounge feel."
        },

        {
            id: 8,
            name: "Potty Bedroom Set",
            category: "bed",
            price: 1099,
            oldPrice: 1249,
            badge: "-12%",
            rating: 4.9,
            reviews: 91,
            image:
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
            description:
                "A coordinated bedroom statement piece inspired by modern boutique interiors."
        },

        {
            id: 9,
            name: "Aria Sofa",
            category: "sofa",
            price: 949,
            oldPrice: 1099,
            badge: "-14%",
            rating: 4.8,
            reviews: 83,
            image:
                "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=85",
            description:
                "A spacious premium sofa with deep cushions for relaxed family living."
        },

        {
            id: 10,
            name: "Nova Dining Chair",
            category: "chair",
            price: 219,
            oldPrice: 259,
            badge: "-15%",
            rating: 4.7,
            reviews: 71,
            image:
                "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=85",
            description:
                "A sleek dining chair that balances ergonomic comfort with modern elegance."
        },

        {
            id: 11,
            name: "Linea Console Table",
            category: "table",
            price: 459,
            oldPrice: 529,
            badge: "-13%",
            rating: 4.8,
            reviews: 48,
            image:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85",
            description:
                "A slim console table perfect for entryways, living rooms and curated displays."
        },

        {
            id: 12,
            name: "Luna Platform Bed",
            category: "bed",
            price: 979,
            oldPrice: 1149,
            badge: "New",
            rating: 4.9,
            reviews: 59,
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
            description:
                "A clean-lined platform bed that creates a serene and luxurious bedroom atmosphere."
        }
    ];


    /* =========================================================
       STATE
    ========================================================= */

    const state = {
        filter: "all",
        visibleProducts: 8,
        searchTerm: "",
        cart: readStorage("furniro-cart", []),
        wishlist: readStorage("furniro-wishlist", [])
    };


    /* =========================================================
       DOM HELPERS
    ========================================================= */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    /* =========================================================
       STORAGE HELPERS
    ========================================================= */

    function readStorage(key, fallback) {
        try {
            const value = JSON.parse(localStorage.getItem(key));

            return value ?? fallback;
        } catch {
            return fallback;
        }
    }


    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("Furniro storage error:", error);
        }
    }


    /* =========================================================
       DATA HELPERS
    ========================================================= */

    function getProduct(id) {
        return products.find(
            product => product.id === Number(id)
        );
    }


    function formatPrice(value) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value);
    }


    function escapeHTML(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    /* =========================================================
       NOTIFICATION SYSTEM
    ========================================================= */

    function showNotification(message, type = "success") {
        const notification = $("#notification");
        const text = $("#notificationText");

        if (!notification) return;

        if (text) {
            text.textContent = message;
        } else {
            notification.textContent = message;
        }

        notification.dataset.type = type;
        notification.classList.add("show");

        clearTimeout(showNotification.timer);

        showNotification.timer = setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    }


    /* =========================================================
       BODY SCROLL LOCK
    ========================================================= */

    function lockBody(locked) {
        document.body.style.overflow = locked ? "hidden" : "";
    }


    /* =========================================================
       PAGE LOADER
    ========================================================= */

    const pageLoader = $("#pageLoader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            pageLoader?.classList.add("hidden");
        }, 350);
    });

    setTimeout(() => {
        pageLoader?.classList.add("hidden");
    }, 1800);


    /* =========================================================
       HEADER / NAVIGATION
    ========================================================= */

    const header = $("#header");
    const navbar = $("#navbar");
    const menuBtn = $("#menuBtn");

    function updateHeader() {
        header?.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

        const sections = $$("main section[id]");
        const scrollPosition = window.scrollY + 150;

        let current = "";

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                current = section.id;
            }
        });

        $$(".nav-link").forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );
        });
    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    function closeMobileMenu() {
        navbar?.classList.remove("active");

        menuBtn?.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn?.setAttribute(
            "aria-label",
            "Open menu"
        );

        if (menuBtn) {
            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }
    }


    menuBtn?.addEventListener("click", () => {
        const isOpen =
            navbar?.classList.toggle("active");

        menuBtn?.setAttribute(
            "aria-expanded",
            String(Boolean(isOpen))
        );

        menuBtn?.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        if (menuBtn) {
            menuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        }
    });


    $$(".nav-link, .navbar a").forEach(link => {
        link.addEventListener(
            "click",
            closeMobileMenu
        );
    });


    updateHeader();


    /* =========================================================
       SEARCH SYSTEM
    ========================================================= */

    const searchBtn = $("#searchBtn");
    const searchOverlay = $("#searchOverlay");
    const closeSearchBtn = $("#closeSearch");
    const searchInput = $("#searchInput");
    const searchSubmit = $("#searchSubmit");

    function openSearch() {
        if (!searchOverlay) return;

        searchOverlay.classList.add("active");
        searchOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        lockBody(true);

        setTimeout(() => {
            searchInput?.focus();
        }, 120);
    }


    function closeSearch() {
        searchOverlay?.classList.remove("active");

        searchOverlay?.setAttribute(
            "aria-hidden",
            "true"
        );

        if (
            !$("#cartSidebar")?.classList.contains("active") &&
            !$("#quickViewOverlay")?.classList.contains("active")
        ) {
            lockBody(false);
        }
    }


    function performSearch() {
        const term =
            searchInput?.value
                .trim()
                .toLowerCase() || "";

        state.searchTerm = term;
        state.filter = "all";
        state.visibleProducts = products.length;

        $$(".filter").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === "all"
            );
        });

        renderProducts();

        closeSearch();

        document.querySelector("#shop")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        if (term) {
            showNotification(
                `Showing results for "${term}"`
            );
        }
    }


    searchBtn?.addEventListener(
        "click",
        openSearch
    );

    closeSearchBtn?.addEventListener(
        "click",
        closeSearch
    );

    searchSubmit?.addEventListener(
        "click",
        performSearch
    );


    searchInput?.addEventListener(
        "keydown",
        event => {
            if (event.key === "Enter") {
                event.preventDefault();
                performSearch();
            }
        }
    );


    searchOverlay?.addEventListener(
        "click",
        event => {
            if (event.target === searchOverlay) {
                closeSearch();
            }
        }
    );


    $$(".search-suggestions button").forEach(button => {
        button.addEventListener("click", () => {
            const value =
                button.dataset.search ||
                button.textContent.trim();

            if (searchInput) {
                searchInput.value = value;
            }

            performSearch();
        });
    });


    /* =========================================================
       PRODUCT FILTERING
    ========================================================= */

    const productGrid = $("#productGrid");
    const viewMoreBtn = $("#viewMoreBtn");


    function filteredProducts() {
        const term = state.searchTerm;

        return products.filter(product => {

            const categoryMatch =
                state.filter === "all" ||
                product.category === state.filter;

            const searchMatch =
                !term ||
                product.name
                    .toLowerCase()
                    .includes(term) ||

                product.category
                    .toLowerCase()
                    .includes(term) ||

                product.description
                    .toLowerCase()
                    .includes(term);

            return categoryMatch && searchMatch;
        });
    }


    /* =========================================================
       STAR RATING
    ========================================================= */

    function stars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar =
            rating % 1 >= 0.5;

        let html = "";

        for (let i = 1; i <= 5; i++) {

            if (i <= fullStars) {

                html +=
                    '<i class="fa-solid fa-star"></i>';

            } else if (
                i === fullStars + 1 &&
                hasHalfStar
            ) {

                html +=
                    '<i class="fa-solid fa-star-half-stroke"></i>';

            } else {

                html +=
                    '<i class="fa-regular fa-star"></i>';
            }
        }

        return html;
    }


    /* =========================================================
       PRODUCT CARD
    ========================================================= */

    function productCard(product) {

        const wished =
            state.wishlist.includes(product.id);

        return `
            <article
                class="product-card reveal"
                data-product-id="${product.id}"
            >

                <div class="product-image">

                    ${product.badge
                ? `
                                <span class="sale-badge">
                                    ${escapeHTML(product.badge)}
                                </span>
                            `
                : ""
            }

                    <button
                        class="wishlist-btn ${wished ? "active" : ""}"
                        data-action="wishlist"
                        data-id="${product.id}"
                        aria-label="${wished
                ? "Remove from wishlist"
                : "Add to wishlist"
            }"
                        aria-pressed="${wished}"
                        type="button"
                    >
                        <i class="${wished
                ? "fa-solid"
                : "fa-regular"
            } fa-heart"></i>
                    </button>

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        decoding="async"
                    >

                    <div class="product-overlay">

                        <button
                            class="quick-view"
                            data-action="quick-view"
                            data-id="${product.id}"
                            aria-label="Quick view ${escapeHTML(product.name)}"
                            type="button"
                        >
                            <i class="fa-regular fa-eye"></i>
                        </button>

                    </div>

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <div
                        class="product-rating"
                        aria-label="Rated ${product.rating} out of 5"
                    >
                        ${stars(product.rating)}
                        <span>
                            (${product.reviews})
                        </span>
                    </div>

                    <div class="product-price">

                        ${formatPrice(product.price)}

                        ${product.oldPrice
                ? `
                                    <del>
                                        ${formatPrice(product.oldPrice)}
                                    </del>
                                `
                : ""
            }

                    </div>

                    <button
                        class="add-cart"
                        data-action="add-cart"
                        data-id="${product.id}"
                        type="button"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>

                </div>

            </article>
        `;
    }


    /* =========================================================
       RENDER PRODUCTS
    ========================================================= */

    function renderProducts() {

        if (!productGrid) return;

        const list = filteredProducts();

        const visible =
            list.slice(
                0,
                state.visibleProducts
            );


        if (!visible.length) {

            productGrid.innerHTML = `
                <div class="empty-products reveal show">

                    <i class="fa-solid fa-box-open"></i>

                    <h3>
                        No products found
                    </h3>

                    <p>
                        Try another search or category.
                    </p>

                    <button
                        class="outline-btn"
                        id="clearSearch"
                        type="button"
                    >
                        Clear Search
                    </button>

                </div>
            `;

        } else {

            productGrid.innerHTML =
                visible
                    .map(productCard)
                    .join("");
        }


        const hasMore =
            list.length > state.visibleProducts;


        if (viewMoreBtn) {

            viewMoreBtn.hidden =
                !hasMore;

            viewMoreBtn.innerHTML =
                hasMore
                    ? `
                        View More Products
                        <i class="fa-solid fa-arrow-right"></i>
                    `
                    : "All Products Loaded";
        }


        observeReveals();
    }


    /* =========================================================
       CLEAR SEARCH
    ========================================================= */

    productGrid?.addEventListener(
        "click",
        event => {

            const clearBtn =
                event.target.closest("#clearSearch");

            if (!clearBtn) return;

            state.searchTerm = "";
            state.filter = "all";
            state.visibleProducts = 8;

            if (searchInput) {
                searchInput.value = "";
            }

            $$(".filter").forEach(button => {
                button.classList.toggle(
                    "active",
                    button.dataset.filter === "all"
                );
            });

            renderProducts();
        }
    );


    /* =========================================================
       FILTER BUTTONS
    ========================================================= */

    $$(".filter").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.filter =
                    button.dataset.filter || "all";

                state.searchTerm = "";
                state.visibleProducts = 8;

                if (searchInput) {
                    searchInput.value = "";
                }

                $$(".filter").forEach(item => {
                    item.classList.toggle(
                        "active",
                        item === button
                    );
                });

                renderProducts();
            }
        );
    });


    /* =========================================================
       VIEW MORE
    ========================================================= */

    viewMoreBtn?.addEventListener(
        "click",
        () => {

            state.visibleProducts += 4;

            renderProducts();

            showNotification(
                "More products loaded ✨"
            );
        }
    );


    /* =========================================================
       PRODUCT ACTIONS
    ========================================================= */

    productGrid?.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-action]"
                );

            if (!target) return;

            const id =
                Number(target.dataset.id);

            const action =
                target.dataset.action;


            if (action === "add-cart") {
                addToCart(id);
            }


            if (action === "wishlist") {
                toggleWishlist(id);
            }


            if (action === "quick-view") {
                openQuickView(id);
            }
        }
    );


    /* =========================================================
       CATEGORY BUTTONS
    ========================================================= */

    $$(".category-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                const filter =
                    $(
                        `.filter[data-filter="${category}"]`
                    );

                filter?.click();

                document
                    .querySelector("#shop")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            }
        );
    });


    /* =========================================================
       CART SYSTEM
    ========================================================= */

    const cartBtn = $("#cartBtn");
    const cartSidebar = $("#cartSidebar");
    const overlay = $("#overlay");
    const closeCartBtn = $("#closeCart");
    const cartItems = $("#cartItems");
    const cartTotal = $("#cartTotal");
    const checkoutBtn = $("#checkoutBtn");


    function cartCount() {

        return state.cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
    }


    function cartSubtotal() {

        return state.cart.reduce(
            (total, item) => {

                const product =
                    getProduct(item.id);

                return total +
                    (
                        product
                            ? product.price *
                            item.quantity
                            : 0
                    );
            },
            0
        );
    }


    function updateBadges() {

        const count =
            cartCount();

        const wishlistCount =
            state.wishlist.length;


        $$(".cart-count").forEach(
            badge => {
                badge.textContent = count;
                badge.hidden = count === 0;
            }
        );


        $$(".wishlist-count").forEach(
            badge => {
                badge.textContent =
                    wishlistCount;

                badge.hidden =
                    wishlistCount === 0;
            }
        );
    }


    function renderCart() {

        if (!cartItems) return;


        if (!state.cart.length) {

            cartItems.innerHTML = `
                <div class="empty-cart">

                    <i class="fa-solid fa-bag-shopping"></i>

                    <h3>
                        Your cart is empty
                    </h3>

                    <p>
                        Add something beautiful to your cart.
                    </p>

                    <a
                        href="#shop"
                        class="outline-btn"
                    >
                        Start Shopping
                    </a>

                </div>
            `;

        } else {

            cartItems.innerHTML =
                state.cart
                    .map(item => {

                        const product =
                            getProduct(item.id);

                        if (!product) {
                            return "";
                        }

                        return `
                            <div
                                class="cart-item"
                                data-id="${product.id}"
                            >

                                <img
                                    src="${product.image}"
                                    alt="${escapeHTML(product.name)}"
                                >

                                <div class="cart-item-info">

                                    <h4>
                                        ${escapeHTML(product.name)}
                                    </h4>

                                    <span class="cart-item-price">
                                        ${formatPrice(product.price)}
                                    </span>

                                    <div class="quantity-controls">

                                        <button
                                            data-cart-action="decrease"
                                            data-id="${product.id}"
                                            aria-label="Decrease quantity"
                                            type="button"
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${item.quantity}
                                        </span>

                                        <button
                                            data-cart-action="increase"
                                            data-id="${product.id}"
                                            aria-label="Increase quantity"
                                            type="button"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <button
                                    class="remove-item"
                                    data-cart-action="remove"
                                    data-id="${product.id}"
                                    aria-label="Remove ${escapeHTML(product.name)}"
                                    type="button"
                                >
                                    <i class="fa-solid fa-trash"></i>
                                </button>

                            </div>
                        `;
                    })
                    .join("");
        }


        if (cartTotal) {
            cartTotal.textContent =
                formatPrice(
                    cartSubtotal()
                );
        }


        updateBadges();
    }


    function addToCart(
        id,
        quantity = 1,
        openSidebar = false
    ) {

        const product =
            getProduct(id);

        if (!product) return;


        const existing =
            state.cart.find(
                item => item.id === id
            );


        if (existing) {

            existing.quantity += quantity;

        } else {

            state.cart.push({
                id,
                quantity
            });
        }


        saveStorage(
            "furniro-cart",
            state.cart
        );

        renderCart();

        showNotification(
            `${product.name} added to your cart 🛒`
        );


        if (openSidebar) {
            openCart();
        }
    }


    function updateCartItem(id, change) {

        const item =
            state.cart.find(
                cartItem =>
                    cartItem.id === id
            );

        if (!item) return;


        item.quantity += change;


        if (item.quantity <= 0) {

            state.cart =
                state.cart.filter(
                    cartItem =>
                        cartItem.id !== id
                );
        }


        saveStorage(
            "furniro-cart",
            state.cart
        );

        renderCart();
    }


    function removeFromCart(id) {

        const product =
            getProduct(id);

        state.cart =
            state.cart.filter(
                item => item.id !== id
            );


        saveStorage(
            "furniro-cart",
            state.cart
        );

        renderCart();


        if (product) {
            showNotification(
                `${product.name} removed from cart`
            );
        }
    }


    function openCart() {

        renderCart();

        cartSidebar?.classList.add("active");
        overlay?.classList.add("active");

        cartSidebar?.setAttribute(
            "aria-hidden",
            "false"
        );

        lockBody(true);
    }


    function closeCart() {

        cartSidebar?.classList.remove("active");
        overlay?.classList.remove("active");

        cartSidebar?.setAttribute(
            "aria-hidden",
            "true"
        );


        if (
            !searchOverlay?.classList.contains("active") &&
            !$("#quickViewOverlay")?.classList.contains("active")
        ) {
            lockBody(false);
        }
    }


    cartBtn?.addEventListener(
        "click",
        openCart
    );


    closeCartBtn?.addEventListener(
        "click",
        closeCart
    );


    overlay?.addEventListener(
        "click",
        closeCart
    );


    cartItems?.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-cart-action]"
                );

            if (!target) return;


            const id =
                Number(target.dataset.id);

            const action =
                target.dataset.cartAction;


            if (action === "increase") {
                updateCartItem(id, 1);
            }


            if (action === "decrease") {
                updateCartItem(id, -1);
            }


            if (action === "remove") {
                removeFromCart(id);
            }
        }
    );


    /* =========================================================
       CHECKOUT
    ========================================================= */

    checkoutBtn?.addEventListener(
        "click",
        () => {

            if (!state.cart.length) {

                showNotification(
                    "Your cart is empty",
                    "error"
                );

                return;
            }


            showNotification(
                "Checkout is ready for payment integration ✨"
            );
        }
    );


    /* =========================================================
       WISHLIST
    ========================================================= */

    function toggleWishlist(id) {

        const product =
            getProduct(id);

        if (!product) return;


        const exists =
            state.wishlist.includes(id);


        if (exists) {

            state.wishlist =
                state.wishlist.filter(
                    item => item !== id
                );

            showNotification(
                `${product.name} removed from wishlist`
            );

        } else {

            state.wishlist.push(id);

            showNotification(
                `${product.name} added to wishlist ❤️`
            );
        }


        saveStorage(
            "furniro-wishlist",
            state.wishlist
        );


        updateBadges();
        renderProducts();
    }


    $("#wishlistBtn")?.addEventListener(
        "click",
        () => {

            if (!state.wishlist.length) {

                showNotification(
                    "Your wishlist is empty ❤️"
                );

                return;
            }


            state.filter = "all";
            state.searchTerm = "";
            state.visibleProducts =
                products.length;


            if (searchInput) {
                searchInput.value = "";
            }


            $$(".filter").forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter === "all"
                );
            });


            const wishlistProducts =
                products.filter(product =>
                    state.wishlist.includes(
                        product.id
                    )
                );


            if (productGrid) {

                productGrid.innerHTML =
                    wishlistProducts
                        .map(productCard)
                        .join("");

                observeReveals();
            }


            document
                .querySelector("#shop")
                ?.scrollIntoView({
                    behavior: "smooth"
                });


            showNotification(
                `${state.wishlist.length} item(s) in your wishlist ❤️`
            );
        }
    );


    /* =========================================================
       QUICK VIEW
    ========================================================= */

    const quickViewOverlay =
        $("#quickViewOverlay");

    const quickViewContent =
        $("#quickViewContent");

    const closeQuickViewBtn =
        $("#closeQuickView");


    function openQuickView(id) {

        const product =
            getProduct(id);

        if (
            !product ||
            !quickViewContent
        ) {
            return;
        }


        quickViewContent.innerHTML = `
            <div class="quick-view-image">

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

            </div>

            <div class="quick-view-info">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h2>
                    ${escapeHTML(product.name)}
                </h2>

                <div class="product-rating">

                    ${stars(product.rating)}

                    <span>
                        ${product.rating}
                        ·
                        ${product.reviews}
                        reviews
                    </span>

                </div>

                <div class="product-price">

                    ${formatPrice(product.price)}

                    ${product.oldPrice
                ? `
                                <del>
                                    ${formatPrice(product.oldPrice)}
                                </del>
                            `
                : ""
            }

                </div>

                <p>
                    ${escapeHTML(product.description)}
                </p>

                <div class="quick-view-actions">

                    <button
                        class="primary-btn"
                        data-quick-action="add"
                        data-id="${product.id}"
                        type="button"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>

                    <button
                        class="outline-btn"
                        data-quick-action="wish"
                        data-id="${product.id}"
                        type="button"
                    >
                        <i class="fa-regular fa-heart"></i>
                        Wishlist
                    </button>

                </div>

            </div>
        `;


        quickViewOverlay?.classList.add(
            "active"
        );

        quickViewOverlay?.setAttribute(
            "aria-hidden",
            "false"
        );

        lockBody(true);
    }


    function closeQuickView() {

        quickViewOverlay?.classList.remove(
            "active"
        );

        quickViewOverlay?.setAttribute(
            "aria-hidden",
            "true"
        );


        if (
            !cartSidebar?.classList.contains("active") &&
            !searchOverlay?.classList.contains("active")
        ) {
            lockBody(false);
        }
    }


    closeQuickViewBtn?.addEventListener(
        "click",
        closeQuickView
    );


    quickViewOverlay?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                quickViewOverlay
            ) {
                closeQuickView();
            }
        }
    );


    quickViewContent?.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-quick-action]"
                );

            if (!target) return;


            const id =
                Number(target.dataset.id);


            if (
                target.dataset.quickAction ===
                "add"
            ) {

                addToCart(
                    id,
                    1,
                    true
                );

                closeQuickView();
            }


            if (
                target.dataset.quickAction ===
                "wish"
            ) {

                toggleWishlist(id);
            }
        }
    );


    /* =========================================================
       ACCOUNT BUTTON
    ========================================================= */

    $("#accountBtn")?.addEventListener(
        "click",
        () => {

            showNotification(
                "Account feature coming soon 👤"
            );
        }
    );


    /* =========================================================
       CONTACT FORM
    ========================================================= */

    const contactForm =
        $("#contactForm");


    contactForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                $("#name")?.value.trim();

            const email =
                $("#email")?.value.trim();

            const subject =
                $("#subject")?.value.trim();

            const message =
                $("#message")?.value.trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                showNotification(
                    "Please complete all fields",
                    "error"
                );

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                showNotification(
                    "Please enter a valid email address",
                    "error"
                );

                $("#email")?.focus();

                return;
            }


            const button =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            const originalHTML =
                button?.innerHTML;


            if (button) {

                button.disabled = true;

                button.innerHTML =
                    `
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        Sending...
                    `;
            }


            setTimeout(() => {

                contactForm.reset();


                if (button) {

                    button.disabled = false;

                    button.innerHTML =
                        originalHTML;
                }


                showNotification(
                    `Thanks ${name}! Your message has been received. ✨`
                );

            }, 900);
        }
    );


    /* =========================================================
       NEWSLETTER
    ========================================================= */

    const newsletterForm =
        $("#newsletterForm");


    newsletterForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const input =
                $("#newsletterEmail");

            const email =
                input?.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !email ||
                !emailPattern.test(email)
            ) {

                showNotification(
                    "Please enter a valid email",
                    "error"
                );

                input?.focus();

                return;
            }


            const subscribers =
                readStorage(
                    "furniro-subscribers",
                    []
                );


            if (
                !subscribers.includes(email)
            ) {
                subscribers.push(email);
            }


            saveStorage(
                "furniro-subscribers",
                subscribers
            );


            newsletterForm.reset();


            showNotification(
                "You're subscribed to Furniro updates! 📩"
            );
        }
    );


    /* =========================================================
       BACK TO TOP
    ========================================================= */

    const backToTop =
        $("#backToTop");


    function updateBackToTop() {

        backToTop?.classList.toggle(
            "show",
            window.scrollY > 500
        );
    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    backToTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );


    updateBackToTop();


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    let revealObserver;


    function observeReveals() {

        const elements =
            $$(".reveal:not(.show)");


        if (!elements.length) return;


        if (
            !("IntersectionObserver" in window)
        ) {

            elements.forEach(
                element =>
                    element.classList.add("show")
            );

            return;
        }


        if (!revealObserver) {

            revealObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "show"
                                    );

                                    revealObserver.unobserve(
                                        entry.target
                                    );
                                }
                            }
                        );
                    },
                    {
                        threshold: 0.12,
                        rootMargin:
                            "0px 0px -40px 0px"
                    }
                );
        }


        elements.forEach(
            element =>
                revealObserver.observe(element)
        );
    }


    /* =========================================================
       DARK / LIGHT THEME
    ========================================================= */

    const themeBtn =
        $("#themeBtn");


    function updateThemeButton() {

        if (!themeBtn) return;


        const dark =
            document.documentElement.dataset.theme ===
            "dark";


        themeBtn.innerHTML =
            dark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';


        themeBtn.setAttribute(
            "aria-label",
            dark
                ? "Switch to light theme"
                : "Switch to dark theme"
        );


        themeBtn.setAttribute(
            "title",
            dark
                ? "Light mode"
                : "Dark mode"
        );
    }


    const savedTheme =
        localStorage.getItem(
            "furniro-theme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.documentElement.dataset.theme =
            "dark";
    }


    updateThemeButton();


    themeBtn?.addEventListener(
        "click",
        () => {

            const dark =
                document.documentElement.dataset.theme !==
                "dark";


            document.documentElement.dataset.theme =
                dark
                    ? "dark"
                    : "light";


            localStorage.setItem(
                "furniro-theme",
                dark
                    ? "dark"
                    : "light"
            );


            updateThemeButton();


            showNotification(
                dark
                    ? "Dark mode enabled 🌙"
                    : "Light mode enabled ☀️"
            );
        }
    );


    /* =========================================================
       KEYBOARD CONTROLS
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            closeMobileMenu();
            closeSearch();
            closeQuickView();
            closeCart();
        }
    );


    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        document.documentElement.dataset.reduceMotion =
            "true";
    }


    /* =========================================================
       DYNAMIC YEAR
    ========================================================= */

    const currentYear =
        $("#currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       INITIALIZATION
    ========================================================= */

    renderProducts();
    renderCart();
    updateBadges();
    observeReveals();
    updateHeader();
    updateBackToTop();


    /* =========================================================
       IMAGE FALLBACK + PLACEHOLDER LINKS
    ========================================================= */

    const FALLBACK_IMG =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
            '<rect width="400" height="300" fill="#f4f1ea"/>' +
            '<g fill="none" stroke="#b88e2f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M130 175v-30a20 20 0 0 1 20-20h100a20 20 0 0 1 20 20v30"/>' +
            '<path d="M110 175h180v30H110z"/><path d="M125 205v18M275 205v18"/></g></svg>'
        );

    const useFallback = (img) => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "true";
        img.removeAttribute("srcset");
        img.src = FALLBACK_IMG;
    };

    /* Catches images that fail now or later (e.g. products re-rendered by filters) */
    document.addEventListener(
        "error",
        (event) => {
            if (event.target instanceof HTMLImageElement) useFallback(event.target);
        },
        true
    );

    /* Catches images that already failed before this script ran */
    document.querySelectorAll("img").forEach((img) => {
        if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
            useFallback(img);
        }
    });

    /* Placeholder links (href="#") should not jump the page to the top */
    document.addEventListener("click", (event) => {
        const link = event.target.closest('a[href="#"]');
        if (link) event.preventDefault();
    });

    /* =========================================================
       CONSOLE MESSAGE
    ========================================================= */

    console.log(
        "%cFurniro loaded successfully ✨",
        `
            color:#B88E2F;
            font-size:18px;
            font-weight:bold;
        `
    );
});