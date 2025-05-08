Alpine.store("settings", {
    apiBaseUrl: "http://172.17.100.14:3347/user1/default/api",
    appName: "contact application",
});

Alpine.store("exam", {
    apiExamBaseUrl: "http://172.17.100.14:3347/user1/default/exam",
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
    apiBaseUrl: "http://172.17.100.14:3347/api",
    csrfToken: document.querySelector('meta[name="csrf-token"]')?.content || '',
    
    // Helper methods
    async fetchData(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.csrfToken
                },
                ...options
            });
            
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    async postData(endpoint, data) {
        return this.fetchData(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    
    async putData(endpoint, data) {
        return this.fetchData(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    
    async deleteData(endpoint) {
        return this.fetchData(endpoint, {
            method: 'DELETE'
        });
    },
    
    async uploadFile(endpoint, formData) {
        try {
            const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': this.csrfToken
                },
                body: formData
            });
            
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('File Upload Error:', error);
            throw error;
        }
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