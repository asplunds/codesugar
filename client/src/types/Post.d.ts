export namespace Post {
    interface post {
        description?: string;
        title: string;
        snippets: [postSnippet]
    }

    interface postSnippet {
        content: string;
        language: string;
    }
}