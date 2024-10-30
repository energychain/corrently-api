// test.js
const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - CO2 Advisor...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // Test basic advisory information
        console.log('\n1. Getting CO2 advisory...');
        const advisory = await client.co2advisor.getAdvice('69256');
        
        console.log('\nLocation:', advisory.location.city, `(${advisory.location.zip})`);
        
        console.log('\nThresholds:');
        console.log('- Green:', advisory.tresholds.green.low, '-', advisory.tresholds.green.high, 'g/kWh');
        console.log('- Yellow:', advisory.tresholds.yellow.low, '-', advisory.tresholds.yellow.high, 'g/kWh');
        console.log('- Red:', advisory.tresholds.red.low, '-', advisory.tresholds.red.high, 'g/kWh');

        console.log('\nRecommendations:');
        console.log('- Green:', advisory.info.green);
        console.log('- Yellow:', advisory.info.yellow);
        console.log('- Red:', advisory.info.red);

        // Test consumption period analysis
        console.log('\n2. Analyzing consumption periods...');
        const analysis = await client.co2advisor.analyzeConsumptionPeriods('69256');
        
        console.log('\nPeriod Distribution:');
        console.log('- Green Periods:', analysis.statistics.greenPeriods);
        console.log('- Yellow Periods:', analysis.statistics.yellowPeriods);
        console.log('- Red Periods:', analysis.statistics.redPeriods);

        console.log('\nCO2 Statistics:');
        console.log('- Average:', analysis.statistics.averageCO2.toFixed(1), 'g/kWh');
        console.log('- Lowest:', analysis.statistics.lowestCO2, 'g/kWh');
        console.log('- Highest:', analysis.statistics.highestCO2, 'g/kWh');

        if (analysis.recommendations.bestConsumptionWindow) {
            console.log('\nBest Consumption Window:');
            console.log('- Start:', analysis.recommendations.bestConsumptionWindow.start.toLocaleString());
            console.log('- End:', analysis.recommendations.bestConsumptionWindow.end.toLocaleString());
            console.log('- Average CO2:', analysis.recommendations.bestConsumptionWindow.averageCO2.toFixed(1), 'g/kWh');
        }

        console.log('\nNext 3 Hours Forecast:');
        analysis.periodsByHour.slice(0, 3).forEach(period => {
            console.log(`- ${period.time.toLocaleString()}`);
            console.log(`  CO2: ${period.co2} g/kWh (${period.advice.toUpperCase()})`);
            console.log(`  Relative Level: ${period.relativeLevel}%`);
        });

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        if (error.status) {
            console.error('Status:', error.status);
        }
        if (error.data) {
            console.error('Error data:', error.data);
        }
    }
}

// Run the test
runTest().then(() => {
    console.log('\nTest completed!');
}).catch(error => {
    console.error('\nUnexpected error:', error);
});