import ExecutionContext from "./ExecutionContext";

export default class Runner {

    formatter = null;

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

    useAssertion(assertionLibrary) {
        this.assertionLibrary = assertionLibrary;
        return this;
    }

    load(TestSuite) {
        this.tests.push(new ExecutionContext(TestSuite, this.formatter));
        return this;
    }

    run() {
        this.tests.forEach(contexts => {
            contexts.execute(this.assertionLibrary);
        })
    }
}
