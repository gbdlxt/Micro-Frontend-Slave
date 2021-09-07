import axios, { AxiosInstance } from 'axios'
export abstract class HttpClient {
    private axios: AxiosInstance;
    constructor(){
        this.axios = axios.create({
            baseURL: 'http://localhost:8001',
            headers: {'Content-Type': 'application/json'},
        });
    }

    get(path: string): Promise<any> {
        //TODO Add Headers
        return this.axios.get(path).then(rsp=>rsp).catch(err=>err);
    }

    post(path: string, paras:any = {}): Promise<any> {
        //TODO Add Headers
        return this.axios.post(path, paras).then(rsp=>rsp).catch(err=>err);
    }

    delete() {}

    put() {}

    upload() {}

    downLoad() {}

    private getDefaultHeaders() {}
    private checkAuth() {
        // TODO Check auth from cache.
        // this.session.getToken();
    }
    private handlerError() {}
}
