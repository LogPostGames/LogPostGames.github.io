import os
import json
from datetime import datetime
import urllib.parse  # Used to format the title for the URL text parameter

def main():
    config_file = "templates.json"

    if not os.path.exists(config_file):
        print(f"Error: Could not find '{config_file}'.")
        return

    with open(config_file, "r", encoding="utf-8") as file:
        templates = json.load(file)

    # 1. Display action menu
    print("What would you like to create?")
    options = list(templates.keys())
    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")

    try:
        choice = int(input("\nEnter the number of your choice: "))
        selected_option = options[choice - 1]
    except (ValueError, IndexError):
        print("Invalid choice. Exiting.")
        return

    action_data = templates[selected_option]

    # 2. Collect regular inputs
    user_inputs = {}
    for var in action_data["variables"]:
        user_inputs[var] = input(f"Enter {var.replace('_', ' ')}: ")

    # 3. AUTO-GENERATE COVER PLACEHOLDER URL
    # Formats title for URLs (e.g., "My Title!" -> "My+Title%21")
    url_safe_title = urllib.parse.quote_plus(user_inputs.get("title", "Blog Post"))
    user_inputs["cover"] = f"https://placehold.co/740x300/232629/c1121f?text={url_safe_title}"

    # 4. Select Tag from Options
    allowed_tags = action_data.get("allowed_tags", [])
    selected_tags = []

    if allowed_tags:
        print("\nSelect a tag for this post:")
        for i, tag in enumerate(allowed_tags, start=1):
            print(f"{i}. {tag}")
        
        try:
            tag_choice = int(input("\nEnter tag number: "))
            selected_tags = [allowed_tags[tag_choice - 1]]
        except (ValueError, IndexError):
            print("Invalid tag selection. Defaulting to first option.")
            selected_tags = [allowed_tags[0]]
            
    user_inputs["tags"] = ", ".join(selected_tags)

    # 5. Auto-generate current date
    user_inputs["date"] = datetime.now().strftime("%Y-%m-%d")

    # 6. Create HTML File
    print("\n--- Generating Output ---")
    generated_links = []

    for src_template, dest_path in action_data["files"].items():
        if not os.path.exists(src_template):
            print(f"Error: Base template '{src_template}' not found.")
            continue

        with open(src_template, "r", encoding="utf-8") as f:
            raw_html = f.read()

        formatted_dest_path = dest_path.format(**user_inputs)
        formatted_html = raw_html.format(**user_inputs)

        directory = os.path.dirname(formatted_dest_path)
        if directory and not os.path.exists(directory):
            os.makedirs(directory)

        with open(formatted_dest_path, "w", encoding="utf-8") as f:
            f.write(formatted_html)

        print(f"Successfully generated: {formatted_dest_path}")
        
        clean_title = user_inputs["title"].lower().replace(" ", "-")
        generated_links.append(f"/news/{clean_title}")

    # 7. Update news.json
    index_file_path = action_data.get("index_file")

    if index_file_path and os.path.exists(index_file_path):
        with open(index_file_path, "r", encoding="utf-8") as f:
            posts = json.load(f)

        new_post_entry = {
            "title": user_inputs.get("title", ""),
            "desc": user_inputs.get("desc", ""),
            "cover": user_inputs.get("cover"), # Uses the placeholder URL
            "link": generated_links[0] if generated_links else f"/news/{user_inputs.get('title')}",
            "date": user_inputs.get("date"),
            "tags": selected_tags
        }

        posts.insert(0, new_post_entry)

        with open(index_file_path, "w", encoding="utf-8") as f:
            json.dump(posts, f, indent=2)

        print(f"Successfully updated: {index_file_path}")

if __name__ == "__main__":
    main()