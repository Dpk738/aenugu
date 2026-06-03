import os

css_path = r"c:\Users\Deepak Srinivas\Aenugu\src\App.css"
if os.path.exists(css_path):
    with open(css_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    found = False
    for i, line in enumerate(lines):
        if "why-" in line:
            found = True
            print(f"Line {i+1}: {line.strip()}")
            # print surrounding lines
            start = max(0, i-5)
            end = min(len(lines), i+15)
            print("--- Context ---")
            for j in range(start, end):
                print(f"  {j+1}: {lines[j].strip()}")
            print("---------------\n")
else:
    print("App.css not found")
