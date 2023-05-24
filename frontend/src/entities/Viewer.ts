export type Role = 'client' | 'manager' | 'consultant';

export interface Viewer {
    id: number,
    mail: string,
    password: string,
    name: string,
    token: string,
    role: Role
}