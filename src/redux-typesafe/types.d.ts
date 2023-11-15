import {ActionType, StateType} from "typesafe-actions";

declare module 'MyModels' {
    export type Store = StateType<typeof import('./store').default>;

    export type RootState = StateType<typeof import('./root-reducer').default>;

    export type RootAction = ActionType<typeof import('./root-action').default>;
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof import('./root-action').default>;
    }
}
