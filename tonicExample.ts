import { BimServerClient } from "./bimserverclient";

var bimserverapi = new BimServerClient("http://localhost:8082");

bimserverapi.login("admin@bimserver.org", "admin");