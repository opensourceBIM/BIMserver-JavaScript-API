import {expect} from "chai";
import {BimServerClient} from "../../bimserverclient";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

describe("BimServerClient", () => {

    it("should return server information", function () {
        return new Promise((resolve, reject) => {

            let bimserverapi = new BimServerClient("http://localhost:8888");

            bimserverapi.call("AdminInterface", "getSystemInfo", {}, (data) => {
                resolve(data);
            }, (m) => {
                throw new Error(JSON.stringify(m));
            });

        }).then((m) => {
                expect(JSON.stringify(m)).to.contain("cpucores");
        }).catch((m) => {
                throw new Error(JSON.stringify(m));
        });
    });

    it("should throw invalid username/password combination on wrong credentials", () => {

        return new Promise((resolve, reject) => {

            let bimserverapi = new BimServerClient("http://localhost:8888");

            bimserverapi.login("derk@muenchhausen.de", "wrong", (data) => {
                reject(JSON.stringify(data));
            }, (m) => {
                resolve(JSON.stringify(m));
            });
        }).then( (m) => {
            expect(JSON.stringify(m)).to.contain("a")
        }).catch((m) => {
            throw new Error(JSON.stringify(m));
        });
    }).timeout(5000);

    it("should login with correct version", () => {

        return new Promise((resolve, reject) => {
            let bimserverapi = new BimServerClient("http://localhost:8888");

            bimserverapi.login("derk@muenchhausen.de", "admin", (data) => {
                resolve(data);
            }, (m) => {
                reject(m);
            });
        });
    });

});
