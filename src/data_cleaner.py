
work_dir = ("test/Step-definitions")

scenario = open("test/Features/home.feature", "r")

with open(scenario) as f:
    lines = scenario.readlines()
    print(lines)

