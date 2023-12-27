import 'bootstrap/dist/css/bootstrap.css' // importing on index wraps whole project with bootstrap
import ReactDOM from 'react-dom'
import {App} from "./ui/App";
import {store} from "./store/store";

// Use the store so that we can use it to pass information.
ReactDOM.render(App(store), document.querySelector('#root'));