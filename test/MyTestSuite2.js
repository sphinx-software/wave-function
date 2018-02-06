import {testCase, testSuite} from "../src/WaveFunction/decorators";
import {TestSuite} from "../src/WaveFunction/TestSuite";
import {assert} from "chai";

@testSuite()
export default class MyTestSuite2 extends TestSuite {

    assert = assert;

    @testCase()
    testIfFooIsBar() {
        this.assert.equal('Foobar', 'Foobar');
    }
}
