# dang-pelican-barebones

## What is it? 

This repository contains a barebones D3 + Angular + Pelican deployment.

Check it out, and you can get started right away creating a Pelican site that uses 
Angular.js.

## Where is everything?

The ```pelican``` directory contains all the important files. This consists primarily
of a barebones Pelican theme that includes Angular (and other goodies), 
but is packed as a whole ready-to-go repository since that is more the style I like.

The theme is called simple-angular, and it is a really stripped-down version
(most of the non-essential blog stuff like tag/category/author pages is ripped out).
The template is intended for use developing static pages.


## How to use it?

Check out a copy of this repository to get your site going,
and open the `pelican` directory:

```
git clone https://github.com/charlesreid1/dang-pelican-barebones
cd dang-pelican-barebones/pelican/
```

The default theme is defined by the files in the `simple-angular` directory.
The theme can be installed using the `pelican-themes` command line utility:

```
pelican-themes -i simple-angular
```

That will allow you to use this theme when you make a site with Pelican.
The theme will get you started with the bare essentials needed to get an 
Angular "Hello World" site going.


