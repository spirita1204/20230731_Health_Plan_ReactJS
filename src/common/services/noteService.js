import { post } from './_axios';


/**
 * 定義 fetchData 函數，
 * 接收 url 和 data 參數，
 * 用於發送 post 請求，
 * 並且將結果通過 getApiResponse 函數進行處理後返回。
 */
const fetchData = async (url, data) => {
    const response = await post(url, data);
    return response;
};

/**
 * 定義 handleFetchError 函數，
 * 接收一個錯誤對象，
 * 將錯誤信息和布林值 false 封裝到一個數組中。
 */
const handleFetchError = (error) => {
    return [false, error];
};

/**
 * 定義 fetchWrapper 函數，
 * 接收 url 和 data 參數，
 * 透過 fetchData 函數獲取資料，
 * 如果發生錯誤就通過 handleFetchError 函數進行處理。
 */
const fetchWrapper = async (url, data) => {
    try {
        return await fetchData(url, data);
    } catch (error) {
        return handleFetchError(error.message);
    }
};

/**
 * 定義 fetchAccountData 函數，
 * 接收 onSuccess 和 onFailure 兩個回調函數參數，
 * 用於取得轉出帳號，
 * 並進行處理後通過 onSuccess 或 onFailure 回調函數返回。
 */
const fetchAccountData = async (onSuccess, onFailure, onBefore, onFinal) => {
    onBefore && onBefore();
    const url = '/api/v1/movies';
    const [success, msg, responseData, , responseCode] = await fetchWrapper(url);
    if (success) {
        onSuccess && onSuccess(responseData, responseCode);
    } else {
        onFailure && onFailure(msg, responseCode);
    }
    onFinal && onFinal();
};

// 匯出物件
export default {
    fetchAccountData
};