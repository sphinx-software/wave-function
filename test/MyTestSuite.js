import {testCase, testSuite} from "../src/WaveFunction/decorators";
import FusionTestSuite from "../src/WaveFunction/FusionTestSuite/FusionTestSuite";
import {assert} from "chai";

@testSuite()
export default class MyTestSuite extends FusionTestSuite {

    @testCase()
    async testTrueIsOk(context) {
        assert(true);
    }

    @testCase()
    async testFalseIsOk(context) {
        assert(true);
    }

    manifest() {
    }

    config() {
    }
}
