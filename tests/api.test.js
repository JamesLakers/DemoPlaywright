import { test, expect } from '@playwright/test';
import { RestExample } from '../services/restExample.cjs';
let restExample;

const payload = {
    name: 'Apple iPhone 14 Pro',
    data: {
        year: 2022,
        price: 799.99,
        capacity_gb: '256',
        color: 'black'
    }
}

test.beforeEach( () => {
    restExample = new RestExample();
});

test('GET device by id', async ({ request }) => {
    const device = await restExample.getDeviceById(request, '9');
    console.log(device);
    expect(device.name).toContain('Beats Studio3 Wireless');
});

test('POST new device and PUT an update then DELETE', async ({ request }) => {
    const device = await restExample.postDevice(request, payload);
    console.log(device);
    expect(device.name).toBe(payload.name);
    
    const payloadUpdate = {        
        name: 'Apple iPhone 16 Pro Max',
        data: {
            year: 2024,
            price: 1299.99,
            capacity_gb: '512',
            color: 'silver'
        }         
    };
    const deviceUpdate = await restExample.putDevice(request, device.id, payloadUpdate);
    console.log(deviceUpdate);
    expect(deviceUpdate.name).toBe(payloadUpdate.name);
    expect(deviceUpdate.data.year).toBe(payloadUpdate.data.year);
    expect(deviceUpdate.data.price).toBe(payloadUpdate.data.price);
    expect(deviceUpdate.data.capacity_gb).toBe(payloadUpdate.data.capacity_gb);
    expect(deviceUpdate.data.color).toBe(payloadUpdate.data.color);
    
    const deviceDelete = await restExample.deleteDevice(request, device.id);
    console.log(deviceDelete.message);
    expect(deviceDelete.message).toContain(`${device.id} has been deleted`);
});

test('POST new device and PATCH update to device name only then DELETE', async ({ request }) => {
    const device = await restExample.postDevice(request, payload);
    console.log(device);
    expect(device.name).toBe(payload.name);
    
    const payloadUpdate = {        
        name: 'Apple iPhone 16 Pro Max',       
    };
    const deviceUpdate = await restExample.patchDevice(request, device.id, payloadUpdate);
    console.log(deviceUpdate);
    expect(deviceUpdate.name).toBe(payloadUpdate.name);
    expect(deviceUpdate.data.year).toBe(payload.data.year);
    expect(deviceUpdate.data.price).toBe(payload.data.price);
    expect(deviceUpdate.data.capacity_gb).toBe(payload.data.capacity_gb);
    expect(deviceUpdate.data.color).toBe(payload.data.color);
    
    const deviceDelete = await restExample.deleteDevice(request, device.id);
    console.log(deviceDelete.message);
    expect(deviceDelete.message).toContain(`${device.id} has been deleted`);
});