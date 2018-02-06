import decamelize from 'decamelize';

/**
 * Helper for formatting the test report
 */
export default class Formatter {

    /**
     *
     * @param TestSuite
     * @return {string}
     */
    testSuiteDescription(TestSuite) {
        let description = decamelize(TestSuite.name, ' ');

        return description.charAt(0).toUpperCase() + description.slice(1);
    }

    /**
     * 
     * @param testCaseName
     * @return {string}
     */
    testCaseDescription(testCaseName) {
        let description =  decamelize(testCaseName, ' ');

        return description.charAt(0).toUpperCase() + description.slice(1);
    }
}
