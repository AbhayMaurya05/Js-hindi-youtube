// // const name = "Abhay"
// // const repoCount = 1

// // // console.log(name + repoCount + " Value");

// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("Abhay-M")

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf("t"));

// // const newString = gameName.substring(0,4)
// // console.log(newString);

// // const anotherString = gameName.slice(-8, 4)
// // console.log(anotherString);

// const newStringOne = " hitesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://abhay.com/abhay%20maurya"

// console.log(url.replace('%20','-'));

// console.log(gameName.split('-'));

let str = "Hello, JavaScript!";

// --- Character Access ---
console.log(str.charAt(7)); // → "J" (character at index 7)
console.log(str.charCodeAt(1)); // → 101 (Unicode of 'e')
console.log("😀".codePointAt(0)); // → 128512 (Unicode code point)

// --- Searching ---
console.log(str.indexOf("Java")); // → 7 (first occurrence of "Java")
console.log(str.lastIndexOf("!")); // → 17 (last occurrence of "!")
console.log(str.includes("Script")); // → true (checks existence)
console.log(str.startsWith("Hello")); // → true (starts with "Hello")
console.log(str.endsWith("!")); // → true (ends with "!")
console.log(str.search(/J[a-z]+/)); // → 7 (regex match start index)
console.log(str.match(/Java/)); // → ["Java"] (array of match)
console.log([...str.matchAll(/a/g)]); // → Array of all 'a' matches

// --- Extracting and Slicing ---
console.log(str.slice(7, 11)); // → "Java" (from index 7 to 10)
console.log(str.substring(7, 11)); // → "Java" (same as slice here)
console.log(str.substr(7, 4)); // → "Java" (start at 7, take 4 chars)
console.log(str.split(" ")); // → ["Hello,", "JavaScript!"]

// --- Manipulation ---
console.log("Hi".concat(" there!")); // → "Hi there!" (concatenates)
console.log("ha".repeat(3)); // → "hahaha" (repeats 3 times)
console.log(str.replace("JavaScript", "World")); // → "Hello, World!"
console.log("aaa".replaceAll("a", "b")); // → "bbb" (replace all 'a')
console.log("5".padStart(3, "0")); // → "005" (pad to 3 chars)
console.log("5".padEnd(3, "0")); // → "500" (pad at the end)
console.log("  space  ".trim()); // → "space" (removes both sides)
console.log("  space".trimStart()); // → "space" (left trim)
console.log("space  ".trimEnd()); // → "space" (right trim)

// --- Case Conversion ---
console.log("hello".toUpperCase()); // → "HELLO"
console.log("HELLO".toLowerCase()); // → "hello"
console.log("straße".toLocaleUpperCase("de-DE")); // → "STRASSE"

// --- Other ---
console.log("e\u0301".normalize()); // → "é" (normalize combining chars)
console.log("a".localeCompare("b")); // → -1 (a < b)
console.log("✓".isWellFormed()); // → true (valid Unicode)
console.log("\uDC00".isWellFormed()); // → false (invalid Unicode)
console.log("\uDC00".toWellFormed()); // → "�" (replaces with valid char)

// --- Deprecated HTML formatting (Not Recommended) ---
console.log("text".bold()); // → "<b>text</b>"
console.log("text".italics()); // → "<i>text</i>"
console.log("text".anchor("myAnchor")); // → "<a name='myAnchor'>text</a>"
console.log("text".fontcolor("red")); // → "<font color='red'>text</font>"
console.log("text".fontsize(5)); // → "<font size='5'>text</font>"
console.log("text".blink()); // → "<blink>text</blink>" (not supported)
console.log("text".fixed()); // → "<tt>text</tt>"
console.log("text".small()); // → "<small>text</small>"
console.log("text".strike()); // → "<strike>text</strike>"
console.log("text".sub()); // → "<sub>text</sub>"
console.log("text".sup()); // → "<sup>text</sup>"

// --- Meta ---
console.log("test".length); // → 4 (string length)
console.log("hello".valueOf()); // → "hello" (primitive value)
console.log("hello".toString()); // → "hello" (same as above)

// --- Iteration ---
for (let char of "abc") {
  console.log(char); // → 'a' 'b' 'c' (one per line)
}
