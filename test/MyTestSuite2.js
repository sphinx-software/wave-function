import {testCase, testSuite} from "../src/WaveFunction/decorators";
import {TestSuite} from "../src/WaveFunction/TestSuite";

@testSuite()
export default class MyTestSuite2 extends TestSuite {

    @testCase()
    testIfFooIsBar() {
        this.assert.equal('Foobar', 'Bar');
    }
}
