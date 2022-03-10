# flatten-object-keys

Turn deeply nested object into any array of keys.
This is useful if you need to write algorithms and transformation that are taxonomy independent. 


## Install
```
npm install @silvered-nyc/flatten-object-keys
```

## Import
```
import { flattenObjectKeys } from "@silvered-nyc/flatten-object-keys";
```

## Simple example
```
import { flattenObjectKeys } from "@silvered-nyc/flatten-object-keys";

const object = {
    name: "robert",
    age: 10,
  };

const keys = flattenObjectKeys(object);
// keys -> ["name","age"]
```

## Array example
```
import { flattenObjectKeys } from "@silvered-nyc/flatten-object-keys";

const object = ["swiming", "sailing", "surfing", "basketball"];

const keys = flattenObjectKeys(object);

// keys -> ["[0]","[1]","[2]","[3]"]
```
## Nested example
```
import { flattenObjectKeys } from "@silvered-nyc/flatten-object-keys";
const object = {
    name: "robert",
    age: 10,
    dogs: {
      alive: {
        name: "skipper",
      },
      passed: {
        name: "carmel",
      },
    },
  };
const keys = flattenObjectKeys(object);
// keys -> ["name","age","dogs.alive.name","dogs.alive","dogs.passed.name","dogs.passed"]
```

## Taxonomy Independent Algorithm Example: Bag of Words
```
import { flattenObjectKeys } from "@silvered-nyc/flatten-object-keys";
import _ from "lodash";

const object = {
    firstName: "robert",
    age: 28,
    social: {
      header: "Good mindsets help",
      posts: {
        recent: ["Good things on the way"],
      },
    },
    views: {
      life: [
        "The best is yet to be",
        "Do good and good will come to you.",
        "You can't go through life allowing pain to dictate how you behave",
        "Pain is inevitable, suffering is optional",
      ],
    },
  };

const keys = flattenObjectKeys(object);

  const bagOfWords = keys.reduce(
    (pv: { [key: string]: { count: number; sources: string[] } }, key) => {
      // lodash to get nested value
      const value = _.get(object, key);

      // is the value at the key a string
      if (_.isString(value)) {
        value
          .toLowerCase()
          .split(" ")
          // loop through words and build bag of words
          .forEach((e) => {
            // its allready initialized
            if (pv[e]) {
              pv[e] = {
                count: pv[e].count + 1,
                sources: [...pv[e].sources, key],
              };
            } else {
              pv[e] = { count: 1, sources: [key] };
            }
          });
      }
      return pv;
    },
    {}
  );
  
// bagOfWords -> {
//     robert: { count: 1, sources: ["firstName"] },
//     good: {
//       count: 4,
//       sources: [
//         "social.header",
//         "social.posts.recent[0]",
//         "views.life[1]",
//         "views.life[1]",
//       ],
//     },
//     mindsets: { count: 1, sources: ["social.header"] },
//     help: { count: 1, sources: ["social.header"] },
//     things: { count: 1, sources: ["social.posts.recent[0]"] },
//     on: { count: 1, sources: ["social.posts.recent[0]"] },
//     the: { count: 2, sources: ["social.posts.recent[0]", "views.life[0]"] },
//     way: { count: 1, sources: ["social.posts.recent[0]"] },
//     best: { count: 1, sources: ["views.life[0]"] },
//     is: {
//       count: 3,
//       sources: ["views.life[0]", "views.life[3]", "views.life[3]"],
//     },
//     yet: { count: 1, sources: ["views.life[0]"] },
//     to: {
//       count: 3,
//       sources: ["views.life[0]", "views.life[1]", "views.life[2]"],
//     },
//     be: { count: 1, sources: ["views.life[0]"] },
//     do: { count: 1, sources: ["views.life[1]"] },
//     and: { count: 1, sources: ["views.life[1]"] },
//     will: { count: 1, sources: ["views.life[1]"] },
//     come: { count: 1, sources: ["views.life[1]"] },
//     "you.": { count: 1, sources: ["views.life[1]"] },
//     you: { count: 2, sources: ["views.life[2]", "views.life[2]"] },
//     "can't": { count: 1, sources: ["views.life[2]"] },
//     go: { count: 1, sources: ["views.life[2]"] },
//     through: { count: 1, sources: ["views.life[2]"] },
//     life: { count: 1, sources: ["views.life[2]"] },
//     allowing: { count: 1, sources: ["views.life[2]"] },
//     pain: { count: 2, sources: ["views.life[2]", "views.life[3]"] },
//     dictate: { count: 1, sources: ["views.life[2]"] },
//     how: { count: 1, sources: ["views.life[2]"] },
//     behave: { count: 1, sources: ["views.life[2]"] },
//     "inevitable,": { count: 1, sources: ["views.life[3]"] },
//     suffering: { count: 1, sources: ["views.life[3]"] },
//     optional: { count: 1, sources: ["views.life[3]"] },
//   }

```