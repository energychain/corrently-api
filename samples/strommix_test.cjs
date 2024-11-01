const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - Strommix...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // Test with different time periods
        const periods = [
            { name: 'Last 7 Days', params: { period: 'last7days' } },
            { name: 'Last Month', params: { period: 'lastmonth' } },
            { 
                name: 'Custom Period', 
                params: { 
                    from: '2024-01-01', 
                    to: '2024-01-31' 
                } 
            }
        ];

        for (const period of periods) {
            console.log(`\nTesting ${period.name}:`);
            
            // Get energy mix data
            const mixData = await client.strommix.getEnergyMix(period.params);
            
            // Analyze the data
            const analysis = client.strommix.analyzeEnergyMix(mixData);
            
            console.log('\nPeriod Information:');
            console.log('- Start:', analysis.period.start.toLocaleString());
            console.log('- End:', analysis.period.end.toLocaleString());
            
            console.log('\nProduction Summary:');
            console.log('- Total Production:', (analysis.summary.totalProduction / 1000000).toFixed(2), 'GWh');
            
            console.log('\nDominant Sources:');
            analysis.summary.dominantSources.forEach((source, index) => {
                console.log(`${index + 1}. ${source.name}: ${source.percentage.toFixed(1)}%`);
            });

            console.log('\nEnergy Distribution:');
            console.log('Renewable Sources:', analysis.sustainability.renewablePercentage.toFixed(1) + '%');
            console.log('- Details:');
            analysis.distribution.renewable.sources.forEach(source => {
                console.log(`  • ${source.name}: ${source.percentage.toFixed(1)}%`);
            });

            console.log('\nFossil Sources:', analysis.sustainability.fossilPercentage.toFixed(1) + '%');
            console.log('- Details:');
            analysis.distribution.fossil.sources.forEach(source => {
                console.log(`  • ${source.name}: ${source.percentage.toFixed(1)}%`);
            });

            console.log('\nSustainability Metrics:');
            console.log('- Carbon Intensity:', Math.round(analysis.sustainability.carbonIntensity), 'gCO2/kWh');
            console.log('- Renewable Share:', analysis.sustainability.renewablePercentage.toFixed(1) + '%');
            
            console.log('\n' + '-'.repeat(50));
        }

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