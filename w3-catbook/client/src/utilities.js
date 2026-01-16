/**
 * Utility functions to make API requests.
 * By importing this file, you can use the provided get and post functions.
 * You shouldn't need to modify this file, but if you want to learn more
 * about how these functions work, google search "Fetch API"
 *
 * These functions return promises, which means you should use ".then" on them.
 * e.g. get('/api/foo', { bar: 0 }).then(res => console.log(res))
 */

const BASE_URL = "http://catbook-workshop3.herokuapp.com";

// ex: formatParams({ some_key: "some_value", a: "b"}) => "some_key=some_value&a=b"
function formatParams(params) {
  // iterate of all the keys of params as an array,
  // map it to a new array of URL string encoded key,value pairs
  // join all the url params using an ampersand (&).
  return Object.keys(params)
    .map((key) => key + "=" + encodeURIComponent(params[key]))
    .join("&");
}

// convert a fetch result to a JSON object with error handling for fetch and json errors
function convertToJSON(res) {
  if (!res.ok) {
    throw `API request failed with response status ${res.status} and text: ${res.statusText}`;
  }

  return res
    .clone() // clone so that the original is still readable for debugging
    .json() // start converting to JSON object
    .catch((error) => {
      // throw an error containing the text that couldn't be converted to JSON
      return res.text().then((text) => {
        throw `API request's result could not be converted to a JSON object: \n${text}`;
      });
    });
}

// Helper code to make a get request. Default parameter of empty JSON Object for params.
// Returns a Promise to a JSON Object.
// export function get(endpoint, params = {}) {
//   const fullPath = endpoint + "?" + formatParams(params);
//   return fetch(BASE_URL + fullPath)
//     .then(convertToJSON)
//     .catch((error) => {
//       // give a useful error message
//       throw `GET request to ${fullPath} failed with error:\n${error}`;
//     });
// }


let MOCK_STORIES = [
  { _id: "1", creator_name: "张三", content: "今天天气不错！" },
  { _id: "2", creator_name: "李四", content: "我在学 React，很有趣。" },
  { _id: "3", creator_name: "猫咪", content: "喵喵喵？" },
];

let MOCK_COMMENT = [
  { _id: "1", creator_name: "张三", content: "今天天气不错！" },
  { _id: "2", creator_name: "李四", content: "我在学 React，很有趣。" },
  { _id: "3", creator_name: "猫咪", content: "喵喵喵？" },
];


export function get(endpoint, params = {}) {
  // 模拟从服务器返回的数据
  
  const mockData = {
    "/api/stories": MOCK_STORIES, // 引用全局变量
    "/api/whoami": { _id: "123", name: "我的用户名" },

    "/api/comment": MOCK_COMMENT
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[endpoint] || []);
    }, 500); 
  });
}

// Helper code to make a post request. Default parameter of empty JSON Object for params.
// Returns a Promise to a JSON Object.
// export function post(endpoint, params = {}) {
//   return fetch(BASE_URL + endpoint, {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(params),
//   })
//     .then(convertToJSON) // convert result to JSON object
//     .catch((error) => {
//       // give a useful error message
//       throw `POST request to ${endpoint} failed with error:\n${error}`;
//     });
// }

export function post(endpoint, params = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint === "/api/story") {
        // 2. 模拟后端逻辑：创建一个新对象
        const newStory = {
          _id: Math.random().toString(36).substring(2, 9), // 随机生成一个 ID
          creator_name: "王五", // 实际项目中通常从 whoami 获取
          content: params.content,   // 从传进来的参数中取内容
        };

        // 3. 将新数据推入全局数组的最前面（这样刷新后能看到）
        MOCK_STORIES = [newStory, ...MOCK_STORIES];
        
        console.log("Mock Post 成功:", newStory);
        resolve(newStory); // 返回新创建的对象
      } else {
        resolve({});
      }
    });
  });
}