import type { Component } from 'vue'

export interface ButtonNavType {
    id: number,
    icon: Component;
    navigateLink: string;
    type?: boolean;
}
