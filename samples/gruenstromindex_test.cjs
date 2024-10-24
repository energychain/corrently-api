// test.js
const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - GrünstromIndex...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // Test basic prediction
        console.log('\n1. Getting GSI prediction for location...');
        const prediction = await client.gsi.getPrediction('69256');
        
        console.log('\nLocation:', prediction.location.city, `(${prediction.location.zip})`);
        console.log('Data signed by:', prediction.signee);
        
        // Display first forecast entry
        const firstForecast = prediction.forecast[0];
        console.log('\nCurrent/Next Period:');
        console.log('- Time:', new Date(firstForecast.timeStamp).toLocaleString());
        console.log('- GSI Score:', firstForecast.gsi);
        console.log('- Renewable Energy:', firstForecast.eevalue + '%');
        console.log('  • Wind:', firstForecast.ewind + '%');
        console.log('  • Solar:', firstForecast.esolar + '%');
        console.log('- CO2 Emissions:');
        console.log('  • Standard:', firstForecast.co2_g_standard, 'g/kWh');
        console.log('  • Green Energy:', firstForecast.co2_g_oekostrom, 'g/kWh');
        console.log('- Energy Price:', firstForecast.energyprice, '€/kWh');

        // Test helper method for finding best green period
        console.log('\n2. Finding best time for energy consumption in next 24h...');
        const bestPeriod = await client.gsi.findBestGreenPeriod('69256');
        
        console.log('\nBest Period for Energy Consumption:');
        console.log('- Start:', bestPeriod.period.start.toLocaleString());
        console.log('- End:', bestPeriod.period.end.toLocaleString());
        console.log('- GSI Score:', bestPeriod.gsi);
        console.log('- Renewable Energy:', bestPeriod.renewableEnergy.total + '%');
        console.log('  • Wind:', bestPeriod.renewableEnergy.wind + '%');
        console.log('  • Solar:', bestPeriod.renewableEnergy.solar + '%');
        console.log('- Energy Price:', bestPeriod.energyPrice, '€/kWh');
        console.log('- CO2 Savings:', bestPeriod.co2.standard - bestPeriod.co2.green, 'g/kWh');

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