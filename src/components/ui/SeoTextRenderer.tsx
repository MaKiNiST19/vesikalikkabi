import React from 'react';

interface SeoTextRendererProps {
    content: string;
    className?: string;
}

export default function SeoTextRenderer({ content, className = '' }: SeoTextRendererProps) {
    // Replace escaped newlines with actual newlines
    const textWithRealNewlines = content.replace(/\\n/g, '\n');

    // Split by single line breaks so headings and paragraphs format independently
    const lines = textWithRealNewlines.split('\n').filter((p: string) => p.trim() !== '');

    return (
        <div className={`seo-content ${className}`}>
            {lines.map((line, index) => {
                const isH2 = line.startsWith('## ');
                const isH3 = line.startsWith('### ');
                const isH4 = line.startsWith('#### ');
                const isListItem = line.startsWith('* ') || line.startsWith('- ');
                const isOrderedListItem = /^\d+\.\s/.test(line);

                let textToProcess = line;
                if (isH2) textToProcess = line.substring(3);
                else if (isH3) textToProcess = line.substring(4);
                else if (isH4) textToProcess = line.substring(5);
                else if (isListItem) textToProcess = line.substring(2);
                else if (isOrderedListItem) textToProcess = line.replace(/^\d+\.\s/, '');

                // We use regex to match bold **text** and links [text](url)
                // First match bold
                const boldParts = textToProcess.split(/(\*\*.*?\*\*)/g);

                const processedNodes = boldParts.map((boldPart, bIdx) => {
                    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                        return <strong key={`b-${bIdx}`}>{boldPart.slice(2, -2)}</strong>;
                    }

                    // Now process links in the non-bold part
                    const linkParts = boldPart.split(/(\[.*?\]\(.*?\))/g);
                    return linkParts.map((linkPart, lIdx) => {
                        const linkMatch = linkPart.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                            return (
                                <a
                                    key={`l-${lIdx}`}
                                    href={linkMatch[2]}
                                    target={linkMatch[2].startsWith('http') ? '_blank' : '_self'}
                                    rel={linkMatch[2].startsWith('http') ? 'noopener follow' : ''}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    {linkMatch[1]}
                                </a>
                            );
                        }
                        return <React.Fragment key={`t-${lIdx}`}>{linkPart}</React.Fragment>;
                    });
                });

                if (isH2) {
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">{processedNodes}</h2>;
                }
                if (isH3) {
                    return <h3 key={index} className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">{processedNodes}</h3>;
                }
                if (isH4) {
                    return <h4 key={index} className="text-lg md:text-xl font-bold text-gray-800 mt-6 mb-3">{processedNodes}</h4>;
                }
                if (isListItem) {
                    return (
                        <div key={index} className="flex gap-2.5 mb-2.5 text-gray-700 items-start pl-2">
                            <span className="text-blue-600 mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{processedNodes}</span>
                        </div>
                    );
                }
                if (isOrderedListItem) {
                    const numberMatch = line.match(/^(\d+)\.\s/);
                    const number = numberMatch ? numberMatch[1] : '';
                    return (
                        <div key={index} className="flex gap-2.5 mb-2.5 text-gray-700 items-start pl-2">
                            <span className="text-blue-600 font-bold shrink-0 mt-0.5">{number}.</span>
                            <span className="leading-relaxed">{processedNodes}</span>
                        </div>
                    );
                }

                return (
                    <p key={index} className="mb-4 last:mb-0">
                        {processedNodes}
                    </p>
                );
            })}
        </div>
    );
}
