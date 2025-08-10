export const createElement = (type: string, id: string, content: string): HTMLElement => {
    const element = document.createElement(type);
    element.id = id;
    element.innerText = content;

    return element;
};