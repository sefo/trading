import Vue from 'vue'

export default {

    getCompanies() {
        return fetch('https://api.iextrading.com/1.0/ref-data/symbols', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
    },
    getStock(company, duration) {
        return fetch(`https://api.iextrading.com/1.0/stock/${company}/chart/${duration}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
    }
}