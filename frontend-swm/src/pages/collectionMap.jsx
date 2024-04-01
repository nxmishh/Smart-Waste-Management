import GarbageCollectionMap from '../components/garbageCollectionMap';
import SampleData1 from '../components/sampleData';

export default function CollectionMap() {
    const result = SampleData1();
    console.log('1here',result)
    return (
        <div>
            < GarbageCollectionMap activeLocation={result} />
        </div>
    )
}