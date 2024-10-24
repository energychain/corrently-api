// test.js
const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - PHEV Charge or Fuel...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        console.log('\nGetting PHEV advice...');
        const advice = await client.phevChargeOrFuel.getAdvice({
            zip: '69256',
            electricConsumption: 22, // kWh/100km
            fuelConsumption: 8    // L/100km
        });

        console.log('\nLocation:', advice.location.city, `(${advice.location.zip})`);
        
        console.log('\nFuel Information:');
        console.log('- Station:', advice.fuel.station.name);
        console.log('- Price per liter:', advice.fuel.pricePerLiter.toFixed(2), '€');
        console.log('- Cost per 100km:', advice.fuel.priceFor100km.toFixed(2), '€');
        console.log('- CO2 per 100km:', advice.fuel.co2For100km, 'g');
        
        console.log('\nElectricity Information:');
        console.log('- Price per kWh:', advice.electricity.pricePerKWh.toFixed(2), '€');
        console.log('- Cost per 100km:', advice.electricity.priceFor100km.toFixed(2), '€');
        console.log('- CO2 per 100km:', advice.electricity.co2For100km, 'g');
        
        console.log('\nAdvice:');
        console.log('- Price-based recommendation:', advice.advice.priceBased);
        console.log('- Emission-based recommendation:', advice.advice.emissionBased);
        console.log('- Potential savings:', advice.advice.savings.priceSaved.toFixed(2), '€');
        console.log('- CO2 savings:', advice.advice.savings.co2Saved, 'g');

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