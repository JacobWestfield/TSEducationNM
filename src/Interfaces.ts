export interface IMessage {
    text: string,
    type: string
}

export interface IAction {
    name: string,
    handler: () => void
}