
work_dir = ("test/Step-definitions")

scenario = open("test/Features/home.feature", "r")

for path in glob.glob(os.path.join(work_dir, "item*.txt")):
    with io.open(path, mode="r", encoding="utf-8") as fd:
        content = fd.read()

