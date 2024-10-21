const { expect } = require('@playwright/test');

const baseUrl = 'https://api.restful-api.dev';

exports.RestExample = class RestExample {

    async getDeviceById(request, id){
        const response = await request.get(`${baseUrl}/objects/${id}`); 
        expect(response.status()).toBe(200);

        return await response.json();
    }

    async postDevice(request, payload){
        const response = await request.post(`${baseUrl}/objects`, { data: payload }); 
        expect(response.status()).toBe(200);
    
        return await response.json();
    }

    async putDevice(request, id, payload){
        const response = await request.put(`${baseUrl}/objects/${id}`, {data: payload}); 
        expect(response.status()).toBe(200);
    
        return await response.json();
    }

    async patchDevice(request, id, payload){
        const response = await request.patch(`${baseUrl}/objects/${id}`, {data: payload}); 
        expect(response.status()).toBe(200);
    
        return await response.json();
    }

    async deleteDevice(request, id){
        const response = await request.delete(`${baseUrl}/objects/${id}`); 
        expect(response.status()).toBe(200);
    
        return await response.json();
    }
}