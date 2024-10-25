// test.js
const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - Marketdata...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // Test basic price information
        console.log('\n1. Getting price information...');
        const prices = await client.marketdata.getPrices('10117');
        
        console.log('\nLocation:', prices.data[0].localcell);
        console.log('Timezone:', prices.timezone);
        
        const currentPeriod = prices.data[0];
        console.log('\nCurrent Period:');
        console.log('- Time:', new Date(currentPeriod.start_timestamp).toLocaleString());
        console.log('- Market Price:', currentPeriod.marketprice, currentPeriod.unit);
        console.log('- Local Price:', currentPeriod.localprice, currentPeriod.unit);

        // Test price analysis
        console.log('\n2. Analyzing price data...');
        const analysis = await client.marketdata.analyzePrices('10117');
        
        console.log('\nPrice Summary:');
        console.log('Average Market Price:', analysis.summary.averagePrices.market, 'EUR/MWh');
        console.log('Average Local Price:', analysis.summary.averagePrices.local, 'EUR/MWh');
        console.log('Average Price Difference:', analysis.summary.averagePrices.difference, 'EUR/MWh');

        console.log('\nBest Pricing Periods:');
        analysis.summary.bestPeriods.forEach((period, index) => {
            console.log(`${index + 1}. ${period.time.toLocaleString()}`);
            console.log(`   Price: ${period.price} EUR/MWh`);
            console.log(`   Savings vs Average: ${period.savings} EUR/MWh`);
        });

        if (analysis.negativePrices.count > 0) {
            console.log('\nNegative Price Periods:', analysis.negativePrices.count);
            analysis.negativePrices.periods.forEach(period => {
                console.log(`- ${period.time.toLocaleString()}: ${period.price} EUR/MWh`);
            });
        }

        console.log('\nPrice Spread Analysis:');
        console.log('Maximum Price Spread:', analysis.priceSpread.maxSpread, 'EUR/MWh');

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