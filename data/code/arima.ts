export const SmoothTimeSeriesCode1 = `
# 导入NumPy库，并使用别名np简化命名空间。
import numpy as np
# 从Matplotlib库中导入绘图模块，并使用别名plt简化命名空间。
from matplotlib import pyplot as plt

# 生成1000个服从标准正态分布的随机数，存储在名为white_noise的NumPy数组中，用作白噪声数据。
white_noise = np.random.standard_normal(size=1000)
# 创建一个图形窗口，设置其大小为12x6英寸，用于显示后续绘制的图形。
fig1 = plt.figure(figsize=(12, 6))
# 绘制白噪声数据的折线图。
plt.plot(white_noise)  #绘制白噪声时序图
# 保存图片
fig1.savefig("白噪声数据的折线图.png")
# 显示图形窗口
plt.show()
`;

export const UnSmoothTimeSeriesCode1 = [
  `
# 导入NumPy库，并使用别名np简化命名空间。
import numpy as np
# 从Matplotlib库中导入绘图模块，并使用别名plt简化命名空间。
from matplotlib import pyplot as plt

# 自定义随机游走序列，y(t)=y(t-1)+ε(t)
# 设置随机种子为5，确保每次运行生成的随机数相同，保证结果的可重复性
np.random.seed(5)
# 定义一个函数random_walk，用于生成一个随机游走序列
def random_walk():
    # 生成一个包含10000个元素的随机数列，每个元素服从标准正态分布，用作随机步长
    steps = np.random.standard_normal(size=10000)
    # 将游走序列的第一个元素设置为0，起始位置为原点
    steps[0] = 0
    # 计算给定轴方向上的累计和
    walk = np.cumsum(steps)# 对随机步长序列进行累积求和，得到游走序列walk
    print("walk",walk)
    # 返回游走序列
    return walk

print("创建随机游走序列函数！")
`,
  `
# 调用自定义随机游走序列函数，绘制随机游走图形
fig2 = plt.figure(figsize=(12, 6))
plt.plot(random_walk())
plt.plot(random_walk())
# 保存图片
fig2.savefig("随机游走图形.png")
# 显示图形
plt.show()
`,
];
