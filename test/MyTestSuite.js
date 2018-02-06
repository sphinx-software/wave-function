import {testCase, testSuite} from "../src/WaveFunction/decorators";
import {assert} from "chai";
import TestSuite from "../src/WaveFunction/TestSuite";

@testSuite()
export default class MyTestSuite extends TestSuite {

    @testCase()
    async testTrueIsOk() {
        assert(true);
    }

}
