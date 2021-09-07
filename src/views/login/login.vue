<style lang="less" scoped src="./login.less"></style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ElInput, ElButton } from 'element-plus';
import { load } from '@/plugins/i18n/i18n';
import { LANG_TYPE, User } from './constant';
import { Example } from '@/plugins/http/example';

@Options({
    components: { ElInput, ElButton },
    template: require('./login.html')
})
export default class login extends Vue {
    
    langType = LANG_TYPE;
    user: User = {};

    httpSev = new Example();

    // NOTE 切换语言,懒加载资源文件
    changeLanguage(event: any) {
        const lang = event.target.value;
        load(lang).then(()=> this.$i18n.locale = lang);
    }

    // TODO 登录
    login() {
        this.httpSev.getDevices().then(rsp=> {
            console.log(rsp);
        })
    }
}
</script>