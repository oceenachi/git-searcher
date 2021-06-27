import { callUserSuccess } from '../redux/action';
import { userSearchReducer } from '../redux/reducers/userSearchReducer';


test('should return the initial state', () => {
    expect(userSearchReducer(undefined, {})).toEqual(
        {}
    )
});


  test('should handle user information being added to existing state', () => {
      let previousState =  {};
      let data =
      {
          total_count: 30,
          incomplete_results: false,
          items: [
              {
                avatar_url: "https://avatars.githubusercontent.com/u/142614?v=4",
                id: 142614,
                login: "Left",
                url: "https://api.github.com/users/Left"
              }
          ]

      }
      
    expect(userSearchReducer(previousState, callUserSuccess({query: 'like', data: {...data, page: 1}}, 1))['like'].items).toHaveLength(1);
    
  });

  test('should handle update of user information being added to empty state', () => {
    let data =
    {
        total_count: 30,
        incomplete_results: false,
        items: [
            {
                avatar_url: "https://avatars.githubusercontent.com/u/142614?v=4",
                id: 142614,
                login: "Left",
                url: "https://api.github.com/users/Left"
            },  
        ]

    }
    let previousState = {"like":{ ...data}};
    
  expect(userSearchReducer(previousState, callUserSuccess({query: 'like', data: {...data, page: 2}}, 2))['like'].items).toHaveLength(2);

});