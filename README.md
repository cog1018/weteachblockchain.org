# Blockchain Institute

## Static Site Generator
This is the staging repo for static site generation via Jekyll. This repo compiles to the site at https://staging.weteachblockchain.org/ and the progress can be observed from the 'Environments' tab on the Github repo. Be sure to log in as a verified collaborator to see this tab.

## About
This site uses the [Jekyll templating engine](https://jekyllrb.com/) to generate static HTML pages and hosts them using Github pages from the `gh-pages` branch of this repo.

Jekyll uses a combination of [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), CSS, and raw HTML to generate pages. 


# Instructions

## General Structure

Jekyll files should all contain a header section (delimited by `---`) which details how they will be compiled to HTML. The header can contain a range of information. The header from `index.html` is shown below as an example. 

```
---
layout: default
title: Home
stylesheet: homepage.css
ogTitle: The Blockchain Institute
ogDesc: We are a nonprofit organization with the mission of educating the world on all things related to blockchain, cryptocurrency, and decentralized technology. Sign up for an in-person class or take a free online course today!
ogImage: https://weteachblockchain.org/assets/img/headerBackgroundTile.jpg
ogUrl: https://weteachblockchain.org/
---
```

### Layouts
Layouts are a core component of Jekyll and are stored in the folder `_layouts`. These should not be modified, but a new page can be presented in a different layout by specifying it in the markdown header as shown above.

### Title
This is used to set the title as it appears in the browser tab or window. These are not crucial, but will help the user to distinguish tabs. Ideally the title should be less than 20 characters. 

### Stylesheet
Each page should have a personalized stylesheet created and added to `assets/css/`. The goal of this is to ensure that unnecessary styles are not loaded onto pages where they are not relevant. For some layouts, such as events and lessons, the stylesheets will be predefined throughout the system, so these markdown templates will simply ignore the `stylesheet` option if it is defined.

### Open Graph Protocol (og)
The Open Graph Protocol provides social media websites and messaging services with the information that they need to preview a page. These can be set in the header space for any page or post / event and will be displayed automatically when the link is shared!

A full example is shown in the index.html sample above, but this is the general format:
```
ogTitle: < title to be shown in the preview >
ogDesc: < text blurb to display below the title > 
ogImage: < full https:// url to the image to display as a preview >
ogUrl: < the url to display for users >
```

(Full Docs Here)[https://ogp.me/]


## Adding Images
Images can be added to the folder at `assets/img/` and will be automatically served by Github's CDN. 

To display an image in a page, use an HTML image tag and a relative path as shown below:
`<img src="/assets/img/WTBORG_Events-01.png">`


## Navigation Header

Most of the current layouts use the Navigation header structure to display a menu at the top of the page. This is a slightly complicated functionality, and uses a data file combined with a layout in order to provide an 

### Nav Data
The navigation menu is defined in `_data/navigation.yaml` and can be used to add new items to the header. Each item added should follow this format:
```
- name: Developer Bootcamp
  link: /developer-toolkit/
  class: hideOnDesktop
```

The class should be set to either `normal` or `hideOnDesktop`. This specifies whether the item should be shown in the mobile menu only. By default, these will be set to `normal` and will appear in both mobile and desktop menus.


### Nav Layout
The navigation menu is built as an `_includes` component, which allows it to be injected into all pages. The component file can be found at `_includes/navigation.html`. 


## Pages
Pages are the core elements of the site and should be added to the root directory with `.html` extensions. 


## CSS 
CSS is created from the `assets` directory and compiles from the `_sass` directory.

### SCSS Structure
As an example, `/assets/css/homepage.css` contains the following code:
```---
---
@import "main";

@import "homepageElements";

@import "homepageResponsive";
```

This means that `homepage.css` pulls in the sass from `_sass/main.scss`, `_sass/homepageElements.scss`, and `_sass/homepageResponsive.scss` and then compiles them together into the final output css for the page. 

### Variables
In `_sass/main.scss` it's also important to note that bootstrap and the variables file are imported at the top of the file:

```
@import "variables";
@import "bootstrap/scss/bootstrap";
```

The variables file can thus be used to set global constants, for easy updating later. Here's an example of what this looks like:

```
$white:    #fff;
$red:     #dc3545;
$body-bg: $white;
$body-color: $white;

/* custom vars */
$custom-font-size: 50px;
```

These can then be used in other .scss files like so:

```
.className {
	color: $body-color;
}
```

### Bootstrap 
Bootstrap is a CSS and HTML framework which provides easy to use responsive elements for page design. This streamlines developement for many device types, and ensures consistancy throughout the designs. In order to avoid unnecessary styles being added, please refer to (the bootstrap documentation)[https://getbootstrap.com/docs/4.0/getting-started/introduction/] and check for potential solutions before writing custom code. 

*As noted in the previous section, boostrap is loaded in main.scss, so it should be available on all pages by default. If this does not appear to be the case, please contact Alex and he can troublesheet further.*


### Responsive (multi-device) 
Because bootstrap is being used for most elements, it is only necessary to make specific tweaks for responsive design. These should generally be stored in a separate css sheet named like `xxxxResponsive.scss` in the `scss/` directory. These can then be imported in the same way that's shown in the SCSS Structure section above.


Responsive css files should follow the structure shown below:
```
/* Desktop */
@media screen and (max-width: 1000px) {
	/* This is for larger devices like iPad Pro */
}

/* Tablet */
@media screen and (max-width: 800px ) {
	/* This is for small devices like tablets phones */
} 

/* Mobile */
@media screen and (max-width: 600px) {
	/* This is for small devices like mobile phones */
}


@media screen and (max-width: 330px) {
	/* This is for extra small devices like older iPhones */
}
```



