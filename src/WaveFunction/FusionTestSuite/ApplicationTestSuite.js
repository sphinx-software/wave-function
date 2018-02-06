import FusionTestSuite from "./FusionTestSuite";
import {HttpKernel, ConsoleKernel} from "Fusion";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

/**
 * The application test suite
 */
export default class ApplicationTestSuite extends FusionTestSuite {

    chai = chai;

    async fusionActivated(context) {
        this.httpKernel     = await this.container.make(HttpKernel);
    }

    dispatchHttp() {
        return chai.request(this.httpKernel.callback());
    }

    /**
     * @abstract
     */
    manifest() {

    }

    /**
     * @abstract
     */
    config() {
    }
}
