export class GetUrlItemsFromRoute {
    static getItems<T>(route: T): { path: string }[] {
        const items: { path: string }[] = [];
        let currentRoute: T | null = route;
        while (currentRoute) {
            if ((currentRoute as any).routeConfig && (currentRoute as any).routeConfig.path) {
                items.unshift({ path: (currentRoute as any).routeConfig.path });
            }
            currentRoute = (currentRoute as any).parent;
        }
        return items;
    }
}
