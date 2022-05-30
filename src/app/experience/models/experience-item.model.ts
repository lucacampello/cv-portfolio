export class ExperienceItemModel {
    logo: string;
    isWideLogo: boolean;
    title: string;
    subtitle: string;
    description: string;

    constructor(logo: string, isWideLogo: boolean, title: string, subtitle: string, description: string) {
        this.logo = logo;
        this.isWideLogo = isWideLogo;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
    }
}