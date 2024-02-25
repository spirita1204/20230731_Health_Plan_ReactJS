import { useReducer, useCallback } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, errorMsg: action.errorMsg }
                }
            };
        case 'SET_FORM_DATA':
            return {
                ...state,
                inputs: action.inputs
            };
        default:
            return state;
    }
};

/**
 * 用於管理表單狀態和輸入處理的自定義鈎子。
 *
 * @param {Object} initialInput - 初始的表單輸入數據。
 * @returns {[Object, Function, Function]} 包含表單狀態、輸入處理函數和設置表單數據函數的陣列。
 *
 * @typedef {Object} FormState
 * @property {Object} inputs - 表單輸入數據的物件。
 *
 * @typedef {Function} InputHandler
 * @param {string} id - 輸入字段識別符。
 * @param {string} value - 輸入的新值。
 * @param {string} [errorMsg] - 可選的錯誤消息（如果有）。
 * @returns {boolean} 如果沒有錯誤消息，則返回 `true`，否則返回 `false`。
 *
 * @typedef {Function} SetFormData
 * @param {Object} inputData - 新的表單輸入數據。
 */
const useForm = (initialInput) => {
    const [formState, dispatch] = useReducer(formReducer, { inputs: initialInput });

    /**
     * 處理輸入更改並更新表單狀態。
     *
     * @param {string} id - 輸入字段識別符。
     * @param {string} value - 輸入的新值。
     * @param {string} [errorMsg] - 可選的錯誤消息（如果有）。
     * @returns {boolean} 如果沒有錯誤消息，則返回 `true`，否則返回 `false`。
     */
    const inputHandler = useCallback((id, value, errorMsg = '') => {
        dispatch({ type: 'INPUT_CHANGE', value: value, inputId: id, errorMsg: errorMsg });
        return errorMsg ? false : true;
    }, []);

    /**
     * 設置整個表單數據。
     *
     * @param {Object} inputData - 新的表單輸入數據。
     */
    const setFormData = useCallback((inputData) => {
        dispatch({ type: 'SET_FORM_DATA', inputs: inputData });
    }, []);

    return [formState, inputHandler, setFormData];
};

export default useForm;