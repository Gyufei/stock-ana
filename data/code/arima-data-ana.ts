export const ArimaDataAnaCode = [
  `
    import warnings
warnings.filterwarnings("ignore")

# 导入第三方库
# coding = utf-8  
import numpy as np
import pandas as pd
from datetime import datetime #datetime库为数据时序定型
import matplotlib.pylab as plt

# 导入数据
file=r"格力电器营业收入.xlsx"
data = pd.read_excel(file, index_col='报表日期')
# 设置营业收入的显示方式为百万元
data['营业收入']=data['营业收入'].values/1000000
print(data)
    `,
  `
    # 2.1 生成季度序列
data['季度']=pd.period_range('2010Q1','2020Q4',freq='Q-JAN') 
# 重新设置数据框索引为“季度”，替换原来的索引“报表日期”
data.set_index('季度',inplace=True) 
# 查看索引是否是时序数据
type(data.index.values[0])
# 查看data前5行
print(data.head(5))
    `,
  `
    # 2.2 绘制原始数据时序图
# 绘制营业收入时序图，设置线型、颜色，绘图区大小
# 创建一个宽度为7英寸、高度为5英寸的图形对象（画布）
plt.figure(figsize = (7,5))

data['营业收入'].plot(kind='line',color='r',markerfacecolor='blue',
          marker='o',rot=30,use_index=True,figsize=(6,4)) 
xlabel_obj=plt.xlabel('季度',fontsize=12)               # 设置x轴标签
ylabel_obj=plt.ylabel('营业收入（百万元）',fontsize=12) # 设置y轴标签
plt.title('营业收入趋势',fontsize=14)                   # 设置图标题
plt.rcParams['font.sans-serif'] = ['SimHei']            # 设置为黑体字
plt.rcParams['axes.unicode_minus'] = False              # 设置坐标轴负数的负号正常显示
plt.legend(["营业收入"])
# 保存图片
plt.savefig("1.png")
# 显示图片
plt.show()
    `,
  `
  # 2.3 绘制对数营业收入（lnIncome）的时序图
# 创建一个宽度为7英寸、高度为5英寸的图形对象（画布）
plt.figure(figsize = (7,5))

income=data['营业收入']
data['lnIncome']=pd.DataFrame(np.log(income)) # 原始序列取对数
# 设置折线图的x轴与y轴
data['lnIncome'].plot(kind='line',color='r',
                      markerfacecolor='blue',marker='o',figsize=(6,4)) 
xlabel_obj=plt.xlabel('季度',fontsize=12)          # 设置x轴标签
ylabel_obj=plt.ylabel('对数营业收入',fontsize=12)  # 设置y轴标签
plt.title('对数营业收入趋势',fontsize=14)          # 设置图标题
# 设置为黑体字
plt.rcParams['font.sans-serif'] = ['SimHei']  
# 设置正常显示字符
plt.rcParams['axes.unicode_minus'] = False
plt.legend(["lnIncome"])
# 保存图片
plt.savefig("2.png")
# 显示图片
plt.show()`,
  `
# 2.4 生成对数营业收入一阶差分（lnIncome_1），绘制lnIncome_1时序图，粗略判断序列平稳性，粗略识别ARIMA(p,d,q)的参数。
plt.figure(figsize = (7,5))
# 绘制对数营业收入的一阶差分时序图
lnIncome=pd.DataFrame(np.log(income))
data['lnIncome_1']=pd.DataFrame(lnIncome.diff().dropna())    # 设置一阶差分，并删除缺失值
data['lnIncome_1'].plot(kind='line',color='r',markerfacecolor='blue',
                marker='o',figsize=(6,4))   # 设置折线图的x轴与y轴
xlabel_obj=plt.xlabel('季度',fontsize=12)   # 设置x轴标签
# 设置y轴的范围
plt.ylim(-3,3)
# 设置y轴标签
ylabel_obj=plt.ylabel('对数营业收入的一阶差分',fontsize=12) 
# 设置图标题
plt.title('对数营业收入的一阶差分趋势',fontsize=14)  
# 设置为黑体字
plt.rcParams['font.sans-serif'] = ['SimHei']  
# 设置正常显示字符
plt.rcParams['axes.unicode_minus'] = False    
plt.legend(["lnIncome_1"])
plt.savefig("3.png")
plt.show()
`,
  `
# 2.5 生成对数营业收入二阶差分（lnIncome_2）序列，绘制lnIncome_2时序图，粗略判断序列平稳性，粗略识别ARIMA(p,d,q)的参数。
plt.figure(figsize = (7,5))
# 做对数营业收入的二阶差分时序图
lnIncome_1=pd.DataFrame(lnIncome.diff().dropna())
data['lnIncome_2']=pd.DataFrame(lnIncome_1.diff().dropna())
data['lnIncome_2'].plot(kind='line',color='r',
                        markerfacecolor='blue',marker='o',figsize=(6,4)) 
xlabel_obj=plt.xlabel('季度',fontsize=12)                    # 设置x轴标签
# 设置y轴的范围
plt.ylim(-3,3)
ylabel_obj=plt.ylabel('对数营业收入的二阶差分',fontsize=12)  # 设置y轴标签
plt.title('对数营业收入的二阶差分趋势',fontsize=14)          # 设置图标题
plt.rcParams['font.sans-serif'] = ['SimHei']                 # 设置为黑体字
plt.rcParams['axes.unicode_minus'] = False                   # 设置正常显示字符
plt.legend(["lnIncome_2"])
plt.savefig("4.png")
plt.show()
`,
  `
# 计算自相关与偏自相关系数

# 导入 statsmodels 库中的时间序列统计工具模块。
import statsmodels.tsa.stattools
# 使用 acf 函数计算 lnIncome 时间序列的自相关系数（ACF）。
# nlags=15：计算最大滞后阶数为 15 的自相关系数。
# fft=True：使用快速傅里叶变换计算自相关系数。
ACF_lnIncome=statsmodels.tsa.stattools.acf(lnIncome,nlags=15,fft=True)
# 使用 pacf 函数计算 lnIncome 时间序列的偏自相关系数（PACF）。
# nlags=15：计算最大滞后阶数为 15 的偏自相关系数。
PACF_lnIncome=statsmodels.tsa.stattools.pacf(lnIncome,nlags=15)
# 打印计算得到的 lnIncome 时间序列的自相关系数。
print('ACF_lnIncome\n',ACF_lnIncome)
# 打印计算得到的 lnIncome 时间序列的偏自相关系数。
print('PACF_lnIncome\n',PACF_lnIncome)
`,

  `
# 使用statsmodels.api接口下的tsa.acf函数，获得Ljung-Box检验统计量，也可获得acf和pacf值
import statsmodels.api as sm  
# 获得自相关系数r，Q统计量及其概率值
# 使用statsmodels库计算lnIncome时间序列的自相关系数、Q统计量和概率值，
r,q,p = sm.tsa.acf(lnIncome.values.squeeze(),
                   fft=True, qstat=True,nlags=15)
print('r\n',r)  # 输出acf值
print('p\n',p)  # 输出Ljung-Box Q统计量的概率值
print('q\n',q)  # 输出Ljung-Box Q统计量

# 使用 np.c_ 对多个一维数组进行按列连接，创建一个新的二维数组 data_1，包括滞后阶数、自相关系数 r、PACF_lnIncome、Q统计量和概率值 p，
# np.r_是按行连接两个矩阵，就是列名称相同，把两矩阵上下相加，要求列数相等，类似于pandas中的concat(axis=0)
# np.c_是按列连接两个矩阵，就是行索引相同，把两矩阵左右相加，要求行数相等，类似于pandas中的merge()
data_1 = np.c_[np.arange(1,16), r[1:16],PACF_lnIncome[1:16],q, p] 
# 创建一个数据框table，设置列名为'lag', 'AC', 'PAC', 'Q', 'Prob(>Q)'
table = pd.DataFrame(data_1, 
                     columns=['lag', "AC", "PAC","Q", "Prob(>Q)"])
# 将'lag'列设置为数据框table的索引，并打印输出                     
print(table.set_index('lag'))
`,
  `
# 对数营业收入的一阶差分（lnIncome_1）的自相关图与偏自相关图

# 导入需要的库
import statsmodels.api as sm  # 导入用于时间序列分析的statsmodels库

# 创建一个图形对象
fig = plt.figure(figsize=(8, 6))  # 创建一个大小为8x6英寸的图形对象

# 添加第一个子图，自动相关系数图（ACF）
ax1 = fig.add_subplot(211)  # 在图形中添加第一个子图，2行1列布局，
# 绘制时间序列数据的自动相关系数图
# lnIncome_1是一个包含对数收入数据的Series或数组，values.squeeze()将数据转换为一维数组
# lags=20表示计算最大滞后阶数为20的自动相关系数
sm.graphics.tsa.plot_acf(lnIncome_1.values.squeeze(), lags=20, ax=ax1)

# 添加第二个子图，偏自相关系数图（PACF）
ax2 = fig.add_subplot(212)  # 在图形中添加第二个子图，2行1列布局，
# 绘制时间序列数据的偏自相关系数图
# lnIncome_1是一个包含对数收入数据的Series或数组
# method='ywm'表示使用Yule-Walker法计算偏自相关系数
# lags=20表示计算最大滞后阶数为20的偏自相关系数
sm.graphics.tsa.plot_pacf(lnIncome_1, method='ywm', lags=20, ax=ax2)

# 保存图表为图像文件
fig.savefig("6.png")
# 显示图形
plt.show()
`,

  `
# 对数营业收入的二阶差分（lnIncome_2）的自相关图与偏自相关图
import statsmodels.api as sm  # 导入用于时间序列分析的statsmodels库
import pandas as pd  # 导入用于数据处理的pandas库
import matplotlib.pyplot as plt  # 导入用于绘图的matplotlib库

# 创建一个宽度为7英寸、高度为5英寸的图形对象（画布）
plt.figure(figsize=(7,5))
# 对数据进行差分操作并创建新的DataFrame
# lnIncome_1是一个包含对数收入数据的DataFrame
# diff()函数计算相邻数据的差分，dropna()函数移除结果中的缺失值
lnIncome_2 = pd.DataFrame(lnIncome_1.diff().dropna())

# 创建一个图形对象
fig = plt.figure(figsize=(8, 6))  # 创建一个大小为8x6英寸的图形对象
# 添加第一个子图，自动相关系数图（ACF）
ax1 = fig.add_subplot(211)  # 在图形中添加第一个子图，2行1列布局，

# 绘制时间序列数据的自动相关系数图
# lnIncome_2是一个包含对数收入数据差分后的DataFrame，values.squeeze()将数据转换为一维数组
# lags=20表示计算最大滞后阶数为20的自动相关系数
sm.graphics.tsa.plot_acf(lnIncome_2.values.squeeze(), lags=20, ax=ax1)

# 添加第二个子图，偏自相关系数图（PACF）
ax2 = fig.add_subplot(212)  # 在图形中添加第二个子图，2行1列布局，
# 绘制时间序列数据的偏自相关系数图
# lnIncome_2是一个包含对数收入数据差分后的DataFrame
# method='ywm'表示使用Yule-Walker法计算偏自相关系数
# lags=20表示计算最大滞后阶数为20的偏自相关系数
sm.graphics.tsa.plot_pacf(lnIncome_2, method='ywm', lags=20, ax=ax2)

# 保存图表为图像文件
fig.savefig("7.png")
# 显示图形
plt.show()
`,
];
