
# maxCount=int(input("Enter the number of fibonacci numbers you want to print: "))
initialNumber=1
currentNumber=1

def printInitialTwo():
    print(initialNumber,currentNumber, end =" ")

def fibonacci(maxCount,initialNumber,currentNumber):
    if (maxCount==1):
        print(initialNumber, end =" ")
    elif (maxCount==2):
        printInitialTwo
    elif(maxCount>2):
        printInitialTwo()
        for i in range(maxCount-2):
            currentNumber=currentNumber+initialNumber
            print(currentNumber, end =" ")
            initialNumber=currentNumber-initialNumber



# fibonacci(maxCount,initialNumber,currentNumber) 

def matrixMultiplication(matrix1,matrix2):
    result=[[0,0,0],[0,0,0],[0,0,0]]
    for i in range(len(matrix1)):
        for j in range(len(matrix2[0])):
            for k in range(len(matrix2)):
                result[i][j]+=matrix1[i][k]*matrix2[k][j]
    return result


        
       