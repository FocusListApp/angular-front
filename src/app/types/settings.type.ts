import { ThemeVariants } from "./themes.enum";

export enum BackendOption {
    NODE = 'NODE',
    OFFLINE = 'OFFLINE',
}

export interface Settings {
    backend: BackendOption;
    theme: ThemeVariants;
}