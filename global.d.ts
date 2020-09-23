declare enum TagType {
	Paragraph,
	Header1,
	Header2,
	Header3,
	HorizontalRule
}

declare interface IMarkdownDocument {
	Add(...content: string[]): void
	Get(): string
}
