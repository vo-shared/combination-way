import defineElement from './custom-element';
import './index.css';
import {MenuApp} from './menu-app/MenuApp.js';

defineElement(MenuApp, 'react-left-menu', ['activeMenuItem'], ['onItemChanged']);
