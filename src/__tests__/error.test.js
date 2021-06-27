const { error } = require("../redux/action");
const { errorReducer } = require("../redux/reducers/errorReducer");


test('should return the initial error state', () => {
    expect(errorReducer(undefined, {})).toEqual(
        {error: false, message: ""}
    )
  });


  test('should update error state', () => {
      let previousState =  {error: false, message: ""};
    expect(errorReducer(previousState, error({error: true, message: "No data available"}))).toEqual(
        {error: true, message: "No data available"}
    )
  });
  