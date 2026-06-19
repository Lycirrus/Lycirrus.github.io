export interface NavItem {
    label: string;
    id: string;
}

export const navItems: NavItem[] = [
    { label: "표지", id: "main" },
    { label: "기본 이력", id: "exp" },
    { label: "기술 스택", id: "stack" },
    { label: "시시각각", id: "projectA" },
    { label: "Chocoletter", id: "projectB" },
    { label: "머니위즈", id: "projectC" },
];