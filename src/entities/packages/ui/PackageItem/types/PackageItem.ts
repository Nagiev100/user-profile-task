import {FunctionalComponent} from "vue";

export interface PackageItemTypes {
    packageName: string;
    description: string;
    class?: string;
}

export interface PackageItemWithIconTypes {
    title: string;
    color: string;
    icon: FunctionalComponent;
}
