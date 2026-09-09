export function titleLines(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  const lines: string[] = [];

  for (const word of words) {
    if (word === "&" && lines.length > 0) {
      lines[lines.length - 1] += ` ${word}`;
    } else {
      lines.push(word);
    }
  }

  return lines;
}
