
export default function SampleData1() {
    const sampleData1 = [
        {
            _id: '1',
            level1: '60',
            level2: '30',
            level3: '40',
            level4: '20',
            location: 'Baner',
            lastActive: '17'

        },
        {
            _id: '2',
            level1: '70',
            level2: '30',
            level3: '40',
            level4: '10',
            location: 'Wakad',
            lastActive: '18'
        },
        {
            _id: '3',
            level1: '30',
            level2: '30',
            level3: '40',
            level4: '20',
            location: 'Warje',
            lastActive: '12'
        },
        {
            _id: '4',
            level1: '20',
            level2: '30',
            level3: '40',
            level4: '10',
            location: 'Katraj',
            lastActive: '7'
        },
        {
            _id: '5',
            level1: '30',
            level2: '30',
            level3: '10',
            level4: '10',
            location: 'Deccan',
            lastActive: '19'
        },
        {
            _id: '6',
            level1: '20',
            level2: '30',
            level3: '70',
            level4: '50',
            location: 'Pimpri',
            lastActive: '18'

        },
        {
            _id: '7',
            level1: '80',
            level2: '20',
            level3: '60',
            level4: '40',
            location: 'Ravet',
            lastActive: '11'
        },
        {
            _id: '8',
            level1: '50',
            level2: '50',
            level3: '20',
            level4: '10',
            location: 'Hadapsar',
            lastActive: '9'
        },
        {
            _id: '9',
            level1: '10',
            level2: '10',
            level3: '60',
            level4: '20',
            location: 'Karadi',
            lastActive: '1'
        },
        {
            _id: '10',
            level1: '50',
            level2: '50',
            level3: '20',
            level4: '30',
            location: 'Kothrud',
            lastActive: '5'
        },
    ]

    function checkThreshold(data, threshold) {
        return data.map(item => {
            const { level1, level2, level3, level4, lastActive } = item;
            const exceedThreshold = parseInt(level1) > threshold || parseInt(level2) > threshold || parseInt(level3) > threshold || parseInt(level4) > threshold;
            const isActive = parseInt(lastActive) > 15;
    
            return exceedThreshold || isActive ? 1 : 0;
        });
    }
    
    const threshold = 65;
    const result = checkThreshold(sampleData1, threshold);
    console.log('sd',result);

   return result;
}