import FusionTestSuite from "./FusionTestSuite";
import {HttpKernel, ConsoleKernel} from "Fusion";

/**
 * The application test suite
 */
export default class ApplicationTestSuite extends FusionTestSuite {

    async fusionActivated(context) {
        this.httpKernel     = await this.container.make(HttpKernel);
        this.consoleKernel  = await this.container.make(ConsoleKernel);
    }

    async dispatchHttp(request) {

        this.httpKernel(request);
    }

    async dispatchConsole(argv) {

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
