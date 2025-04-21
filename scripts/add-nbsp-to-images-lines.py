import re

def add_nbsp_to_image_lines(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    in_image_section = False

    for i in range(len(lines)):
        line = lines[i].strip()

        if line.startswith("# "):  # Assuming h1 title
            in_image_section = True
            continue

        if in_image_section and re.match(r'^!\[.*\]\(.+\)$', line):
            # If the line matches the image syntax, add a non-breaking space at the end
            lines[i] = line + " \n"

    with open(file_path, 'w') as file:
        file.writelines(lines)

if __name__ == "__main__":
    md_file_path = "README.md"
    add_nbsp_to_image_lines(md_file_path)