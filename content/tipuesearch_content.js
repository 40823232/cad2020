var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以git子模塊添加\xa0 https://github.com/mdecourse/cmsimde  \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '各週進度', 'text': '', 'tags': '', 'url': '各週進度.html'}, {'title': 'W3-HW1', 'text': 'inventor \n \n \n 零件繪圖練習-2 \n \n \n 1 -1 \n \n 1-2 \n \n 1-3 \n \n 1-4 \n \n', 'tags': '', 'url': 'W3-HW1.html'}, {'title': 'W4-w6', 'text': '\n \n', 'tags': '', 'url': 'W4-w6.html'}, {'title': 'w7-w9', 'text': '', 'tags': '', 'url': 'w7-w9.html'}, {'title': 'NOTE', 'text': '', 'tags': '', 'url': 'NOTE.html'}, {'title': 'ZOOMIT', 'text': 'CTRL+1 縮放螢幕(能夠調整縮放倍率) \n Zoom 模式的時候，按下 滑鼠左鍵 可以啟動「 Draw 模式」 \n 退出 Zoom 模式，可以按 滑鼠右鍵 ，或者是 ESC \n \n CTRL+2 進入 DRAW 模式(非縮放模式) \n CTRL+Z (退回上一步) \n 隨意形狀 \xa0 - 直接壓住 滑鼠左鍵 然後滑鼠移動想要的線條。 \n 直線 \xa0- 壓住 SHIFT 然後 滑鼠左鍵 然後話要的線條。 \n 方塊 \xa0- 壓住 CTRL 然後 滑鼠左鍵 畫出方塊。 \n 圓圈 \xa0- 壓住 TAB 然後 滑鼠左鍵 畫出圓圈。 \n 箭頭 \xa0 - 壓住 CTRL+SHIFT 然後 滑鼠左鍵 畫出有箭頭的線。 \n 按住 T 能夠打字(英文) \n \n', 'tags': '', 'url': 'ZOOMIT.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};