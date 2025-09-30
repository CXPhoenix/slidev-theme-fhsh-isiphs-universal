import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup(() => {
    return {
        editorOptions: {
            lineNumbers: "on",
            maxHeight: "20dvh",
            tabSize: 4,
            fontSize: 20,
            lineHeight: 30,
        }
    }
})