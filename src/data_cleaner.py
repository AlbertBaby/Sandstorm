import os

work_dir = ("test//Step-definitions")

scenario = open("test/Features/home.feature", "r")

def getStepDefinition(featureLine):
     
    for file in os.listdir(work_dir):
        if file.endswith(".ts"):
            with open(work_dir + "//" + file, "r") as f:
                for line in f:
                    if featureLine  in line:
                        stepDef=[line]
                        for featureLines in line:
                            if featureLines is not "})":
                                stepDef.append(line)
                            else:
                                break
                        return stepDef         
                    else:
                        continue
                f.close()
            break



def featureFileName():
    with scenario as file:
        lines = file.readlines()

    for eachLines in lines:
        if ("Scenario" in eachLines):
            print(eachLines)
            break
