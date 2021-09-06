import { LocalCache } from "./local-cache";

export class SessionCache extends LocalCache {
    //可以是绑定在Vue全局的乾坤缓存，此处屏蔽实现细节
    private host:any = sessionStorage;
    getItem(key: string) {
        this.host.getItem(key);
    }
    setItem(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
}
