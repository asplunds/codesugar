export namespace Post {
    export interface post {
        description?: string;
        title: string;
        snippets: [postSnippet]
    }

    interface postSnippet {
        content: string;
        language: string;
    }
}