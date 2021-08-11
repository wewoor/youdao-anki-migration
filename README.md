# 有道单词本 Anki 迁移脚本

使用 **Deno** 编写的用于有道单词本往 Anki 迁移脚本

## 使用

- 下载有道单词本

这里需要使用 Youdao 官方提供的数据下载接口
> <http://dict.youdao.com/wordbook/webapi/words?limit=1000&offset=0>

应该是需要账号登录，才能通过该接口下载数据，注意，这里有个 **limit** 参数，我写的是 **1000** ，这个具体按自己的数据来订。

- 执行 `transform.ts `脚本

