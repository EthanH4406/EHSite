const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

export function esc(value: string): string {
    return value.replace(/[&<>"']/g, (c) => map[c]);
}