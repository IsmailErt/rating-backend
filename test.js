const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api/ratings';

async function testRatingAPI() {
    console.log('Testing Rating API...\n');

    try {
        console.log('Test 1: Adding valid rating (3)');
        const response1 = await axios.post(BASE_URL, {
            moduleId: 1,
            rating: 3
        });
        console.log('✅ Success:', response1.data);
        const ratingId = response1.data.rating.id;

        console.log('\nTest 2: Adding invalid rating (6)');
        try {
            await axios.post(BASE_URL, {
                moduleId: 1,
                rating: 6
            });
        } catch (error) {
            console.log('✅ Correctly rejected:', error.response.data);
        }

        console.log('\nTest 3: Adding invalid rating (-1)');
        try {
            await axios.post(BASE_URL, {
                moduleId: 1,
                rating: -1
            });
        } catch (error) {
            console.log('✅ Correctly rejected:', error.response.data);
        }

        console.log('\nTest 4: Missing moduleId');
        try {
            await axios.post(BASE_URL, {
                rating: 4
            });
        } catch (error) {
            console.log('✅ Correctly rejected:', error.response.data);
        }

        console.log('\nTest 5: Getting all ratings');
        const response5 = await axios.get(BASE_URL);
        console.log('✅ Success:', response5.data);

        console.log('\nTest 6: Getting rating by ID');
        const response6 = await axios.get(`${BASE_URL}/${ratingId}`);
        console.log('✅ Success:', response6.data);

        console.log('\nTest 7: Updating rating');
        const response7 = await axios.put(`${BASE_URL}/${ratingId}`, {
            moduleId: 2,
            rating: 5
        });
        console.log('✅ Success:', response7.data);

        console.log('\nTest 8: Deleting rating');
        const response8 = await axios.delete(`${BASE_URL}/${ratingId}`);
        console.log('✅ Success:', response8.data);

    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
}

testRatingAPI(); 