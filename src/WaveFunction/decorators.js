export function before() {

}

export function beforEach() {

}

export function after() {

}

export function afterEach() {

}

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

export function equals() {

}

export function depends(OtherTestSuite) {

}
