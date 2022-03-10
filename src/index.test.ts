import _ from "lodash";
import { flattenObjectKeys } from "./index";
it("extracts a single key from a simple object", () => {
  const object = {
    name: "robert",
  };
  const keys = flattenObjectKeys(object);
  expect(keys.length).toEqual(1);
  expect(keys[0]).toEqual("name");
});
it("extracts keys from array", () => {
  const object = ["swiming", "sailing", "surfing", "basketball"];
  const keys = flattenObjectKeys(object);
  expect(keys.length).toEqual(4);
  expect(keys[0]).toEqual("[0]");
  expect(keys[1]).toEqual("[1]");
  expect(keys[2]).toEqual("[2]");
  expect(keys[3]).toEqual("[3]");
});

it("extracts  keys from a simple object", () => {
  const object = {
    name: "robert",
    age: 10,
  };
  const keys = flattenObjectKeys(object);
  expect(keys.length).toEqual(2);
  expect(keys[0]).toEqual("name");
  expect(keys[1]).toEqual("age");
});

it("extracts  keys from a 1 levels nested object", () => {
  const object = {
    name: "robert",
    age: 10,
    dog: {
      name: "skipper",
    },
  };
  const keys = flattenObjectKeys(object);
  expect(keys.length).toEqual(4);
  expect(keys[0]).toEqual("name");
  expect(keys[1]).toEqual("age");
  expect(keys[2]).toEqual("dog.name");
  expect(keys[3]).toEqual("dog");
  //   expect(keys[3]).toEqual("dog.name");
});

it("extracts  keys from a 2 levels nested object", () => {
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
  expect(keys.length).toEqual(7);
  expect(keys[0]).toEqual("name");
  expect(keys[1]).toEqual("age");
  expect(keys[2]).toEqual("dogs.alive.name");
  expect(keys[3]).toEqual("dogs.alive");
  expect(keys[4]).toEqual("dogs.passed.name");
  expect(keys[5]).toEqual("dogs.passed");
  //   expect(keys[3]).toEqual("dog.name");
});

it("extracts keys from very nested object with arrays", () => {
  const object = {
    title: {
      plain: "Send Money",
    },
    fieldset: [
      {
        label: {
          plain: "Personal Info Section",
        },
        fieldset: [
          {
            field: [
              {
                label: {
                  plain: "First Name",
                },
                value: {
                  plain: "Bob",
                },
                id: "a_1",
              },
              {
                label: {
                  plain: "Last Name",
                },
                value: {
                  plain: "Hogan",
                },
                id: "a_2",
              },
            ],
            id: "a_8",
          },
        ],
        id: "a_5",
      },
      {
        label: {
          plain: "Billing Details Section",
        },
        fieldset: {
          field: {
            choices: {
              choice: {
                label: {
                  plain: "Gift",
                },
                id: "a_17",
                switch: "",
              },
            },
            label: {
              plain: "Choose a category:",
            },
            value: {
              plain: "Gift",
            },
            id: "a_14",
          },
          fieldset: {
            label: {
              plain: "",
            },
            field: [
              {
                choices: {
                  choice: {
                    label: {
                      plain: "Other",
                    },
                    id: "a_25",
                    switch: "",
                  },
                },
                label: {
                  plain: "Amount",
                },
                value: {
                  plain: "Other", //(This could also be a dollar amount like 10.00)
                },
                id: "a_21",
              },
              {
                label: {
                  plain: "Other Amount",
                },
                value: {
                  plain: "200",
                },
                id: "a_20",
              },
            ],
            id: "a_26",
          },
          id: "a_13",
        },
        id: "a_12",
      },
    ],
  };
  const keys = flattenObjectKeys(object);
  expect(keys[0]).toEqual("title.plain");
  expect(keys[1]).toEqual("title");
  expect(keys[2]).toEqual("fieldset[0].label.plain");
  expect(keys[3]).toEqual("fieldset[0].label");
  expect(keys[4]).toEqual("fieldset[0].fieldset[0].field[0].label.plain");
  expect(keys[5]).toEqual("fieldset[0].fieldset[0].field[0].label");
  expect(keys[6]).toEqual("fieldset[0].fieldset[0].field[0].value.plain");
  expect(keys[7]).toEqual("fieldset[0].fieldset[0].field[0].value");
  expect(keys[8]).toEqual("fieldset[0].fieldset[0].field[0].id");
  expect(keys[9]).toEqual("fieldset[0].fieldset[0].field[0]");
  expect(keys[10]).toEqual("fieldset[0].fieldset[0].field[1].label.plain");
  expect(keys[11]).toEqual("fieldset[0].fieldset[0].field[1].label");
  expect(keys[12]).toEqual("fieldset[0].fieldset[0].field[1].value.plain");
  expect(keys[13]).toEqual("fieldset[0].fieldset[0].field[1].value");
  expect(keys[14]).toEqual("fieldset[0].fieldset[0].field[1].id");
  expect(keys[15]).toEqual("fieldset[0].fieldset[0].field[1]");
  expect(keys[16]).toEqual("fieldset[0].fieldset[0].field");
  expect(keys[17]).toEqual("fieldset[0].fieldset[0].id");
  expect(keys[18]).toEqual("fieldset[0].fieldset[0]");
  expect(keys[19]).toEqual("fieldset[0].fieldset");
  expect(keys[20]).toEqual("fieldset[0].id");
  expect(keys[21]).toEqual("fieldset[0]");
  expect(keys[22]).toEqual("fieldset[1].label.plain");
  expect(keys[23]).toEqual("fieldset[1].label");
  expect(keys[24]).toEqual(
    "fieldset[1].fieldset.field.choices.choice.label.plain"
  );
  expect(keys[25]).toEqual("fieldset[1].fieldset.field.choices.choice.label");
  expect(keys[26]).toEqual("fieldset[1].fieldset.field.choices.choice.id");
  expect(keys[27]).toEqual("fieldset[1].fieldset.field.choices.choice.switch");
  expect(keys[28]).toEqual("fieldset[1].fieldset.field.choices.choice");
  expect(keys[29]).toEqual("fieldset[1].fieldset.field.choices");
  expect(keys[30]).toEqual("fieldset[1].fieldset.field.label.plain");
  expect(keys[31]).toEqual("fieldset[1].fieldset.field.label");
  expect(keys[32]).toEqual("fieldset[1].fieldset.field.value.plain");
  expect(keys[33]).toEqual("fieldset[1].fieldset.field.value");
  expect(keys[34]).toEqual("fieldset[1].fieldset.field.id");
  expect(keys[35]).toEqual("fieldset[1].fieldset.field");
  expect(keys[36]).toEqual("fieldset[1].fieldset.fieldset.label.plain");
  expect(keys[37]).toEqual("fieldset[1].fieldset.fieldset.label");
  expect(keys[38]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].choices.choice.label.plain"
  );
  expect(keys[39]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].choices.choice.label"
  );
  expect(keys[40]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].choices.choice.id"
  );
  expect(keys[41]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].choices.choice.switch"
  );
  expect(keys[42]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].choices.choice"
  );
  expect(keys[43]).toEqual("fieldset[1].fieldset.fieldset.field[0].choices");
  expect(keys[44]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].label.plain"
  );
  expect(keys[45]).toEqual("fieldset[1].fieldset.fieldset.field[0].label");
  expect(keys[46]).toEqual(
    "fieldset[1].fieldset.fieldset.field[0].value.plain"
  );
  expect(keys[47]).toEqual("fieldset[1].fieldset.fieldset.field[0].value");
  expect(keys[48]).toEqual("fieldset[1].fieldset.fieldset.field[0].id");
  expect(keys[49]).toEqual("fieldset[1].fieldset.fieldset.field[0]");
  expect(keys[50]).toEqual(
    "fieldset[1].fieldset.fieldset.field[1].label.plain"
  );
  expect(keys[51]).toEqual("fieldset[1].fieldset.fieldset.field[1].label");
  expect(keys[52]).toEqual(
    "fieldset[1].fieldset.fieldset.field[1].value.plain"
  );
  expect(keys[53]).toEqual("fieldset[1].fieldset.fieldset.field[1].value");
  expect(keys[54]).toEqual("fieldset[1].fieldset.fieldset.field[1].id");
  expect(keys[55]).toEqual("fieldset[1].fieldset.fieldset.field[1]");
  expect(keys[56]).toEqual("fieldset[1].fieldset.fieldset.field");
  expect(keys[57]).toEqual("fieldset[1].fieldset.fieldset.id");
  expect(keys[58]).toEqual("fieldset[1].fieldset.fieldset");
  expect(keys[59]).toEqual("fieldset[1].fieldset.id");
  expect(keys[60]).toEqual("fieldset[1].fieldset");
  expect(keys[61]).toEqual("fieldset[1].id");
  expect(keys[62]).toEqual("fieldset[1]");
  expect(keys[63]).toEqual("fieldset");
});

it("example of taxonomy independent algorithms", () => {
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
  const bagOfWord = keys.reduce(
    (pv: { [key: string]: { count: number; sources: string[] } }, key) => {
      //lodash to get nested value
      const value = _.get(object, key);
      // is the value at the key a string
      if (_.isString(value)) {
        // toLowerCase and spilt string on space
        value
          .toLowerCase()
          .split(" ")
          // loop through words and build our bag of words
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
  expect(bagOfWord).toStrictEqual({
    robert: { count: 1, sources: ["firstName"] },
    good: {
      count: 4,
      sources: [
        "social.header",
        "social.posts.recent[0]",
        "views.life[1]",
        "views.life[1]",
      ],
    },
    mindsets: { count: 1, sources: ["social.header"] },
    help: { count: 1, sources: ["social.header"] },
    things: { count: 1, sources: ["social.posts.recent[0]"] },
    on: { count: 1, sources: ["social.posts.recent[0]"] },
    the: { count: 2, sources: ["social.posts.recent[0]", "views.life[0]"] },
    way: { count: 1, sources: ["social.posts.recent[0]"] },
    best: { count: 1, sources: ["views.life[0]"] },
    is: {
      count: 3,
      sources: ["views.life[0]", "views.life[3]", "views.life[3]"],
    },
    yet: { count: 1, sources: ["views.life[0]"] },
    to: {
      count: 3,
      sources: ["views.life[0]", "views.life[1]", "views.life[2]"],
    },
    be: { count: 1, sources: ["views.life[0]"] },
    do: { count: 1, sources: ["views.life[1]"] },
    and: { count: 1, sources: ["views.life[1]"] },
    will: { count: 1, sources: ["views.life[1]"] },
    come: { count: 1, sources: ["views.life[1]"] },
    "you.": { count: 1, sources: ["views.life[1]"] },
    you: { count: 2, sources: ["views.life[2]", "views.life[2]"] },
    "can't": { count: 1, sources: ["views.life[2]"] },
    go: { count: 1, sources: ["views.life[2]"] },
    through: { count: 1, sources: ["views.life[2]"] },
    life: { count: 1, sources: ["views.life[2]"] },
    allowing: { count: 1, sources: ["views.life[2]"] },
    pain: { count: 2, sources: ["views.life[2]", "views.life[3]"] },
    dictate: { count: 1, sources: ["views.life[2]"] },
    how: { count: 1, sources: ["views.life[2]"] },
    behave: { count: 1, sources: ["views.life[2]"] },
    "inevitable,": { count: 1, sources: ["views.life[3]"] },
    suffering: { count: 1, sources: ["views.life[3]"] },
    optional: { count: 1, sources: ["views.life[3]"] },
  });
  //   expect(keys[3]).toEqual("dog.name");
});
