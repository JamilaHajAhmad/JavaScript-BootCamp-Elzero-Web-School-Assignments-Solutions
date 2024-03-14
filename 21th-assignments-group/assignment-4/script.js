let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? : https may be exist one time or not 

// :\/\/ : colon then double slash prefixed by escaping operator (back slash) to let browser know that it is a slash

// (?:[-\w]+\.)? : ?: means match expression but do not capture zero or one [] containing - followed by any word character 

// ([-\w]+) : - followed by any word character inside [] may be exist one or more

// \. : match everything except new line or any line terminator

// \w+ : one or more any word character

/* (?:\.\w+)? : match expression but don't capture zero or more from
(match anything except new line and any line terminator, followed by one or more word character) */

// \/? : escape operator to let slash be a character (not related to the pattern closing) zero or one

// .* : zero or more dots

// i : case-insensitive (flag or modifier)
