export const SmoothTimeSeriesCode = `
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

export const RandomWalkCode = [
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

export const MultiRandomWalkCode = `
import matplotlib.pyplot as plt
import numpy as np
# 定义变量nwalks和nsteps分别为游走次数和步数
nwalks = 8
nsteps = 500
# 生成一个大小为(nwalks, nsteps)的随机整数数组draws，每个元素取值为0或1
draws = np.random.randint(0, 2, size=(nwalks, nsteps)) # 0 or 1
# 将draws中大于0的元素置为1，小于等于0的元素置为-1，得到每一步的步长steps
steps = np.where(draws > 0, 1, -1) # 每一次的步长
# 对每一次游走的步长进行累积求和，得到游走序列walks
walks = steps.cumsum(1) # 累积步数
# 创建一个图形窗口
fig3 = plt.figure()
# 在图形窗口中添加一个子图，编号为111，用于绘制游走序列的折线图。
ax = fig3.add_subplot(111)
# 遍历每一次游走，将游走序列绘制在子图上
for i in range(nwalks):
    ax.plot(walks[i])

# 保存图片
fig3.savefig("多个随机游走图形.png")
# 显示图形窗口
plt.show()
`;

export const ExRandomWalkCode = [
  `
import numpy as np
from matplotlib import pyplot as plt

# 生成带漂移项的随机游走序列

# 设置随机种子为123，确保每次运行生成的随机数序列相同，保证结果的可重复性
np.random.seed(123)
# 生成服从标准正态分布的随机数列y，包含50个元素，作为随机游走序列的噪声项
y = np.random.standard_normal(size=50)
# 生成带正漂移项的随机游走序列y1，漂移项为0.2，每一步将随机数y累积并加上漂移项0.2
y1 = np.cumsum(0.2+y) # 生成带正漂移项的随机游走序列
# 生成带负漂移项的随机游走序列y2，漂移项为-0.2，每一步将随机数y累积并加上漂移项-0.2
y2 = np.cumsum(-0.2+y) # 生成带负漂移项的随机游走序列
# 打印生成的y1序列，展示带正漂移项的随机游走序列
print('y1:',y1)
# 打印生成的y序列，展示噪声项序列
print('y:',y)
# 生成一个初始值为0.2，等差为0.2的数组l1，用于绘制y1序列的漂移参考线
l1 = np.cumsum(0.2 * np.ones(len(y1)))  # 生成初始值为0.2，等差为0.2的数组
# 生成一个初始值为-0.2，等差为-0.2的数组l2，用于绘制y2序列的漂移参考线
l2 = np.cumsum(-0.2 * np.ones(len(y2))) # 生成初始值为-0.2，等差为-0.2的数组
# 打印生成的l1序列，展示带正漂移项的参考线
print('l1:',l1)
`,
  `
# 绘制带漂移项的随机游走时序图
# 创建一个图形窗口，设置大小为12x6英寸
fig4 = plt.figure(figsize=(12, 6))
# 在图形窗口中绘制带正漂移项的随机游走序列y1，使用默认颜色和线条样式
plt.plot(y1) 
plt.plot(y2)
# 在图形窗口中绘制带正漂移项的参考线l1，使用默认颜色和线条样式
plt.plot(l1) 
plt.plot(l2)

# 保存图片
fig4.savefig("带漂移项的随机游走时序图.png")
# 显示图形窗口，展示带漂移项的随机游走时序图
plt.show()
`,
];

export const ArpCode = [
  `
  # 导入自回归过程

# 从 statsmodels.tsa.ar_model 模块中导入 AutoReg(自回归AR模型）类,用于时间序列数据的建模和预测。
from statsmodels.tsa.ar_model import AutoReg
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

# 生成N(0,1)随机正态分布（白噪声）
# 设置相同的随机数种子，确保在不同的运行中得到相同的随机数序列。
np.random.seed(12345) 
# 随机产生100个服从标准正态分布（均值为 0，标准差为 1）的随机数
noise = np.random.randn(100)   
# 标准化处理

# 对随机数进行白噪声化处理，将其标准化为均值为 0，标准差为 1 的白噪声'wnoise' 数组。
# 首先，从 'noise' 数组中减去均值，然后除以标准差，得到标准化后的白噪声 'wnoise' 数组。
# 白噪声是一种具有均值为零、方差为一的随机信号，通常用于模拟随机性或噪声。
wnoise = (noise-np.mean(noise))/np.std(noise)  

print("生成白噪声序列")
  `,
  `
  # 生成AR(1)线性序列 y(t)=0.5y(t-1)+ε(t)
# 初始值
y = [10]
# 循环迭代，生成时间序列数据
for i in range(100):
    # 根据差分方程生成时间序列的下一个值。
    # 差分方程：y_(i+1) = 0.5 * y_i + wnoise_i，其中 y_i 为当前值，wnoise_i 为白噪声。
    y1 = 0.5*y[i]+wnoise[i]
    # 将新生成的值添加到时间序列 'y' 中。
    y.append(y1)
# 打印生成的时间序列数据。
print(y)
  `,
  `
  # 从Pandas的plotting模块中导入lag_plot函数，用于绘制时间序列的滞后图。
from pandas.plotting import lag_plot

# 创建一个新的图形窗口，用于绘制自相关图
plt.figure(figsize=(8,4))

# 将随机数列y转换成Series数据类型，绘制延迟为1的时间序列图，即y与y的前一个时间步之间的散点图
lag_plot(pd.Series(y), lag=1)

# 保存图片
plt.savefig("时间序列的滞后图.png")
# 显示绘制的时间序列图
plt.show()
  `,
  `
  # 创建一个1行4列的图形窗口，其中每个子图的大小为10x3英寸，使用共享的x和y轴刻度，设置图形分辨率为100dpi
fig5, axes = plt.subplots(1, 4, figsize=(10,4), sharex=True, sharey=True, dpi=100) # 1行4列的画布
# 循环遍历4次，分别绘制不同滞后阶数的时间序列滞后图
for i in range(4):
    # 将随机数列y转换成Series数据类型, 在第i个子图上绘制延迟为i+1的时间序列滞后图
    lag_plot(pd.Series(y),lag=i+1, ax=axes[i])
    # 在第i个子图上设置标题，标题显示当前滞后阶数i+1
    axes[i].set_title(f'Lag{i+1}')
# 保存图片
fig5.savefig("不同滞后阶数的时间序列滞后图.png")
# 显示图形
plt.show()
  `,
  `
  # 自相关图的绘制，可以使用pandas库的autocorrelation_plot函数,横轴是滞后阶数，纵轴是自相关系数。
# 从Pandas的plotting模块中导入autocorrelation_plot函数，用于绘制时间序列的自相关图。
from pandas.plotting import autocorrelation_plot

# 创建一个新的图形窗口，用于绘制自相关图
plt.figure(figsize=(8,4))

# 绘制y序列的自相关图，用于展示时间序列数据之间的自相关性
autocorrelation_plot(y)
# 保存图片
plt.savefig("时间序列的自相关图.png")
# 显示绘制的自相关图
plt.show()
  `,
  `
  #自相关图的绘制，也可以使用statsmodels库的plot_acf, plot_pacf函数

# 导入自相关和偏自相关图绘制函数。
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
# 导入 Pandas 库，通常用 pd 作为别名。
import pandas as pd

# 创建一个 包含2 行 1 列的图形窗口，用于绘制自相关和偏自相关图。
fig6, axes = plt.subplots(2, 1)

# 使用 plot_acf() 函数绘制时间序列数据的自相关图。
# 其中pd.Series(y) 将列表 'y' 转换为 Pandas Series 对象，ax 参数指定要绘制到的子图，lags 参数设置最大滞后阶数。
plot_acf(pd.Series(y), ax=axes[0],lags=9)

# 使用 plot_pacf() 函数绘制时间序列数据的偏自相关图。
# 其中pd.Series(y) 将列表 'y' 转换为 Pandas Series 对象，ax 参数指定要绘制到的子图，lags 参数设置最大滞后阶数, 'method' 参数设置为 'ywm'。
plot_pacf(pd.Series(y), ax=axes[1],lags=9,method='ywm')
# 调整子图的布局，以确保子图之间的间距适当。
plt.tight_layout()

# 保存图片
fig6.savefig("时间序列的自相关图和偏自相关图.png")
# 显示绘制的图形。
plt.show()
  `,
  `
  # 1阶AR模型拟合（OLS）

# 创建自回归模型 AR(1) 并进行拟合。
# 使用 AutoReg() 函数创建 AR(1) 模型，传入时间序列数据 'y' 和滞后阶数 1。然后使用 fit() 方法拟合模型，得到 AR1_model 对象。
AR1_model = AutoReg(y, 1,old_names=False).fit()

# 模型预测第2到第202个时间点的数据

# 使用拟合好的 AR(1) 模型进行预测。
# 使用 predict() 方法在时间步 1 到 100 之间进行预测，返回预测值数组。
predict = AR1_model.predict(1,100)  

# 计算残差
# 残差是观测值与预测值之间的差异，这里使用原始数据 'y' 减去预测值 'predict' 得到残差。
# 由于预测值从时间步 1 开始，所以从 'y' 的第二个值开始计算残差（y[1:]）。
residual = y[1:]-predict

print(f"残差：{residual}")
  `,
  `
  # 1阶AR模型拟合（OLS）

# 创建自回归模型 AR(1) 并进行拟合。
# 使用 AutoReg() 函数创建 AR(1) 模型，传入时间序列数据 'y' 和滞后阶数 1。然后使用 fit() 方法拟合模型，得到 AR1_model 对象。
AR1_model = AutoReg(y, 1,old_names=False).fit()  #实例化

# 模型预测第2到第202个时间点的数据

# 使用拟合好的 AR(1) 模型进行预测。
# 使用 predict() 方法在时间步 1 到 100 之间进行预测，返回预测值数组。
predict = AR1_model.predict(1,100)  

# 计算残差
# 残差是观测值与预测值之间的差异，这里使用原始数据 'y' 减去预测值 'predict' 得到残差。
# 由于预测值从时间步 1 开始，所以从 'y' 的第二个值开始计算残差（y[1:]）。
residual = y[1:]-predict

# 导入 Matplotlib 库，通常用 plt 作为别名。
import matplotlib.pyplot as plt
# 创建一个新的图形窗口。
plt.figure()
# 在图形窗口中创建子图，共两行一列，并定位到第一个子图。
plt.subplot(211) #设置2*1子图布局第第一幅图

# 绘制原始时间序列数据。
# 使用 plt.plot() 函数绘制时间序列数据 'y' 的子序列，从索引 2 开始（y[2:]）。
plt.plot(y[2:]) 

# 绘制 AR(1) 模型的预测值。
# 使用 plt.plot() 函数绘制预测值 'predict'，predict是在时间步 1 到 100 之间预测的值。
plt.plot(predict)

# 在图形窗口中创建子图，共两行一列，并定位到第二个子图。
plt.subplot(212) # 设置2*1子图布局第第二幅图

# 绘制残差。
# 使用 plt.plot() 函数绘制残差值 'residual'，这是观测值与预测值之间的差异。
plt.plot(residual)

# 保存图片
plt.savefig("AR模型的预测值和残差.png")
# 显示绘制的图形。
plt.show()
  `,
  `
  # 查看残差的分布
# 导入 scipy 的统计模块 stats，并将其命名为 st
import scipy.stats as st   # 统计分析库
# 创建一个图形窗口对象
plt.figure()

# 绘制残差数据的归一化直方图，分成20个区间，使用绿色条形图表示。将返回的三个值：直方图的数量、区间边界、和绘制的图形对象赋值给 n、bins、patches
# residual：包含残差数据的数组； 20：将数据分成 20 个区间； density=True：对直方图进行归一化，使得总面积等于 1 ；histtype='bar'：使用条形图表示直方图； facecolor='green'：设置直方图的颜色为绿色
n, bins, patches = plt.hist(residual,20, density=True, histtype='bar', facecolor='green')
# 计算残差的均值，并赋值给变量power_mean
power_mean = np.mean(residual)  # 均值约为0
# 计算残差的标准差，并赋值给变量power_std
power_std = np.std(residual)    # 方差约为1
# 使用正态分布的概率密度函数（PDF）拟合数据，计算并绘制对应的概率密度值，然后将结果赋值给变量 y
y = st.norm.pdf(bins, power_mean, power_std)  # 拟合概率密度函数（PDF）
# 绘制拟合后的概率密度函数（PDF）曲线，使用给定的区间边界和对应的概率密度值，曲线颜色为黑色
plt.plot(bins, y, color='k')

# 在图上绘制文本标签，显示计算出的均值和标准差。 文本标签的 x 和 y 坐标位置：-3, 0.35，
plt.text(-2.9, 0.35, f'μ={power_mean:.3f}\nσ={power_std:.3f}')

# 保存图片
plt.savefig("残差分布图.png")
# 显示绘制的图形。
plt.show()
  `,
  `
  # 从 statsmodels.graphics.tsaplots 导入绘制自相关图和偏自相关图的函数
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
# 导入 pandas 数据处理库，并命名为pd
import pandas as pd
# 创建一个 包含2 行 1 列的图形窗口，用于绘制自相关和偏自相关图。
fig, axes = plt.subplots(2,1)

# 在第一个子图上绘制时间序列数据的自相关函数图，最多计算并显示9个滞后值的自相关系数。
# pd.Series(y)：将数据 'y' 转换为 pandas Series 格式
# ax=axes[0]：在第一个子图 axes[0] 上绘制图形
# lags=9：计算并显示最多 9 个滞后值的自相关系数
plot_acf(pd.Series(y), ax=axes[0],lags=9)

# 在第二个子图上绘制时间序列数据的偏自相关函数图，计算并显示最多9个滞后值的偏自相关系数，使用 Yule-Walker 方法进行估计。
# pd.Series(y)：将数据 'y' 转换为 pandas Series 格式
# ax=axes[1]：在第二个子图 axes[1] 上绘制图形
# lags=9：计算并显示最多 9 个滞后值的偏自相关系数
# method='ywm'：使用 Yule-Walker 方法估计偏自相关系数
plot_pacf(pd.Series(y), ax=axes[1],lags=9,method='ywm')
# 调整子图布局，以确保子图之间的适当间距和显示
plt.tight_layout()

# 保存图片
plt.savefig("自相关函数图和偏自相关图.png")
# 显示绘制的图形
plt.show()
  `,
];

export const MaCode = [
  `
  # 引入statsmodels和scipy.stats用于画QQ和PP图

# 导入 scipy 的stats统计模块，并命名为scs,用于执行各种统计计算和分析
import scipy.stats as scs
# 导入 statsmodels 的时间序列分析模块，并命名为smt, 提供了时间序列分析的工具和函数
import statsmodels.tsa.api as smt  # 调取时间序列接口
# 导入 statsmodels 的核心模块api，用于拟合和分析统计模型
import statsmodels.api as sm
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
print("导入所需的第三方库")
  `,
  `
  # 自定义时间序列数据时序图、acf、pacf、QQ图、pp图集成输出函数
def tsplot(y, lags=None, figsize=(16, 10), style='bmh'):
    if not isinstance(y, pd.Series):                 # 判断y序列是否为指定类型
        y = pd.Series(y)                             # 如果不是指定类型，转成Series序列类型
    with plt.style.context(style):                   # 使用指定的绘图风格
        fig = plt.figure(figsize=figsize)            # 创建一个新的绘图对象
    # mpl.rcParams['font.family'] = 'Ubuntu Mono'
        layout = (3, 2)
        # 以非等分的形式对画布进行切分，并按照绘图区域的大小来展示最终绘图结果。
        ts_ax = plt.subplot2grid(layout, (0, 0), colspan=2)   # 创建主时序图的子图
        acf_ax = plt.subplot2grid(layout, (1, 0))             # 创建 ACF 图的子图  
        pacf_ax = plt.subplot2grid(layout, (1, 1))            # 创建 PACF 图的子图
        qq_ax = plt.subplot2grid(layout, (2, 0))              # 创建 QQ 图的子图
        pp_ax = plt.subplot2grid(layout, (2, 1))              # 创建 PP 图的子图
        y.plot(ax=ts_ax)                                      # 在主时序图子图上绘制时间序列数据
        ts_ax.set_title('Time Series Analysis Plots')         # 设置主时序图子图的标题
        smt.graphics.plot_acf(y, lags=lags, ax=acf_ax, alpha=0.5)     # 绘制 ACF 图
        smt.graphics.plot_pacf(y, lags=lags, ax=pacf_ax, alpha=0.5,method='ywm')   # 绘制 PACF 图
        sm.qqplot(y, line='s', ax=qq_ax)                              # 绘制 QQ 图
        qq_ax.set_title('QQ Plot')                                    # 设置 QQ 图子图的标题
        scs.probplot(y, sparams=(y.mean(), y.std()), plot=pp_ax)      # 绘制 PP 图
        plt.tight_layout()                                            # 自动调整子图布局
    return fig  # 返回绘图函数

print("自定义时间序列数据时序图、acf、pacf、QQ图、pp图集成输出函数")
  `,
  `# Simulate an MA(1) process
# 导入 scipy 的统计模块，用于执行各种统计计算和分析
import scipy.stats as scs
# 设置时间序列的长度为 200
n = int(200)

# 模拟一个MA(1)过程：y(t)=ε(t)+0.6*ε(t-1) 
# set the AR(p) alphas equal to 0
# 设置 AR 模型的系数 alpha
alphas = np.array([0.])
# 设置 MA 模型的系数 beta
betas = np.array([0.6])

# add zero-lag and negate alphas
# 定义 ARMA 模型的 AR 部分系数和 MA 部分系数
# 定义 AR 部分系数
# np.r_是按行（row）连接两个矩阵，即上下堆叠；np.c_是按(column)列连接两个矩阵，即左右相加;
ar = np.r_[1, -alphas] 
# 定义 MA 部分系数
ma = np.r_[1, betas]   
ma1 = smt.arma_generate_sample(ar=ar, ma=ma, nsample=n) # 生成 ARMA(1,1) 模型的时间序列数据

# 使用自定义函数绘制 MA(1) 时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图
tsplot(ma1, lags=30)

# 保存图片
plt.savefig("时间序列数据的时序图、ACF、PACF、QQ图和 PP图1.png")
# 显示绘制的图形
plt.show()
  `,
];

export const ArmaModelCode = [
  `
  # 导入 NumPy 数学库，用于数组操作和数值计算
import numpy as np
# 导入 statsmodels 核心模块，用于拟合和分析统计模型
import statsmodels.api as sm
# 导入 pandas 数据处理库，用于数据操作和处理
import pandas as pd
# 从 statsmodels.tsa.arima_process 导入生成 ARMA 模型时间序列数据的函数
from statsmodels.tsa.arima_process import arma_generate_sample # 调取arima模型数据产生过程函数
# 从 statsmodels.tsa.arima.model 导入 ARIMA 模型类
from statsmodels.tsa.arima.model import ARIMA

# 设置随机种子
np.random.seed(12345) 

# 模拟ARMA模型
arparams = np.array([.75, -.25]) # 设置 AR(2) 模型的自回归系数参数
maparams = np.array([.65, .35])  # 设置 MA(2) 模型的移动平均系数参数

arparams = np.r_[1, -arparams]   # 将 AR(2) 参数转换为 ARMA 模型的参数
maparams = np.r_[1, maparams]    # 将 MA(2) 参数转换为 ARMA 模型的参数
# 设置生成的时间序列的长度
nobs = 510
# 使用设置的参数产生 ARMA 时间序列数据
y = arma_generate_sample(arparams, maparams, nobs)
print("已产生ARMA 时间序列数据")
  `,
  `
  # 使用statsmodels库日期范围字符串创建1980年1月到当前的日期序列,长度为 nobs（设定的时间序列长度）,并指定频率为月度（'M'）
# dates = sm.tsa.datetools.dates_from_range('1980m1', length = nobs) #产生月份序列
# 使用 pd.date_range 创建日期序列，指定频率为月度（'M'）
dates = pd.date_range(start='1980-01-01', periods=nobs, freq='M')

# 使用生成的时间序列数据 'y' 创建 pandas Series，以日期序列 'dates' 作为索引
y = pd.Series(y, index=dates)
# 创建 ARMA 模型对象，指定ARMA(p, q)的阶数 (2, 0, 2) ，不包含趋势项
arma_mod = ARIMA(y, order=(2,0,2),trend='n') #arma模型实例化
# 对 ARMA 模型进行拟合，获取拟合结果对象
arma_res = arma_mod.fit() #获得arma模型拟合值
# 打印 ARMA 模型拟合结果的摘要信息
print(arma_res.summary()) # 输出arma模型结果
  `,
  `
  # 导入绘图库 matplotlib
import matplotlib.pyplot as plt
# 从 statsmodels.graphics.tsaplots 导入绘制预测图的函数
from statsmodels.graphics.tsaplots import plot_predict

# 创建一个图形和坐标轴对象，设置图形的尺寸为 10x8 英寸
fig, ax = plt.subplots(figsize=(10, 8)) # 设置绘图区大小
# 使用 ARMA 模型的拟合结果 'arma_res'，绘制预测图
# 设置预测的起始日期为 "2019-06-30"，终止日期为 "2022-10-31"，并在指定的坐标轴上绘制图形
fig = plot_predict(arma_res, start="2019-06-30", end="2022-10-31", ax=ax) # 绘制某段时期的拟合数据时序图
# 设置图例在左上角
legend = ax.legend(loc="upper left")

# 保存图片
plt.savefig("预测图.png")
# 显示绘制的图形
plt.show()
  `,
  `
  # 使用自定义函数绘制时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图, 计算 ACF 和 PACF 时将考虑最多 30 个滞后值。
tsplot(y, lags=30)
# 保存图片
plt.savefig("时间序列数据的时序图、ACF、PACF、QQ图和PP图2.png")
# 显示绘制的图形
plt.show()
  `,
];

export const BuildModelCode = [
  `# 对数营业收入（lnIncome）的自相关图与偏自相关图
  import statsmodels.api as sm
  fig = plt.figure(figsize=(8, 6))
  ax1 = fig.add_subplot(211)
  fig = sm.graphics.tsa.plot_acf(lnIncome.values.squeeze(), lags=20, ax=ax1)
  ax2 = fig.add_subplot(212)
  fig = sm.graphics.tsa.plot_pacf(lnIncome, method='ywm',lags=20, ax=ax2)
  fig.savefig("5.png")`,
  `# 利用Ljung-Box Q统计量，检验lnIncome序列的自相关性
import statsmodels.api as sm
from statsmodels.stats.diagnostic import acorr_ljungbox 
lag=range(1,15,1)
print(sm.stats.diagnostic.acorr_ljungbox(lnIncome_1, 
                    lags=lag,boxpierce=True,return_df=True)) 
  `,
];
