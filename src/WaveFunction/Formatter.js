import decamelize from 'decamelize';

export default class Formatter {
    testSuiteDescription(TestSuite) {
        let description = decamelize(TestSuite.name, ' ');

        return description.charAt(0).toUpperCase() + description.slice(1);
    }

    testCaseDescription(testCaseName) {
        let description =  decamelize(testCaseName, ' ');

        return description.charAt(0).toUpperCase() + description.slice(1);
    }
}
