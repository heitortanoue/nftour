import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeFigure from '@microflash/rehype-figure';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import remarkMath from 'remark-math';
import rehypeStringify from 'rehype-stringify';
import rehypeKatex from 'rehype-katex';

const parser = () => {
    return unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeFigure)
        .use(rehypeKatex)
        .use(rehypeStringify);
};

export const parseMarkdownSync = (content: string) => {
    return parser().processSync(content).toString();
};

export const parseMarkdown = async (content: string) => {
    return (await parser().process(content)).toString();
};
