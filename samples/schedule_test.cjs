const CorrentlyClient = require('../corrently-client.cjs');

async function runTest() {
    console.log('Starting Corrently API Test - Energy Schedule...');
    
    const client = new CorrentlyClient({
        baseUrl: 'https://api.corrently.io'
    });

    try {
        // 1. Create a new schedule
        console.log('\n1. Creating new energy schedule...');
        const newSchedule = await client.schedule.createSchedule({
            zip: '69168',
            requirements: {
                law: 'price',
                activeHours: 8,
                energyDemand: 55.0,
                maxLoad: 11000,
                avgLoad: 7200,
                consecutiveHours: true
            },
            coverageHours: 24
        });
        
        console.log('✓ Schedule created with ID:', newSchedule.scheduleId);

        // 2. Get schedule details
        console.log('\n2. Retrieving schedule details...');
        const schedule = await client.schedule.getSchedule(newSchedule.scheduleId);
        
        // 3. Analyze the schedule
        console.log('\n3. Analyzing schedule...');
        const analysis = client.schedule.analyzeSchedule(schedule);
        
        console.log('\nSchedule Overview:');
        console.log('- Status:', analysis.overview.status);
        console.log('- Optimization Law:', analysis.overview.optimizationLaw);
        console.log('- Active Slots:', analysis.overview.activeSlots);
        console.log('- Utilization:', analysis.overview.utilization);
        
        console.log('\nOptimization Metrics:');
        console.log('Average Metrics:');
        Object.entries(analysis.optimization.averageMetrics).forEach(([key, value]) => {
            console.log(`- ${key}: ${value.toFixed(2)}`);
        });

        if (analysis.optimization.bestPeriod) {
            console.log('\nBest Period:');
            console.log('- Start:', new Date(analysis.optimization.bestPeriod.startTime).toLocaleString());
            console.log('- End:', new Date(analysis.optimization.bestPeriod.endTime).toLocaleString());
            console.log('- Expected Load:', analysis.optimization.bestPeriod.expectedLoad, 'W');
            Object.entries(analysis.optimization.bestPeriod.metrics).forEach(([key, value]) => {
                console.log(`- ${key}: ${value}`);
            });
        }

        // 4. Update consumption
        console.log('\n4. Updating consumption...');
        const updatedSchedule = await client.schedule.updateConsumption(
            newSchedule.scheduleId,
            {
                currentEnergy: 1.2,
                currentPower: 7200,
                timeSlots: [{
                    startTime: new Date().toISOString(),
                    endTime: new Date(Date.now() + 3600000).toISOString(),
                    energy: 1.2,
                    averagePower: 7200
                }]
            }
        );
        
        console.log('✓ Consumption updated');
        console.log('- Completed Energy:', updatedSchedule.progress.completedEnergy, 'kWh');
        console.log('- Completion:', updatedSchedule.progress.completionPercentage);

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