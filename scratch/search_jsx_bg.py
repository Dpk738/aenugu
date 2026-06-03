import os
import glob

components_dir = r"c:\Users\Deepak Srinivas\Aenugu\src\components\*"
files = glob.glob(components_dir) + [r"c:\Users\Deepak Srinivas\Aenugu\src\App.jsx"]

for filepath in files:
    if os.path.isfile(filepath):
        print(f"\n=== {os.path.basename(filepath)} ===")
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for i, line in enumerate(lines):
            if "backgroundColor" in line or "background" in line:
                print(f"Line {i+1}: {line.strip()}")
