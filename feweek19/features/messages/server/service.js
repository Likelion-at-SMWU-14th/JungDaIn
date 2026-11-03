import { messages } from "./data";

export function getMessgaes() {
    return messages;
}

export function addMessage(name, content) {
    const message = { id: Date.now() + Math.random(), name, content };
    messages.unshift(message);
    return message;
}