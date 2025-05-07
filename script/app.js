Alpine.store("settings", {
    apiBaseUrl: "http://172.17.100.14:3347/default/api",
    appName: "contact application",
});

Alpine.store("exam", {
    apiExamBaseUrl: "http://172.17.100.14:3347/default/exam",
    appName: "exam",
});

Alpine.store("GlobalVariable", {
    //contacts:Alpine.reactive([]),
    contacts:Alpine.reactive({ 
        data: [], 
        total: 0,         
    }),
    queryParams: Alpine.reactive({}), // Keep query parameters reactive
});

Alpine.store("GlobalFunctions", { 
    findContactById(id) {        
        let contacts = Alpine.store("GlobalVariable").contacts.data; // Ensure `data` is always an array
        let foundContact = contacts.find(c => Number(c.id) === Number(id));
        
        if (foundContact) {
            return {...foundContact }; // Creates a new object to trigger reactivity
        } else {
            return {}; // Returns an empty object if not found
        }
        
    }
});

Alpine.store("ecommerce", {
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
});