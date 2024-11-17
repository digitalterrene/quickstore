export function splitDescriptionIntoParagraphs(
  description: string,
  linesPerParagraph: number = 6
): string[] {
  const words = description.split(" ");
  const paragraphs: string[] = [];
  let currentParagraph: any[] = [];

  words.forEach((word) => {
    currentParagraph.push(word);

    // Check if the current paragraph has reached the line limit
    if (currentParagraph.join(" ").length / 80 >= linesPerParagraph) {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
    }
  });

  // Push the last paragraph if it exists
  if (currentParagraph.length) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs;
}
