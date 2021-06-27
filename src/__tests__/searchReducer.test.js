const { changeParams } = require("../redux/action");
const { searchReducer } = require("../redux/reducers/searchReducer");


test('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(
        {query: "", entity: 'user', load: false}
    )
  });


  test('should handle change params', () => {
      let previousState =  {query: "", entity: 'user', load: false};
    expect(searchReducer(previousState, changeParams({query: 'todo', entity: "repositories"}))).toEqual(
        {query: "todo", entity: 'repositories', load: false}
    )
  });
  