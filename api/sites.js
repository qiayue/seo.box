// /api/sites.js
const path = require('path');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  // 初始化一个用于存储时间戳的数组
  let timestamps = [];

  try {
    // 记录开始时间
    timestamps.push({ step: 'Start', timestamp: Date.now() });

    // 构建 JSON 文件的路径
    const jsonPath = path.join(__dirname, 'json', 'sites.json');
    timestamps.push({ step: 'Path Built', timestamp: Date.now() });

    // 读取 JSON 文件
    const data = await fs.readFile(jsonPath, 'utf8');
    timestamps.push({ step: 'File Read', timestamp: Date.now() });

    // 解析 JSON 数据
    const sites = JSON.parse(data);
    timestamps.push({ step: 'JSON Parsed', timestamp: Date.now() });

    // 生成 HTML 字符串
    const html = sites.map(site => `<li>${site}</li>`).join('');
    timestamps.push({ step: 'HTML Generated', timestamp: Date.now() });

    // 发送响应
    res.status(200).send({ html: `<ul>${html}</ul>`, timestamps });
  } catch (error) {
    // 处理任何读取或解析错误
    timestamps.push({ step: 'Error Occurred', timestamp: Date.now() });
    res.status(500).send({ error: '服务器错误', timestamps });
  }
};
