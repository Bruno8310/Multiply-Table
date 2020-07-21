### The frist of function -- createMultiplyTable
- Plan：10min
- Do: 12min
- Check: 在编写printMultiplyTable方法中的逻辑设计纠结了2min
- Action: 通过传入两个参数，传递到子方法中进行调用

### The second of function --- isValid
- Plan: 5min
- Do: 7min
- Check: 在对输入参数的范围确定与判断，未考虑到负数问题，花费2min
- Action: 对输入的两个参数进行合理化验证，start 要小于 end,两者都必须在[1-1000]之间

### The third of function --- printMultiplyTable
- Plan: 10min
- Do: 15min
- Check: 在for循环中的处理乘法表的逻辑时 ，考虑到格式化输出的问题，如何打印制表符和换行符，困扰了许久，在调试代码时，无法通过测试用例，纠结了5min.
- Action: 传入两个合理参数，根据需求分析，进行乘法表字符串格式化输出，理论上是可以得到预期结果但无法通过测试用例。