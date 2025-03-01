export type PageType = {
    params: Promise<{ catchAll: Array<string> }>;
    searchParams: Promise<object>;
}