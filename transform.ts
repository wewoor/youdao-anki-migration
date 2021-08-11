type Word = {
    itemId: string;
    bookId: string;
    bookName: string;
    word: string;
    trans: string;
    phonetic: string[]
}

// Step 1: reading the json data to memory
const decoder = new TextDecoder('utf-8');
const data = Deno.readFileSync('youdao-words.json');
const jsonStr = decoder.decode(data).toString();

// Step 2: parsing the json data to csv format, like 1,b,c\n
const json = JSON.parse(jsonStr);
const words = json.data.itemList;

const result: string[] = [];
words.forEach((word: Word) => {
    result.push(
        `${word.word}, ${word.trans}, ${word.phonetic}`
    )
});

// Step 3: Writing the transformed data to csv file.
const output = result.join('\n');
const encoder = new TextEncoder();
Deno.writeFileSync("data.csv", encoder.encode(output));  // overwrite "hello1.txt" or create it


