import defineElement from './custom-element';
import './index.css';
import {TableContainer} from './table-container/TableContainer.js';

defineElement(TableContainer, 'react-table-container', ['data'], ['onItemChanged']);
