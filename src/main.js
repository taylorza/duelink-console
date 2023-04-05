import './css/main.css';
import 'tippy.js/dist/tippy.css';
import { createApp } from 'vue';
import App from './App.vue';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';

window.ace = ace;

createApp(App).mount('#app');
