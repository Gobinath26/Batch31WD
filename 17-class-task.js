var input = [
  {
    id: 1,
    title: "Title 1",
    childrens: [
      {
        id: 2,
        title: "Title 2",
        childrens: [],
      },
    ],
  },
  {
    id: 3,
    title: "Title 3",
    childrens: [
      {
        id: 4,
        title: "Title 4",
        childrens: [
          {
            id: 5,
            title: "Title 5",
            childrens: [],
          },
        ],
      },
    ],
  },
];

var output = [];
function recurse(inputPassed) {
  for (let i = 0; i < inputPassed.length; i++) {
    let obj = {};
    obj.id = inputPassed[i].id;
    obj.title = inputPassed[i].title;
    obj.childrens = [];
    if (inputPassed[i].childrens.length > 0) {
      recurse(inputPassed[i].childrens);
    } else {
      //stop calling recurse()
    }
    output.push(obj);
  }
}
recurse(input);
output.sort((a, b) => (a.id > b.id ? 1 : -1));
console.log("Output:", output);
