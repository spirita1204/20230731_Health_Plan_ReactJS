import i18n from 'i18next';
//import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';// 它用於檢測瀏覽器中的語言設置
import 'intl-pluralrules';// https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
// json file
import common from '../../../app/locales/zh-TW/common.json';
import home from '../../../app/locales/zh-TW/home.json';
import myPlace from '../../../app/locales/zh-TW/myPlace.json';
import note from '../../../app/locales/zh-TW/note.json';
import report from '../../../app/locales/zh-TW/report.json';
import premium from '../../../app/locales/zh-TW/premium.json';
import food from '../../../app/locales/zh-TW/food.json';

/**
 * 參考
 * https://www.i18next.com/how-to/add-or-load-translations#add-on-init
 */
export const languageResources = {
    'zh-TW': {
        common: common,
        home: home,
        myPlace: myPlace,
        note: note,
        report: report,
        premium: premium,
        food: food,
    }
};
/**
 * 參考     
 * https://ithelp.ithome.com.tw/articles/10290575?sc=rss.iron
 * https://www.i18next.com/overview/configuration-options
 */
i18n
    //.use(Backend)
    .use(LanguageDetector)// 
    .use(initReactI18next)
    .init({
        // 預先加載
        preload: ['zh-US', 'zh-CN', 'zh-TW'],
        // 當前切換的語言沒有對應的翻譯則使用這個語言
        fallbackLng: 'zh-TW',
        // 將信息級別記錄到控制台輸出，幫助查找加載不工作的問題
        debug: true,
        // 預設語言
        lng: 'zh-TW',
        // files
        ns: [
            'common', 
            'home',
            'myPlace',
            'note', 
            'report',
            'premium',
            'food',
        ],
        // backend: { 
        //     // 設定語系檔案的路徑, 會以GET的方式跟 server 要檔案，lng = 語系代碼 ns = namespace
        //     loadPath: '../../../app/locales/{{lng}}/{{ns}}.json'
        // },
        resources: languageResources,
        interpolation: {
            // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
            escapeValue: false,
        },
    });

export default i18n;