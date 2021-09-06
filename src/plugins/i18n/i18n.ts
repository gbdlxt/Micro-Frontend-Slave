import { createI18n } from "vue-i18n";

// NOTE 懒加载国际化文件
export async function load(lang: string) {
    if(messages[lang]) { return Promise.resolve(messages[lang])}

    return import(`@/locales/${lang}.json`).then(message=> {
        messages[lang] = message;
        return messages[lang];
    });
}

const messages: any = {};
export const i18n = createI18n({
    locale: 'zh', // TODO 设置语言环境,从缓存中获取默认配置
    fallbackLocale: 'zh',
    globalInjection: true,
    messages,
});

// TODO: 做成class, 提供立即加载/懒加载两种API