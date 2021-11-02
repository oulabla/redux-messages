import { InjectionToken } from "@angular/core";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer, { AppState } from "./app.reducer";

export const AppStore = new InjectionToken('App.store')

export function createAppStore() : Store<AppState> {
    return createStore<AppState, any, null, null>(
        rootReducer, devToolsEnhancer({})
    )
}

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];