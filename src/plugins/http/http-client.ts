import { AxiosStatic } from 'axios'
export abstract class HttpClient {
    constructor(private axios: AxiosStatic, private session: any){}

    get(path: string) {
        //TODO Add Headers
        this.axios.get(path).then(rsp=>rsp).catch(err=>err);
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
        this.session.getToken();
    }
    private handlerError() {}
}
