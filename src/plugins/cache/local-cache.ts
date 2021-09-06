export abstract class LocalCache {
    // NOTE 可能localStorage、sessionStorage、cookie、框架缓存并存，此处提供依赖倒置能力
    abstract getItem(key: string): any;
    abstract setItem(key: string, value: any): void;
    abstract clear(): void;
    abstract getAll(): any;
    //设置失效时间
    // abstract setItemWithExpire(key: string, value: any, expire: any): void;
}