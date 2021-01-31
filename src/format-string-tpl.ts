/**
 * Format a string such as "|a| |b| |c|" using an object.
 * @param s The string template
 * @param args An object with keys matching the template
 */
export const formatStringTpl = (s: string, args: Record<string, string>): string =>
	// Use a regex-replace, which will match the full |a| string.
	// That string is passed to the function replacer, which then slices off the
	// begin and end pipes from the match, then returns the key matching that.
	s.replace(/\|(\w+)\|/g, (match, p1) => (args[p1] === undefined ? "?" : args[p1]!));
