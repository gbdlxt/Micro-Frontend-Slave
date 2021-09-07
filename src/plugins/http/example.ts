import { HttpClient } from "./http-client";

export class Example extends HttpClient {
    // @inject('AxiosStatic')
    // constructor() {
    //     super();
    // }
    constructor() {
        super();
    }

    getDevices(): Promise<any> {
        const url = '/config.json';
        return this.get(url);
    }
}