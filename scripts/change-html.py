import sys
import re

def read_file(filename):
	with open(filename, 'r', encoding='utf-8') as file:
		content = file.read()
	return content

def add_sidebar(html):
	html=html.replace("<body>","<body>\n<header>")
	html=html.replace("<h1","</header>\n<h1")
	return html

def add_main(html):
	html = html.replace("<h1","<main>\n<h1")
	html = html.replace("</body>","</main>\n</body>")
	return html

def add_content(html):
	html = html.replace("</h2>",'</h2>\n<div id="content">')
	html = html.replace("</main>","</div>\n</main>")
	return html

def add_sections(html):
	html=html.replace('<div id="content">\n<h3','<div id="content">\n<section>\n<h3')
	html=html.replace("</p>\n<h3","</p>\n</section>\n<section>\n<h3")
	html=html.replace("</p>\n<h2","</p>\n</section>\n</div><h2")
	html=html.replace("</body>","</section>\n</body>")
	return html

def change_position_image(html):
	regex = r'(<h3.*\n?.*?<\/h3>)\n(<p.*\n*.*\n*.* </p>)'
	def position(match):
		h3 = match.group(1)
		img = match.group(2)
		updated_position = f'{img}\n{h3}'
		return updated_position
	html = re.sub(regex,position,html)
	return html

def add_image_attributes(html):
	# Définir la regex pour rechercher les balises img
	regex = r'<img\s(src=".*?")'
	regex_img_with_no_alt = r'(<img.*?"lazy") />'
	def replace_img(match):
		img_src = match.group(1)
		# Ajouter les attributs spécifiés
		updated_img_tag = f'<img {img_src} width="400" height="300" loading="lazy"'
		return updated_img_tag
	def add_alt(match):
		img_with_no_alt = match.group(1)
		updated_img_with_no_alt = f'{img_with_no_alt} alt />' 
		return updated_img_with_no_alt
	html = re.sub(regex, replace_img, html)
	html = re.sub(regex_img_with_no_alt, add_alt, html)
	return html

def add_js(html):
	html = html.replace("</body>",'<script src="script.min.js"></script>\n</body>')
	return html

def main():
	filename = "index.html"
	html = read_file(filename)
	html = add_sidebar(html)
	html = add_main(html)
	html = add_content(html)
	html = add_sections(html)
	html = change_position_image(html)
	html = add_image_attributes(html)
	html = add_js(html)
	with open(filename, 'w', encoding='utf-8') as file:
		file.write(html)

if __name__ == "__main__":
	main()