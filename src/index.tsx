import Vue from 'vue';

import App from './App.vue';

//挂载系统的全局产量
import * as constant from './constant/index';
(window as any).constant = constant;
//挂载图形的全局产量
import * as mapConstant from './map-components/constant/index';
(window as any).mapConstant = mapConstant;
new Vue({
    render() {
        return <App />;
    }
}).$mount('#root');
