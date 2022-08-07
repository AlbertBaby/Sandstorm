work_dir = ("test/Step-definitions")

scenario = open("test/Features/home.feature", "r")

with scenario as file:
    lines = file.readlines()
    
for eachLines in lines:
    if ("Scenario" in eachLines):
        print(eachLines)

