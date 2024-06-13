// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import toWebComponent from 'react-to-webcomponent';
import ChatBox from './pages/ChatBox.jsx';

// Ensure custom elements polyfill is loaded
import '@webcomponents/custom-elements';

const WebChatPlugin = toWebComponent(ChatBox, React, ReactDOM);
customElements.define('chat-plugin', WebChatPlugin);

ReactDOM.render(<ChatBox />, document.getElementById('root'));
