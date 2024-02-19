// Assumes:
// => proper semi-colons
// => all content-based whitespace is outsourced or done in CSS
export function htmlMinify(text) {
  return (
    text
      // remove single-line JS comments
      // (can't do this after newlines are removed)
      .replaceAll(/\/\/.*/g, "")

      // replace runs of whitespace with one space,
      // including newlines
      .replaceAll(/\s+/g, " ")

      // replace multiline comments
      // (now single line thanks to the above)
      .replaceAll(/<\!--.*-->|\/\*.*\*\//g, "")

    // there are more spaces you could remove
    // but it might fuck up weird copy -
    // it's "good enough" for me!
  );
}