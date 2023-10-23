from PIL import Image
def replace_color(image_path, target_color, replacement_color, tolerance=15):
    img = Image.open(image_path).convert("RGB")
    img_data = img.getdata()

    new_img_data = []
    for item in img_data:
        r, g, b = item
        tr, tg, tb = target_color
        if abs(r - tr) <= tolerance and abs(g - tg) <= tolerance and abs(b - tb) <= tolerance:
            new_img_data.append(replacement_color)
        else:
            new_img_data.append(item)

    img.putdata(new_img_data)
    img.save("new_" + image_path)

# Example usage
replace_color("Logo.png", (238, 234,200), (239,234,218))
