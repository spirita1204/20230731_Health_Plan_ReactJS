import React, { createContext, useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// 定義 initialState 物件，包含表單狀態
const initialState = {
    translate: () => { },
};

// 建立 PremiumContext
const PremiumContext = createContext(initialState);

const PremiumProvider = ({ children }) => {
    /**
    * 這段程式碼是使用 React Hooks 中的 useCallback 來優化 translate 函式的效能。
    * 
    * 當 key 參數發生變化時，translate 函式會重新建立，
    * 而當 t 依賴變化時，translate 函式也會重新建立。
    * 
    * 其中 t 是一個 i18n 函式，用來實現國際化翻譯的功能，
    * 而 { ns } 則是傳遞給 t 函式的選項參數，
    * 用來指定要使用的翻譯資源檔。
    */
    const { t } = useTranslation();

    const translate = useCallback((key) => {
        const props = {
            ns: /PREMIUM\./.test(key) ? 'premium' : 'common',
        };
        return t(key, props);
    }, [t]);

    return (
        <PremiumContext.Provider
            // <PremiumContext.Provider> 是用來提供 PremiumContext 上下文的提供者。這是 React 中上下文的一種用法，它允許你將值傳遞給下層組件，而不必透過手動一層層地傳遞 props。
            value={{
                translate,
            }}
        >
            {children}
        </PremiumContext.Provider>
    );
};

// 指定 PremiumProvider 的 propTypes
PremiumProvider.propTypes = {
    children: propTypes.node
};

export { PremiumProvider, PremiumContext };