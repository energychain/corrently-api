const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - CO2 Meter...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // 1. Create a new CO2 meter
        console.log('\n1. Creating new CO2 meter...');
        const newMeter = await client.co2meter.createOrUpdate({
            reading: 1000,
            zip: '69256'
        });
        console.log('✓ New meter created:', newMeter.meterId);

        // 2. Get the meter reading
        console.log('\n2. Retrieving meter reading...');
        const reading = await client.co2meter.getReading(newMeter.meterId);
        console.log('✓ Current CO2 value:', reading.co2, 'g');
        console.log('✓ Current reading:', reading.reading, 'Wh');

        // 3. Update the meter reading
        console.log('\n3. Updating meter reading...');
        const updatedMeter = await client.co2meter.createOrUpdate({
            meterId: newMeter.meterId,
            reading: 1500
        });
        console.log('✓ Updated CO2 value:', updatedMeter.co2, 'g');
        console.log('✓ Updated reading:', updatedMeter.reading, 'Wh');

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