function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHtml = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
domElement.setAttribute('target', reactElement.props.target);

}


const reactElement + {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Google'

}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);