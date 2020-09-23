"use strict";
class TagTypeToHTML {
    constructor() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, 'h1');
        this.tagType.set(TagType.Header2, 'h2');
        this.tagType.set(TagType.Header3, 'h3');
        this.tagType.set(TagType.Paragraph, 'p');
        this.tagType.set(TagType.HorizontalRule, 'hr');
    }
    OpeningTag(tagType) {
        return this.GetTag(tagType, `<`);
    }
    ClosingTag(tagType) {
        return this.GetTag(tagType, `</`);
    }
    GetTag(tagType, openingPattern) {
        let tag = this.tagType.get(tagType);
        if (tag !== null) {
            return `<${openingPattern}${tag}>`;
        }
        return `<${openingPattern}p>`;
    }
}
class MarkdownDocument {
    constructor() {
        this.content = '';
    }
    Add(...content) {
        content.forEach((element) => {
            this.content += element;
        });
    }
    Get() {
        return this.content;
    }
}
class ParseElement {
    constructor() {
        this.CurrentLine = '';
    }
}
//# sourceMappingURL=index.js.map