python3 scripts/add-nbsp-to-images-lines.py && pandoc -f markdown+lists_without_preceding_blankline+autolink_bare_uris -t html -s index.md -o index.html -c style.min.css --template=scripts/template.html
python3 scripts/change-html.py