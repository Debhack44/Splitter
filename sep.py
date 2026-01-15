def split_file(input_file, lines_per_file=500):
    with open(input_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    file_count = 1
    for i in range(0, len(lines), lines_per_file):
        chunk = lines[i:i + lines_per_file]
        output_file = f"output_part_{file_count}.txt"
        with open(output_file, "w", encoding="utf-8") as out:
            out.writelines(chunk)
        print(f"✅ Created {output_file} with {len(chunk)} lines")
        file_count += 1

# === Run it ===
split_file("navy.txt", 500)