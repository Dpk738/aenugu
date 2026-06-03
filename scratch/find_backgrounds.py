import os

files = [
    r"c:\Users\Deepak Srinivas\Aenugu\src\index.css",
    r"c:\Users\Deepak Srinivas\Aenugu\src\App.css"
]

for filepath in files:
    if os.path.exists(filepath):
        print(f"\n=== {os.path.basename(filepath)} ===")
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for i, line in enumerate(lines):
            if "background" in line:
                print(f"Line {i+1}: {line.strip()}")
    else:
        print(f"Not found: {filepath}")
