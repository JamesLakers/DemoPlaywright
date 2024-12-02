import reporter from 'cucumber-html-reporter';
import 'dotenv/config';

const options = {
    theme: 'bootstrap',
    jsonFile: 'featureReport.json',
    output: 'featureReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "BROWSER": process.env.BROWSER,
        "PLATFORM": process.platform,
        "BASE_URL": process.env.BASE_URL
    }
};

reporter.generate(options);
