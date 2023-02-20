import styles from './styles.module.css';

const element = document.createElement('div');
const text = document.createTextNode('Test');
element.appendChild(text);
element.classList.add(styles.myClass);
document.body.appendChild(element);
