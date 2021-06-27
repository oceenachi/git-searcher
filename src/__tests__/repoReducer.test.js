const { repoSearchReducer } = require("../redux/reducers/repoSearchReducer");
import { callRepoSuccess } from '../redux/action';


test('should return the initial state', () => {
    expect(repoSearchReducer(undefined, {})).toEqual(
        {}
    )
});


  test('should handle repo information being added to existing state', () => {
      let previousState =  {};
      let data =
      {
          total_count: 30,
          incomplete_results: false,
          items: [
              {
                  contributors_url: "https://api.github.com/repos/jd-alexander/LikeButton/contributors",
                  description: "Twitter's heart animation for Android",
                  forks_count: 384,
                  full_name: "jd-alexander/LikeButton",
                  id: 48503645,
                  isPrivate: false,
                  language: "Java",
                  license: null,
                  name: "LikeButton",
                  open_issues_count: 15,
                  owner: {
                      avatar_url: "https://avatars.githubusercontent.com/u/1509205?v=4",
                      events_url: "https://api.github.com/users/jd-alexander/events{/privacy}",
                      followers_url: "https://api.github.com/users/jd-alexander/followers",
                      following_url: "https://api.github.com/users/jd-alexander/following{/other_user}",
                      gists_url: "https://api.github.com/users/jd-alexander/gists{/gist_id}",
                      gravatar_id: "",
                      html_url: "https://github.com/jd-alexander",
                      id: 1509205,
                      login: "jd-alexander",
                      node_id: "MDQ6VXNlcjE1MDkyMDU=",
                      organizations_url: "https://api.github.com/users/jd-alexander/orgs",
                      received_events_url: "https://api.github.com/users/jd-alexander/received_events",
                      repos_url: "https://api.github.com/users/jd-alexander/repos",
                      site_admin: false,
                      starred_url: "https://api.github.com/users/jd-alexander/starred{/owner}{/repo}",
                      subscriptions_url: "https://api.github.com/users/jd-alexander/subscriptions",
                      type: "User",
                      url: "https://api.github.com/users/jd-alexander",
                  },
                  stargazers_count: 2948,
                  url: "https://api.github.com/repos/jd-alexander/LikeButton",
                  watchers_count: 2948,
              }
          ]

      }
      
    expect(repoSearchReducer(previousState, callRepoSuccess({query: 'like', data: {...data, page: 1}}, 1))['like'].items).toHaveLength(1);
    
  });

  test('should handle repo information being added to empty state', () => {
    let data =
    {
        total_count: 30,
        incomplete_results: false,
        items: [
            {
                contributors_url: "https://api.github.com/repos/jd-alexander/LikeButton/contributors",
                description: "Twitter's heart animation for Android",
                forks_count: 384,
                full_name: "jd-alexander/LikeButton",
                id: 48503645,
                isPrivate: false,
                language: "Java",
                license: null,
                name: "LikeButton",
                open_issues_count: 15,
                owner: {
                    avatar_url: "https://avatars.githubusercontent.com/u/1509205?v=4",
                    events_url: "https://api.github.com/users/jd-alexander/events{/privacy}",
                    followers_url: "https://api.github.com/users/jd-alexander/followers",
                    following_url: "https://api.github.com/users/jd-alexander/following{/other_user}",
                    gists_url: "https://api.github.com/users/jd-alexander/gists{/gist_id}",
                    gravatar_id: "",
                    html_url: "https://github.com/jd-alexander",
                    id: 1509205,
                    login: "jd-alexander",
                    node_id: "MDQ6VXNlcjE1MDkyMDU=",
                    organizations_url: "https://api.github.com/users/jd-alexander/orgs",
                    received_events_url: "https://api.github.com/users/jd-alexander/received_events",
                    repos_url: "https://api.github.com/users/jd-alexander/repos",
                    site_admin: false,
                    starred_url: "https://api.github.com/users/jd-alexander/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/jd-alexander/subscriptions",
                    type: "User",
                    url: "https://api.github.com/users/jd-alexander",
                },
                stargazers_count: 2948,
                url: "https://api.github.com/repos/jd-alexander/LikeButton",
                watchers_count: 2948,
            },
            {
                contributors_url: "https://api.github.com/repos/jd-alexander/LikeButton/contributors",
                description: "Twitter's heart animation for Android",
                forks_count: 384,
                full_name: "jd-alexander/LikeButton",
                id: 48503645,
                isPrivate: false,
                language: "Java",
                license: null,
                name: "LikeButton",
                open_issues_count: 15,
                owner: {
                    avatar_url: "https://avatars.githubusercontent.com/u/1509205?v=4",
                    events_url: "https://api.github.com/users/jd-alexander/events{/privacy}",
                    followers_url: "https://api.github.com/users/jd-alexander/followers",
                    following_url: "https://api.github.com/users/jd-alexander/following{/other_user}",
                    gists_url: "https://api.github.com/users/jd-alexander/gists{/gist_id}",
                    gravatar_id: "",
                    html_url: "https://github.com/jd-alexander",
                    id: 1509205,
                    login: "jd-alexander",
                    node_id: "MDQ6VXNlcjE1MDkyMDU=",
                    organizations_url: "https://api.github.com/users/jd-alexander/orgs",
                    received_events_url: "https://api.github.com/users/jd-alexander/received_events",
                    repos_url: "https://api.github.com/users/jd-alexander/repos",
                    site_admin: false,
                    starred_url: "https://api.github.com/users/jd-alexander/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/jd-alexander/subscriptions",
                    type: "User",
                    url: "https://api.github.com/users/jd-alexander",
                },
                stargazers_count: 2948,
                url: "https://api.github.com/repos/jd-alexander/LikeButton",
                watchers_count: 2948,
            }
        ]

    }
    let previousState = {"like":{ ...data}};
    console.log({previousState})
    
  expect(repoSearchReducer(previousState, callRepoSuccess({query: 'like', data: {...data[0], page: 2}}, 2))['like'].items).toHaveLength(3);

});