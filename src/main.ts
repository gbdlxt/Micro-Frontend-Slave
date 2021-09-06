import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import routes from './router'
import './public-path';
import { i18n, load } from './plugins/i18n/i18n';

let history: any = null;
let router = null;
let instance: any = null;

function render(props: any = {}): void {
    const { container } = props;
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/login': '/');
    router = createRouter({
        history,
        routes
    });
    instance = createApp(App);
    instance.use(router);
    instance.use(i18n);
    
    instance.mount(container? container.querySelector('#app'): '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    //TODO 加载全局配置
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}


export async function mount(props: any) {
    load('zh');
    render(props);
    
    // instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    // instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
    router = null;
    history.destroy();
}
  