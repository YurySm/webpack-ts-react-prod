export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
