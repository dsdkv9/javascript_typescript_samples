import pytest
def calculator(a, b, operation):
    if "add" == operation:
        result = a+b
    elif "sub" == operation:
        result = a - b
    elif "mul"==operation:
        result = a*b
    elif "div"==operation:
        result=a/b
    return result
print(calculator(10, 20, "add"))
print(calculator(10, 21, "sub"))
print(calculator(10, 21, "mul"))
print(calculator(10, 21, "div"))
assert calculator(10, 20, "add") == 30
assert calculator(10, 21, "sub") == -11
assert calculator(15, 3, "mul") == 45
assert calculator(30, 5, "div") == 6    