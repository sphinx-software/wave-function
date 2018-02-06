import ExecutionContext from "./ExecutionContext";
import lodash from "lodash";

/**
 *
 */
export default class Runner {

    /**
     *
     * @type {null}
     */
    formatter = null;

    /**
     *
     * @type {Array}
     */
    tests     = [];

    /**
     *
     * @param formatter
     * @return {Runner}
     */
    useFormatter(formatter) {
        this.formatter = formatter;
        return this;
    }

    /**
     * Load a test suite
     *
     * @param TestSuite
     * @return {Runner}
     */
    load(TestSuite) {
        this.tests.push(new ExecutionContext(TestSuite, this.formatter));
        return this;
    }

    /**
     * Load many test suites
     *
     * @param testSuites
     * @return {Runner}
     */
    loadSuites(testSuites) {
        lodash.forIn(testSuites, TestSuite => this.load(TestSuite));
        return this;
    }

    /**
     * Run the loaded test suites
     *
     */
    run() {
        this.tests.forEach(contexts => {
            contexts.execute();
        })
    }
}
