import { Status } from '@cucumber/cucumber';
import fs from 'fs/promises';
const screenshotPath = './tmp/screenshots'

class Screenshots {    
    async deleteScreenshots(){
        try {
            await fs.access(screenshotPath);
            await fs.rm(screenshotPath, { recursive: true, force: true });
        }
        catch (error) {
            if (error.code !== 'ENOENT') {
                console.error(`Error deleting directory "${screenshotPath}":`, error);
            }
        }
    }

    async createSreenshotOnFailure(scenario, context){
        if (scenario.result.status === Status.FAILED) {           
            const date = new Date();
            const hours = String(date.getHours()).padStart(2, '0');
            const mins = String(date.getMinutes()).padStart(2, '0');
            const secs = String(date.getSeconds()).padStart(2, '0');
    
            const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
            const screenshot = await context.page.screenshot(
            { path: `${screenshotPath}/${scenarioName}_${hours}_${mins}_${secs}.png`, fullPage: true }
            );
            await context.attach(screenshot, 'image/png');
            console.log('Successful Screenshot taken')
        }
    }
}

export default Screenshots;