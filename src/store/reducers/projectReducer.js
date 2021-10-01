const initState = {
  projects: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit rerum molestias",
      content: "blah blah blah",
    },
    {
      id: 2,
      title: "amet consectetur adipisicing elit",
      content: "blah blah blah",
    },
    {
      id: 3,
      title: "repellat expedita asperiores nobis laboriosam",
      content: "blah blah blah",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
