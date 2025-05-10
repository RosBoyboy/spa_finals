Alpine.store("settings", {
<<<<<<< HEAD
    apiBaseUrl: "http://172.17.100.14:3347/user1/default/api",
=======
    apiBaseUrl: "http://127.0.0.1:3347/user1/default/api",
>>>>>>> Initial commit
    appName: "contact application",
});

Alpine.store("exam", {
<<<<<<< HEAD
    apiExamBaseUrl: "http://172.17.100.14:3347/user1/default/exam",
=======
    apiExamBaseUrl: "http://127.0.0.1:3347/user1/default/exam",
>>>>>>> Initial commit
    appName: "exam",
});

Alpine.store("GlobalVariable", {
    contacts: Alpine.reactive({ 
        data: [], 
        total: 0,         
    }),
    queryParams: Alpine.reactive({}), // Keep query parameters reactive
});

Alpine.store("GlobalFunctions", { 
    findContactById(id) {        
        let contacts = Alpine.store("GlobalVariable").contacts.data;
        let foundContact = contacts.find(c => Number(c.id) === Number(id));
        
        if (foundContact) {
            return { ...foundContact };
        } else {
            return {};
        }
    }
});

Alpine.store("ecommerce", {
<<<<<<< HEAD
<<<<<<< HEAD
    apiBaseUrl: "http://172.17.100.14:3347/api",
=======
    apiBaseUrl: "http://127.0.0.1:3347/user1/default/api",
>>>>>>> Initial commit
    csrfToken: document.querySelector('meta[name="csrf-token"]')?.content || '',

    async fetchData(endpoint, options = {}) {
        // Simulate API response with mock data
        const mockData = {
            "/products/": [
                { id: 1, name: "Product 1", price: 10.99, inventory: 10, description: "Description 1", image: "" },
                { id: 2, name: "Product 2", price: 20.99, inventory: 5, description: "Description 2", image: "" },
            ],
            "/cart/view/": JSON.parse(localStorage.getItem("cart") || "[]"),
        };

        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData[endpoint] || []), 500);
        });
    },

    async postData(endpoint, data) {
        if (endpoint === "/cart/add/") {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const existingItem = cart.find((item) => item.product.id === data.product_id);
            if (existingItem) {
                existingItem.quantity += data.quantity;
            } else {
                cart.push({ id: Date.now(), product: { id: data.product_id, ...data }, quantity: data.quantity });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },

    async putData(endpoint, data) {
        if (endpoint.startsWith("/cart/update/")) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const itemId = parseInt(endpoint.split("/").pop());
            const item = cart.find((item) => item.id === itemId);
            if (item) {
                item.quantity = data.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },

    async deleteData(endpoint) {
        if (endpoint.startsWith("/cart/remove/")) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const itemId = parseInt(endpoint.split("/").pop());
            const updatedCart = cart.filter((item) => item.id !== itemId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
<<<<<<< HEAD
    }
=======
    apiBaseUrl: "http://127.0.0.1:3347/user1/default/api",
    csrfToken: document.querySelector('meta[name="csrf-token"]')?.content || '',

    async fetchData(endpoint, options = {}) {
        // Simulate API response with mock data
        const mockData = {
            "/products/": [
                { id: 1, name: "Product 1", price: 10.99, inventory: 10, description: "Description 1", image: "" },
                { id: 2, name: "Product 2", price: 20.99, inventory: 5, description: "Description 2", image: "" },
            ],
            "/cart/view/": JSON.parse(localStorage.getItem("cart") || "[]"),
        };

        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData[endpoint] || []), 500);
        });
    },

    async postData(endpoint, data) {
        if (endpoint === "/cart/add/") {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const existingItem = cart.find((item) => item.product.id === data.product_id);
            if (existingItem) {
                existingItem.quantity += data.quantity;
            } else {
                cart.push({ id: Date.now(), product: { id: data.product_id, ...data }, quantity: data.quantity });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },

    async putData(endpoint, data) {
        if (endpoint.startsWith("/cart/update/")) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const itemId = parseInt(endpoint.split("/").pop());
            const item = cart.find((item) => item.id === itemId);
            if (item) {
                item.quantity = data.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },

    async deleteData(endpoint) {
        if (endpoint.startsWith("/cart/remove/")) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const itemId = parseInt(endpoint.split("/").pop());
            const updatedCart = cart.filter((item) => item.id !== itemId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    },
>>>>>>> b51ff0b (Initial commit)
});
=======
    },
});
>>>>>>> Initial commit
