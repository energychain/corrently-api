// test.js
const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - Renewable Energy Dispatch...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // Test basic dispatch information
        console.log('\n1. Getting dispatch information...');
        const dispatch = await client.dispatch.getDispatch('69256');
        
        console.log('\nLocation:', dispatch.center.city, `(${dispatch.center.zip})`);
        console.log('Coordinates:', dispatch.center.coordinates.join(', '));
        
        console.log('\nCurrent Energy Mix:');
        Object.entries(dispatch.postmix).forEach(([source, value]) => {
            console.log(`- ${source}: ${(value * 100).toFixed(2)}%`);
        });

        // Test energy mix analysis
        console.log('\n2. Analyzing energy mix and dispatch patterns...');
        const analysis = await client.dispatch.analyzeEnergyMix('69256');
        
        console.log('\nMain Energy Sources:');
        analysis.distribution.mainSources.forEach(source => {
            console.log(`- ${source.location}: ${source.percentage}%`);
        });

        console.log('\nMain Energy Destinations:');
        analysis.distribution.mainDestinations.forEach(dest => {
            console.log(`- ${dest.location}: ${dest.percentage}%`);
        });

        console.log('\nEnergy Source Changes:');
        Object.entries(analysis.energyMix).forEach(([source, data]) => {
            console.log(`- ${source}:`);
            console.log(`  Current: ${data.current.toFixed(2)}%`);
            console.log(`  Previous: ${data.previous.toFixed(2)}%`);
            console.log(`  Change: ${data.change}%`);
        });

        console.log('\nAverage Distribution Distance:', analysis.distribution.averageDistance, 'km');
        
        console.log('\nTimeframe:');
        console.log('- Start:', analysis.timeframe.start.toLocaleString());
        console.log('- End:', analysis.timeframe.end.toLocaleString());

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