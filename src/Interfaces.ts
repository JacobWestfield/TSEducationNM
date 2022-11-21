export interface IMessage {
    text: string,
    type: string
}

export interface IAction {
    name: string,
    handler: () => void
}


export interface IUser {
    userName: string;
    avatarURL: string;
    favoriteItemsAmount?: number | undefined
}


export interface ISearchFormData {
    dateArrival: Date | undefined | null;
    dateDeparture: Date | undefined| null;
    maxPricePerDay: number | undefined | null;
}


export interface Place {
    someEmptyField: unknown;
}