import {FunctionalComponent} from "vue";

export interface PackageItemTypes {
    packageName: string;
    description: string;
    borderColor: string;
    textColor: string;
}

export interface PackageItemWithIconTypes {
    title: string;
    color: string;
    icon: FunctionalComponent;
}
