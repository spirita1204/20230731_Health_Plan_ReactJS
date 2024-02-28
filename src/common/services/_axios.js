import axios from 'axios';

// 創建 Axios 實例，設定預設的config物件
const axiosInstance = axios.create({
  baseURL: 'http://192.168.135.116:8080',
  // 設置默認的請求標頭
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

/**
 * 封裝 Axios 的 GET 請求
 * @param {string} url API endpoint 的網址
 * @param {Object} params 請求參數，預設為空物件
 * @param {Object} options Axios 的其他設定選項，預設為空物件
 * @returns {Promise} 回傳 Promise 物件
 */
export function get(url, params = {}, options = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url: url, // 請求的 API endpoint 網址
      method: 'GET', // 請求方法
      ...options, // 其他設定選項，例如 headers
      params // 請求參數
    }).then(response => {
      resolve(response.data); // 回傳 API 回應的資料
    }).catch(err => {
      reject(err); // 回傳錯誤訊息
    });
  });
}

/**
 * 封裝 Axios 的 POST 請求
 * @param {string} url - API endpoint 的網址
 * @param {object} data - 要發送的數據（預設為空對象）
 * @returns {Promise<object>} - 回傳 Promise 物件
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, { Data: data })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * 測試打API
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
export function postTest(url, data) {
  return new Promise((resolve, reject) => {
    axios.post('http://192.168.135.116:8080/api/v1/movies')
      .then((response) => {
        console.log('PostTest_response ');
        resolve([
          true,
          'Request successful',
          'Response', // 假設 response 是您想要返回的数据
          200 // 假設状态码是 200
        ]);
      })
      .catch((error) => {
        console.log(error, 'PostTest_error');
        reject([
          false,
          'Request failed',
          null,
          error.code // 假設从错误对象中获取状态码
        ]);
      });
  });
}