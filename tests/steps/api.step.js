import { Given, When, Then } from '@cucumber/cucumber';
import deviceAdd from '../data/deviceAdd.json' assert { type: 'json' };
import deviceReplace from '../data/deviceReplace.json' assert { type: 'json' };

Given('a request is made to get the device details using id {string} is successful', async function (id) {
    await this.restExample.getDeviceById(id);
});

Then('the device name will be {string}', async function (deviceName) {
    await this.restExample.verifyDeviceName(deviceName);
});


Given('a new device is added successfully', async function () {
    await this.restExample.postDevice(deviceAdd);
});


When('a request to replace the added device is successful', async function () {
    await this.restExample.putDevice(deviceReplace);
});

Then('the device will have the correct details it was replaced with', async function () {
    await this.restExample.verifyDeviceValues(deviceReplace.name, deviceReplace.data);
});


When('a request to update the added device is successful', async function () {
    await this.restExample.patchDevice({name: deviceReplace.name});
});

Then('the device will have the correct details it was updated with', async function () {
    await this.restExample.verifyDeviceValues(deviceReplace.name, deviceAdd.data);
});


Then('the device is deleted to cleanup', async function () {
    await this.restExample.deleteDevice();
});
