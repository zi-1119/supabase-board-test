require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch'); // 為了測試，我們繼續使用這個套件

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// 快速檢查，確保 .env 檔案有讀取到
if (!supabaseUrl || !supabaseKey) {
    console.error("錯誤： .env 檔案中缺少 Supabase URL 或 Key。");
    process.exit(1); // 結束程式
}

console.log("正在嘗試連線至 Supabase...");

const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        fetch: fetch,
    },
});

async function testConnection() {
    try {
        // 我們只嘗試讀取一筆資料來測試
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .limit(1); 

        if (error) {
            console.error("Supabase 回傳了一個錯誤:", error);
        } else {
            console.log("✅ 成功！與 Supabase 的連線正常。");
            console.log("收到的範例資料:", data);
        }
    } catch (e) {
        console.error("發生了一個關鍵性的錯誤:", e);
    }
}

// 執行測試函式
testConnection();