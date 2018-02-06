export function testSuite(description = null) {
    return Reflect.metadata('wavefunction.testsuite', description);
}

export function testCase(description = null) {
    return function (testSuite, testCase) {
        let metadata = Reflect.getMetadata('wavefunction.testsuite.testcases', testSuite.constructor) || [];

        metadata.push({testCase: testCase, description: description});

        Reflect.defineMetadata('wavefunction.testsuite.testcases', metadata, testSuite.constructor);
    }
}
