import { expect, request } from '@playwright/test';
import 'dotenv/config';
let requestContext;
let responseBody;
let addedDeviceId;

class RestExample {
    async getDeviceById(id){
        requestContext = await request.newContext({ baseURL: process.env.BASE_URL });
        const response = await requestContext.get(`${process.env.BASE_URL}/objects/${id}`);
        expect(response.status()).toBe(200);
        console.log('GET = ' + await response.text());
        
        responseBody = await response.json();
        return await responseBody;
    }

    async postDevice(payload){
        requestContext = await request.newContext({ baseURL: process.env.BASE_URL });
        const response = await requestContext.post(`${process.env.BASE_URL}/objects`, { data: payload }); 
        expect(response.status()).toBe(200);
        console.log('POST = ' + await response.text());

        responseBody = await response.json();
        addedDeviceId = responseBody.id;        
        return await responseBody;
    }

    async putDevice(payload){
        requestContext = await request.newContext({ baseURL: process.env.BASE_URL });
        const response = await requestContext.put(`${process.env.BASE_URL}/objects/${addedDeviceId}`, {data: payload}); 
        expect(response.status()).toBe(200);
        console.log('PUT = ' + await response.text());
    
        responseBody = await response.json();
        return await responseBody;
    }

    async patchDevice(payload){
        requestContext = await request.newContext({ baseURL: process.env.BASE_URL });
        const response = await requestContext.patch(`${process.env.BASE_URL}/objects/${addedDeviceId}`, {data: payload}); 
        expect(response.status()).toBe(200);
        console.log('PATCH = ' + await response.text());
    
        responseBody = await response.json();
        return await responseBody;
    }

    async deleteDevice(){
        requestContext = await request.newContext({ baseURL: process.env.BASE_URL });
        const response = await requestContext.delete(`${process.env.BASE_URL}/objects/${addedDeviceId}`); 
        expect(response.status()).toBe(200);
        console.log('DELETE = ' + await response.text());
    
        responseBody = await response.json();
        return await responseBody;
    }

    async verifyDeviceName(expectedDeviceName){
        expect(responseBody.name).toContain(expectedDeviceName);
    }

    async verifyDeviceValues(name, data){
        expect(responseBody.name).toEqual(name);
        expect(responseBody.data).toEqual(data);
    }

    async dispose() {
        return await requestContext.dispose();
    }
}

export default RestExample;