import {expect} from "chai";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

describe("test setup", () => {

    it("promised tests without chai-as-promised work in general", function () {
        let p = new Promise((resolve, reject) => {
                resolve("bim");
            })
                .then((m) => {
                    expect(m).to.equal("bim");
                })
                .catch((m) => {
                    throw new Error("chai test failed");
                })
        ;
        return p;
    });

    it("chai-as-promised tests work in general", () => {
        return expect(Promise.resolve("bim")).to.eventually.equal("bim");
    });

});
