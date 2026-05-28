import os
import shutil

src_dir = "/home/murtazakhanpro/Documents/Web Development Projects/maherenterprise/reference folder"
dst_dir = "/home/murtazakhanpro/Documents/Web Development Projects/maherenterprise/assets"

try:
    files = os.listdir(src_dir)
    print("Files in src:", files)
    skyline_files = [f for f in files if f.startswith("Shara-e-Faisal_skyline_Karachi")]
    skyline_files.sort()

    for i, filename in enumerate(skyline_files):
        src_path = os.path.join(src_dir, filename)
        dst_filename = f"hero-slide-{i+1}.jpg"
        dst_path = os.path.join(dst_dir, dst_filename)
        shutil.copy(src_path, dst_path)
        print(f"Copied {filename} to {dst_filename}")
except Exception as e:
    print("Error:", e)
