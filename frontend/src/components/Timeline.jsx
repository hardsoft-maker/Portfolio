import React from 'react';
import { timelineEvents } from '../data/mock';

const TimelineItem = ({ event }) => {
  const renderDescription = () => {
    if (event.links.length === 0) {
      return <span>{event.description}</span>;
    }

    let description = event.description;
    const parts = [];
    let lastIndex = 0;

    event.links.forEach((link, idx) => {
      const linkIndex = description.indexOf(link.text, lastIndex);
      if (linkIndex !== -1) {
        // Add text before the link
        if (linkIndex > lastIndex) {
          parts.push(
            <span key={`text-${idx}`}>
              {description.substring(lastIndex, linkIndex)}
            </span>
          );
        }
        // Add the link
        parts.push(
          <a
            key={`link-${idx}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-[#1A1A1A]/40 hover:decoration-[#1A1A1A] transition-all duration-200"
          >
            {link.text}
          </a>
        );
        lastIndex = linkIndex + link.text.length;
      }
    });

    // Add remaining text
    if (lastIndex < description.length) {
      parts.push(
        <span key="text-end">{description.substring(lastIndex)}</span>
      );
    }

    return parts.length > 0 ? parts : <span>{description}</span>;
  };

  return (
    <div className="grid grid-cols-[100px_1fr] gap-8 py-4 group">
      {/* Date */}
      <span 
        className={`text-sm tracking-wide ${
          event.isFuture ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
        }`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {event.date}
      </span>

      {/* Description */}
      <p 
        className={`text-base leading-relaxed ${
          event.isFuture ? 'text-[#9CA3AF] italic' : 'text-[#1A1A1A]'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {renderDescription()}
      </p>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
      <div className="space-y-0">
        {timelineEvents.map((event) => (
          <TimelineItem key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
