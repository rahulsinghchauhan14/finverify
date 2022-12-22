export default function isString(str: string | null | undefined): boolean {
    return str !== null && str !== undefined && str.trim().length > 0;
}