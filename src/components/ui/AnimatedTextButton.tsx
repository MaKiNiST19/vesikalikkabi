"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AnimatedTextButton = ({ text = "Details", onClick, className = '' }: { text?: string, onClick?: () => void, className?: string }) => {
    // We split the text into single characters to have that individual drop effect
    // But since the CSS is expecting 4 spans, we map exactly 4 words/letters, 
    // or we can just adapt the CSS to count for the number of words.
    // Let's adapt it to words for now.
    const words = text.split(' ');

    return (
        <StyledWrapper className={className} onClick={onClick}>
            <button>
                <div className="text">
                    {words.map((word, i) => <span key={i}>{word}</span>)}
                </div>
                <div className="clone">
                    {words.map((word, i) => <span key={i}>{word}</span>)}
                </div>
                <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="20px">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
    width: auto;
    min-width: 140px;
    height: 56px;
    overflow: hidden;
    border: none;
    color: #cc0735;
    background: none;
    position: relative;
    padding-bottom: 2em;
    cursor: pointer;
    font-weight: 600;
  }

  button > div,
  button > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  button:before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: currentColor;
    transition: transform 0.25s ease-out;
  }

  button:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  button .clone > *,
  button .text > * {
    opacity: 1;
    font-size: 1.1rem;
    transition: 0.2s;
    margin-right: 4px;
  }

  button .clone > * {
    transform: translateY(60px);
  }

  button:hover .clone > * {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .text > * {
    opacity: 1;
    transform: translateY(-60px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .clone > :nth-child(1) { transition-delay: 0.1s; }
  button:hover .clone > :nth-child(2) { transition-delay: 0.15s; }
  button:hover .clone > :nth-child(3) { transition-delay: 0.2s; }
  button:hover .clone > :nth-child(4) { transition-delay: 0.25s; }
  button:hover .clone > :nth-child(5) { transition-delay: 0.3s; }
  button:hover .clone > :nth-child(6) { transition-delay: 0.35s; }

  /* icon style and hover */
  button svg {
    width: 20px;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-50deg);
    transition: 0.2s ease-out;
    margin-left: 20px;
    position: relative;
  }

  button:hover svg {
    transform: translateY(-50%) rotate(-90deg);
  }`;

export default AnimatedTextButton;
