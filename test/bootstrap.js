import Runner from "../src/WaveFunction/Runner";
import Formatter from "../src/WaveFunction/Formatter";
import MyTestSuite from "./MyTestSuite";
import MyTestSuite2 from "./MyTestSuite2";

import {assert} from 'chai';

let runner = new Runner()
    .useFormatter(new Formatter())
;

runner
    .load(MyTestSuite)
    .load(MyTestSuite2)
;

runner.run();
