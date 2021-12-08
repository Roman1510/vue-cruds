import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css';

createApp(App).use(store).use(router).mount('#app');
// add delete button, with the delete functionality
// add edit button (pencil), with the edit functionality
// add delete all button, with the modal window and delete all loop
