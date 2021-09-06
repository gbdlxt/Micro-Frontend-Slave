import { inject } from "@vue/runtime-core";
import { HttpClient } from "./http-client";

export class Example extends HttpClient {
    // @inject('AxiosStatic')
    // constructor() {
    //     super();
    // }

    getDevices() {
        const url = 'xxx/xxx/xx';
        return this.get(url);
    }
}