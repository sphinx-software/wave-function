import chalk from 'chalk';

export default class ExecutionContext {

    caseResults = {};

    constructor(TestSuite, formatter) {
        this.TestSuite = TestSuite;
        this.formatter = formatter;
    }

    execute(assertionLibrary) {
        let thisRunner = this;
        let TestSuite = this.TestSuite;
        let testCases = Reflect.getMetadata('wavefunction.testsuite.testcases', TestSuite) || [];
        let testSuite = new TestSuite(assertionLibrary);

        describe(thisRunner.resolveTestSuiteDescription(TestSuite), function () {

            afterEach(async function () {
                thisRunner.caseResults[this.currentCase.testCase] = this.currentTest.state;
                await testSuite.afterEach(this);
            });

            beforeEach(async function () {
                await testSuite.beforeEach(this);
            });

            before(async function () {
                await testSuite.before(this);
            });

            after(async function () {
                await testSuite.after(this);
            });

            testCases.forEach(testCaseMetadata => {
                it(
                    thisRunner.resolveTestCaseDescription(TestSuite, testCaseMetadata),
                    async function () {
                        this.currentCase = testCaseMetadata;
                        await testSuite[testCaseMetadata.testCase](this); // this is the context of mocha
                    }
                )
            });
        })
    }

    resolveTestCaseDescription(TestSuite, testCaseMetadata) {
        return testCaseMetadata.description || this.formatter.testCaseDescription(testCaseMetadata.testCase)
    }

    resolveTestSuiteDescription(TestSuite) {
        return chalk.cyan(
            Reflect.getMetadata('wavefunction.testsuite', TestSuite) ||
            this.formatter.testSuiteDescription(TestSuite)
        );
    }
}
