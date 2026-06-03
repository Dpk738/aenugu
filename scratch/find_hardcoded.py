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
            line_str = line.strip().lower()
            if "#120905" in line_str or "#0a0402" in line_str or "17, 9, 5" in line_str or "18, 9, 5" in line_str or "58, 36, 24" in line_str:
                print(f"Line {i+1}: {line.strip()}")
    else:
        print(f"Not found: {filepath}")
