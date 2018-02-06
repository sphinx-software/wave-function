import {testCase, testSuite} from "../src/WaveFunction/decorators";
import {TestSuite} from "../src/WaveFunction/TestSuite";

@testSuite()
export default class MyTestSuite extends TestSuite {

    @testCase()
    async testTrueIsOk(context) {
        this.assert(true);
    }

    @testCase()
    async testFalseIsOk(context) {
        this.assert(false);
    }
}
