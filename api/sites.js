// /api/sites.js
const path = require('path');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  try {
    // 构建 JSON 文件的路径
    const jsonPath = path.join(__dirname, 'json', 'sites.json');

    // 读取 JSON 文件
    const data = await fs.readFile(jsonPath, 'utf8');
    const sites = JSON.parse(data);

    // 生成 HTML 字符串
    const html = sites.map(site => `<li>${site}</li>`).join('');

    // 发送响应
    res.status(200).send(`<ul>${html}</ul>`);
  } catch (error) {
    // 处理任何读取或解析错误
    res.status(500).send('服务器错误');
  }
};
