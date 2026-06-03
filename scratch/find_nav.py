import os

css_path = r"c:\Users\Deepak Srinivas\Aenugu\src\App.css"
if os.path.exists(css_path):
    with open(css_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    for i, line in enumerate(lines):
        if "nav-" in line or "header" in line:
            print(f"Line {i+1}: {line.strip()}")
else:
    print("App.css not found")
