const fs = require('fs');

// 读取数组文件
const array = require('./policy.json');

function generateIdJSON() {
  array.forEach((folder) => {
    folder.children.forEach((child) => {
      const id = child.id;
      const fileName = `${id}.json`;

      const content = {
        id: child.id,
        name: child.name,
      };

      // 检查文件是否已存在
      if (!fs.existsSync(fileName)) {
        // 文件不存在,生成新文件
        fs.writeFileSync(fileName, JSON.stringify(content));
      } else {
        // 文件存在,跳过
        console.log(`File ${fileName} already exists, skipped`);
      }
    });
  });
}

generateIdJSON();
