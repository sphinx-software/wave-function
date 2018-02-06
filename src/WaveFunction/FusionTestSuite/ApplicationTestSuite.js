import FusionTestSuite from "./FusionTestSuite";
import {HttpKernel, HttpRouter} from "Fusion";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

/**
 * The application test suite
 */
export default class ApplicationTestSuite extends FusionTestSuite {

    chai = chai;

    async fusionActivated(context) {
        this.httpKernel = await this.container.make(HttpKernel);
        this.httpRouter = await this.container.make(HttpRouter);
        this.httpKernel.use(this.httpRouter.routes()).use(this.httpRouter.allowedMethods());
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
