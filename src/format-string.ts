/**
 * Format a strings such as "|a| |b| |c|" using an array.
 * @param s The string template
 * @param args An array of values
 */
export const formatString = (s: string, ...args: string[]): string => {
	const re = /\|(\w+)\|/g;
	let sre = s.match(re);

	let ret = s;
	let i = 0;
	while (sre?.length && i <= args.length) {
		ret = ret.replace(re, args[i]!);
		sre = s.match(re);
		i++;
	}

	return ret;
};
