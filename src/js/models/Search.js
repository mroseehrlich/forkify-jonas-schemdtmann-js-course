/*
USING FORKIFY-API INSTEAD OF FOOD@FORK API

1) No API key is required;

2) No proxy is required;

3) The URL is forkify-api.herokuapp.com (click for basic documentation).

API url for Search.js
const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

API url for Recipe.js
const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
*/
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error) {
            alert(error);
        }
        
    }
};