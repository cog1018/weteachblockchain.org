module.exports = {
    {% for entry in site.posts %}
        "{{ entry.url | slugify }}": {
            "title": "{{ entry.title | xml_escape }}",
            "url": "{{ entry.url | xml_escape }}",
            "summary": "{{ entry.content | strip_html | strip_newlines | truncatewords: 50 | xml_escape }}"
        },
    {% endfor %}
    {% for entry in site.pages %}
        "{{ entry.url | slugify }}": {
            "title": "{{ entry.title | xml_escape }}",
            "url": "{{ entry.url | xml_escape }}.html",
            "summary": "{{ entry.content | strip_html | strip_newlines | truncatewords: 50 | xml_escape }}"
        }
        {% unless forloop.last %},{% endunless %}
    {% endfor %}
}