import { userSuccess } from '../redux/action';
import { usersReducer } from '../redux/reducers/usersReducer';


test('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(
        {}
    )
});


  test('should handle user information being added to existing state', () => {
      let previousState =  {};
      let payload = {
        login: 'likr',
        data: {
          bio: null,
          avatar_url: 'https://avatars.githubusercontent.com/u/7094014?v=4',
          email: "onoue@likr-lab.com",
          followers: 54,
          following: 15,
          hireable: true,
          location: 'BeiJing',
          login: 'likr',
          name: 'YanSen Zhang',
          twitter_username: null,
          url: 'https://api.github.com/users/likr',
          repos_url: 'https://api.github.com/users/likr/repos',
          gists_url: 'https://api.github.com/users/likr/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/likr/starred{/owner}{/repo}'
        }
      }
      
    expect(usersReducer(previousState, userSuccess({login: "likr", data: {...payload.data}}))['likr']).toHaveProperty("email", "onoue@likr-lab.com");
    
  });