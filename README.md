# 留言板系統

這是雲書苑教育科技有限公司 AI Coding 的測驗項目一。

此專案建立了一個全端留言板應用程式，使用者可以在前端留下姓名和訊息，後端會將資料儲存至 Supabase 雲端資料庫，並將所有留言顯示在頁面上。

## ✨ 專案連結

您可以在這裡查看線上版本：[請在此貼上您的 Render 部署網址]

## 🛠️ 使用工具與技術

* **前端**: HTML, CSS, JavaScript
* **後端**: Node.js, Express.js
* **資料庫**: Supabase
* **部署平台**: Render

## 🚀 如何在本地端運行

1.  複製此專案：
    ```
    git clone [請在此貼上您的 GitHub 儲存庫網址]
    ```

2.  進入專案目錄：
    ```
    cd [請在此貼上您的專案資料夾名稱]
    ```

3.  安裝依賴套件：
    ```
    npm install
    ```

4.  在根目錄建立一個 `.env` 檔案，並填入您的 Supabase 專案金鑰：
    ```
    SUPABASE_URL="YOUR_SUPABASE_URL"
    SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

5.  啟動伺服器：
    ```
    npm start
    ```

6.  在瀏覽器打開 `http://localhost:3000`

## 部署方式

此專案使用 Render 進行部署。 部署時，需要在 Render 的後台設定 `SUPABASE_URL` 和 `SUPABASE_ANON_KEY` 這兩個環境變數，以連接到 Supabase 資料庫。
